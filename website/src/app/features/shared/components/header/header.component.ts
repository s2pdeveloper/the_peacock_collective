import { Component, ElementRef, HostListener, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StorageService, ToastService } from 'src/app/core/services';
import { TagCategoryPipe } from 'src/app/pipes/tag-category.pipe';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [TagCategoryPipe],
})
export class HeaderComponent {
  searchToggle: boolean = false;
  qty: number = 1;
  closeResult = '';
  scrollValue: number = 0;
  scrollPosition: any;
  isMenuOpen: boolean = false;
  isAccountOpen: boolean = false;
  isCatOpen: boolean = false;
  isCartOpen: boolean = false;
  cartData: any[] = [];
  category: any = {
    title: '',
    categories: [],
  };
  activeTagId = null;
  user: any;
  currentVariant = null;
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private router: Router,
    private storageService: StorageService,
    public commonService: CommonService,
    private tagCatPipe: TagCategoryPipe,
    private cartService: CartService,
    private toast: ToastService
  ) {
    // this.user = this.storageService.get('Customer'); 
  }
  private modalService = inject(NgbModal);
  openSearch(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }
  // Header Dropdown Data
  categoryProducts: any[] = [
    {
      name: 'Product 1',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 2',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 3',
      img: '../../../../../assets/images/bride-4.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 4',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 5',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 6',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 7',
      img: '../../../../../assets/images/bride-4.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 8',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 9',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5,
    },
    {
      name: 'Product 10',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5,
    },
  ];
  // Cart Data
  product: any[] = [
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/chair.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
      qty: 5,
      shipCharge: 3.2,
    },
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/printer.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
      qty: 1,
      shipCharge: 3.2,
    },
  ];
  get totalItemPrice() {
    let totalPriceArray = this.cartData.reduce((acc, currValue) => acc + (currValue.cartWithVariants.price * currValue.qty), 0);
    // return totalPriceArray.reduce(
    //   (acc, currValue) => acc + currValue.totalPrice,
    //   0
    // );
    return totalPriceArray;
  }
  totalShipCharge = this.product.reduce(
    (acc, currValue) => acc + currValue.shipCharge,
    0
  );

  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      window.addEventListener('wheel', (event) => {
        this.scrollValue = Math.sign(event.deltaY);
      });
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPositionValue =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.scrollPosition = scrollPositionValue;
  }
  navigateTo(path: any, id: any) {
    this.router.navigate([path], { queryParams: { id: id } });
    let ele: any = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  navigateWithParams(path: any, param: any) {
    this.router.navigate([path], { queryParams: { brand: param } });
    let ele: any = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  navigateToDynamic(id: any) {
    const path: String = `pages/${id}`;
    this.router.navigate([path]);
    let ele: any = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  handleCategory(data: any) {
    this.activeTagId = data.id;
    let tagCategory = this.tagCatPipe.transform(
      this.commonService?.allData?.products,
      this.activeTagId
    );
    this.category.title = data.title;
    this.category.categories.push(...tagCategory);
    this.isCatOpen = !this.isCatOpen;
    this.isMenuOpen = !this.isMenuOpen;
  }
  handleDataRemove() {
    this.isCatOpen = !this.isCatOpen;
    this.isMenuOpen = !this.isMenuOpen;
    this.category.title = '';
    this.category.categories = [];
  }
  checkout() {
    let checkoutProduts = this.cartData.map((x) => {
      return {
        qty: x.qty,
        variantId: x.variantId,
      };
    });

    sessionStorage.setItem('products', JSON.stringify(checkoutProduts));
    this.router.navigate(['/order/checkout'], {
      queryParams: {
        type: 'CART',
      },
    });
  }

  showCart() {
    let user = null
    if (isPlatformBrowser(this._platformId)) {
      user = localStorage.getItem('Customer') ? true : false;
    }
    if (user) {
      this.isCartOpen = !this.isCartOpen;
      this.getAllCartData();
    } else {
      this.toast.warning('Please login for show your cart');
    }
  }
  getAllCartData() {
    this.cartService.getAll().subscribe((success) => {
      this.cartData = success.result.rows;
    });
  }
}
