import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from 'src/app/core/services';
import { TagCategoryPipe } from 'src/app/pipes/tag-category.pipe';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';

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
  isCatOpen: boolean = false;
  isCartOpen: boolean = false;
  category: any = {
    title: '',
    categories: [],
  };
  activeTagId = null;
  constructor(
    private router: Router,
    private el: ElementRef,
    public commonService: CommonService,
    private tagCatPipe: TagCategoryPipe,
    private cartService: CartService,
    private toast: ToastService,

  ) { }
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
    let totalPriceArray = this.product.map((items) => {
      return {
        ...items,
        totalPrice: items.qty * items.price,
      };
    });
    return totalPriceArray.reduce(
      (acc, currValue) => acc + currValue.totalPrice,
      0
    );
  }
  totalShipCharge = this.product.reduce(
    (acc, currValue) => acc + currValue.shipCharge,
    0
  );

  ngOnInit(): void {
    window.addEventListener('wheel', (event) => {
      this.scrollValue = Math.sign(event.deltaY);
    });
    console.log("Your Cart");
    
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
  getAllCart() {

  }
 
  showCart() {
    let user = localStorage.getItem('userData') ? true : false
    if (user) {
      this.isCartOpen = !this.isCartOpen;
    } else {
      this.toast.warning('Please login for show your cart')
    }
  }
}
