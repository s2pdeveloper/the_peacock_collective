import {
  Component,
  Inject,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StorageService, ToastService } from 'src/app/core/services';
import { TagCategoryPipe } from 'src/app/pipes/tag-category.pipe';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [TagCategoryPipe],
})
export class HeaderComponent {
  customer: any;
  searchToggle: boolean = false;
  qty: number = 1;
  cartCnt: Observable<number>;
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
  search: string;
  isSearchOpen: boolean = false
  isVisible: boolean = false
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private router: Router,
    public commonService: CommonService,
    private toasterService: ToastrService,
    private tagCatPipe: TagCategoryPipe,
    private cartService: CartService,
    private toast: ToastService,
    private storageService: StorageService
  ) {
    this.customer = this.storageService.get('Customer');
  }
  private modalService = inject(NgbModal);
  openSearch(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }

  get totalItemPrice() {
    let totalPriceArray = this.cartData.reduce(
      (acc, currValue) =>
        acc + currValue.cartWithVariants.price * currValue.qty,
      0
    );
    // return totalPriceArray.reduce(
    //   (acc, currValue) => acc + currValue.totalPrice,
    //   0
    // );
    return totalPriceArray;
  }

  item = 469;
  ngOnInit(): void {
    this.commonService.getLoginStatus().subscribe((success) => {
      this.customer = success;
    });
    this.cartCnt = this.commonService.getCntData();
    if (isPlatformBrowser(this._platformId)) {
      let user = localStorage.getItem('Customer') ? true : false;
      if (user) {
        this.getAllCartData();
      }
    }

    // this.commonService.addToCart(1);
    // if (isPlatformBrowser(this._platformId)) {
    //   window.addEventListener('wheel', (event) => {
    //     this.scrollValue = Math.sign(event.deltaY);
    //   });
    // }
  }
  hide(){
    if (isPlatformBrowser(this._platformId)) {
      let element = document.getElementById('dropdown')
      console.log("element",element);
      element.style.clipPath = 'polygon(0 0, 100% 0, 100% 0, 0 0)'
    }
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const scrollPositionValue =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;
  //   this.scrollPosition = scrollPositionValue;
  // }
  navigateTo(path: any) {
    this.isVisible = false
    if (path == '/order/my-orders' || path == '/order/wishlist') {
      if (isPlatformBrowser(this._platformId)) {
        let user = localStorage.getItem('Customer') ? true : false;
        if (!user) {
          this.toast.warning('Please login see this section');
          return;
        }
      }
    }
    this.router.navigate([path]);
    let ele: any = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  navigateToProdDetails(id: number) {
    let path = `/product/product-details/${id}`;
    this.router.navigate([path]);
    this.isVisible = !this.isVisible; 
  }
  navigateWithParams(path: any, param: any) {
    this.isVisible = false
    this.router.navigate([path], { queryParams: { brand: param } });
    let ele: any = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
  navigateToDynamic(item: any) {
    // this.isVisible = false
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
    if (isPlatformBrowser(this._platformId)) {
      sessionStorage.setItem('products', JSON.stringify(checkoutProduts));
      this.router.navigate(['/order/checkout'], {
        queryParams: {
          type: 'CART',
        },
      });
    }
  }

  showCart() {
    let user = null;
    if (isPlatformBrowser(this._platformId)) {
      user = localStorage.getItem('Customer') ? true : false;
    }
    if (user) {
      this.isCartOpen = !this.isCartOpen;
      this.getAllCartData();
    } else {
      this.toast.warning('Please login to view your cart');
    }
  }
  deleteVariant(id) {
    this.cartService.delete(id).subscribe({
      next: (success) => {
        this.toasterService.success(success?.result?.message);
        this.getAllCartData();
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  getAllCartData() {
    this.cartService.getAll().subscribe((success) => {
      this.cartData = success.result.rows;
      let count = success.result.rows.reduce((acc, curr) => acc + curr.qty, 0);
      this.commonService.resetCart();
      this.commonService.addToCart(count);
    });
  }
  changeActiveCategory() {
    // this.isVisible = !this.isVisible;
    const filterCategory: any[] = this.commonService.allData.categories.filter(
      (x) => x.categoryWithtags.some((y) => y.tagId == this.activeTagId)
    );
    if (filterCategory.length) {
      this.activeCategoryId = filterCategory[0].id;
    } else {
      this.activeCategoryId = null;
    }
  }
  dismissModal(ev) {
    if (ev.type == "SELECT") {
      this.searchToggle = !this.searchToggle
      this.modalService.dismissAll()
    }
    else if (ev.type == "DESTROY") {
      this.isSearchOpen = ev.isModal;
    }
    else {
      this.isSearchOpen = ev.isModal;
    }
  }
  onMouseOver(itemId: number) {
    this.activeTagId = itemId;
    this.changeActiveCategory();
    this.isVisible = this.toggleVisibility('show');
  }
  toggleVisibility(action: 'show' | 'hide'): boolean {
    return action === 'show' ? true : false;
  }
  onMouseLeave() {
    this.isVisible = this.toggleVisibility('hide');
  }
}
