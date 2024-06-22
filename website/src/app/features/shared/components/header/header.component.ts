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
  scrollPosition: number = 0;
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
  activeCategoryId = null;
  user: any;
  currentVariant = null;
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private router: Router,
    public commonService: CommonService,
    private tagCatPipe: TagCategoryPipe,
    private cartService: CartService,
    private toast: ToastService
  ) {
   
  }
  private modalService = inject(NgbModal);
  openSearch(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  get totalItemPrice() {
    let totalPriceArray = this.cartData.reduce((acc, currValue) => acc + (currValue.cartWithVariants.price * currValue.qty), 0);
    // return totalPriceArray.reduce(
    //   (acc, currValue) => acc + currValue.totalPrice,
    //   0
    // );
    return totalPriceArray;
  }

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
    if (path == '/order/my-orders' || path == '/order/wishlist') {
      if (isPlatformBrowser(this._platformId)) {
        let user = localStorage.getItem('Customer') ? true : false;
        if (!user) {
          this.toast.warning('Please login see this section');
          return;
        }
      }
    }
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
  navigateToDynamic(item: any) {
    this.activeCategoryId = item.id;
    const path: String = `pages/${item.id}`;
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
  changeActiveCategory() {
    const filterCategory: any[] = this.commonService.allData.categories.filter(x => x.categoryWithtags.some(y => y.tagId == this.activeTagId));
    if (filterCategory.length) {
      this.activeCategoryId = filterCategory[0].id;
    } else {
      this.activeCategoryId = null
    }

  }
}
