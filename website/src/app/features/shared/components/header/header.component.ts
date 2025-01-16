import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  SpinnerService,
  StorageService,
  ToastService,
} from 'src/app/core/services';
import { TagCategoryPipe } from 'src/app/pipes/tag-category.pipe';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { GeneralConfirmationModalComponent } from '../../modals/general-confirmation-modal/general-confirmation-modal';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';
Swiper.use([Navigation]);
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
  isSearchOpen: boolean = false;
  isVisible: boolean = false;
  activeTagTitle: string = '';
  isLoading: boolean = false;
  private modalService = inject(NgbModal);
  isLoginDone: boolean = false;
  showEye: boolean = true;

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private router: Router,
    public commonService: CommonService,
    private toasterService: ToastrService,
    private tagCatPipe: TagCategoryPipe,
    private cartService: CartService,
    private toast: ToastService,
    private storageService: StorageService,
    private spinnerService: SpinnerService,
    private customerService: CustomerService
  ) {
    if (this.storageService.get('Customer')) {
      this.commonService.setLogin();
    }
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  openSearch(content: any) {
    this.modalService.open(content, { size: 'xl', centered: true });
  }
  open() {
    const modalRef = this.modalService.open(GeneralConfirmationModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.info.info =
      'Are you sure you want to log out? You will need to sign in again to access your account.';
    modalRef.closed.subscribe((res: any) => {
      if (res == 'Yes') {
        this.logout('/auth/login');
      } else if (res == 'No') {
        console.log('No');
      }
    });
  }

  get totalItemPrice() {
    if (this.cartData.length) {
      let totalPriceArray = this.cartData.reduce(
        (acc, currValue) =>
          acc + currValue?.cartWithVariants?.price * currValue?.qty,
        0
      );
      return totalPriceArray;
    } else {
      return;
    }

    // return totalPriceArray.reduce(
    //   (acc, currValue) => acc + currValue.totalPrice,
    //   0
    // );
  }
  get totalCartCount() {
    if (this.cartData && this.cartData?.length > 0) {
      let cartCnt = this.cartData.reduce(
        (acc, currValue) => acc + currValue?.qty,
        0
      );
      return cartCnt;
    } else {
      return;
    }
  }

  ngOnInit(): void {
    this.commonService.getLoginStatus().subscribe((success) => {
      this.customer = success;
    });
    this.cartCnt = this.commonService.getCntData();
    console.log('this.cartCnt', this.commonService.getCntData());

    if (isPlatformBrowser(this._platformId)) {
      let user = localStorage.getItem('Customer') ? true : false;
      if (user) {
        this.getAllCartData();
      } else {
        this.getAllCartWithoutLogin();
      }
    }
  }
  navigateTo(path: any) {
    this.isVisible = false;
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
    this.isVisible = false;
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
  checkout(login) {
    if (this.user) {
      // let checkoutProduts = this.cartData.map((x) => {
      //   return {
      //     qty: x.qty,
      //     variantId: x.variantId,
      //   };
      // });
      // if (isPlatformBrowser(this._platformId)) {
      // sessionStorage.setItem('products', JSON.stringify(checkoutProduts));
      this.router.navigate(['/order/checkout'], {
        queryParams: {
          type: 'CART',
        },
      });
      // }
    } else {
      this.openLogin(login);
    }
    this.isCartOpen = !this.isCartOpen;
  }

  showCart() {
    if (isPlatformBrowser(this._platformId)) {
      this.user = this.storageService.get('Customer');
    }
    if (this.user) {
      this.isCartOpen = !this.isCartOpen;
      this.getAllCartData();
    } else {
      this.isCartOpen = !this.isCartOpen;
      // this.toast.warning('Please login to view your cart');
      this.getAllCartWithoutLogin();
    }
  }
  deleteVariant(id) {
    if (this.user) {
      this.cartService.delete(id).subscribe({
        next: (success) => {
          this.getAllCartData();
          this.toasterService.success(success?.result?.message);
        },
        error: (err) => {
          console.log('err', err);
        },
      });
    } else {
      let products = this.storageService.get('noLoginCartProducts') ?? [];
      if (products.length) {
        let index = products.findIndex((x: any) => x.id == id);
        this.commonService.removeToCart(products[index].qty);
        if (index !== -1) {
          products.splice(index, 1);
        }
        console.log('products', products);
        this.toasterService.success(
          'Product from cart has been deleted successfully.'
        );
        this.storageService.set('noLoginCartProducts', products);
      }
      this.getAllCartWithoutLogin();
    }
  }
  getAllCartData() {
    this.cartService.getAll().subscribe((success) => {
      this.cartService.cartItems.next([]);
      this.cartService.cartItems.next([...success.result.rows]);
      this.cartData = this.cartService.cartItems.getValue();
      if (isPlatformBrowser(this._platformId)) {
        let loginCartProducts: any[] = JSON.parse(
          sessionStorage.getItem('products')
        );
        let noLoginCartProducts = this.storageService.get(
          'noLoginCartProducts'
        );
        console.log('loginCartProducts', loginCartProducts);
        console.log('noLoginCartProducts', noLoginCartProducts);
        let user: any = this.storageService.get('Customer');
        console.log('this.user', user);

        if (noLoginCartProducts) {
          // let updatedProducts = noLoginCartProducts.map((product) => {
          //   return {
          //     ...product,
          //     customerId: user?.id,
          //   };
          // });
          // console.log('updatedProducts', updatedProducts);
          // let finalProducts = [...updatedProducts, ...loginCartProducts];
          // console.log('finalProducts', finalProducts);
          // sessionStorage.setItem('products', JSON.stringify(finalProducts));
          // this.storageService.set('noLoginCartProducts', []);
        } else {
          sessionStorage.setItem(
            'products',
            JSON.stringify(success?.result?.rows)
          );
        }
      }
      let count = success.result.rows.reduce((acc, curr) => acc + curr.qty, 0);
      this.commonService.resetCart();
      this.commonService.addToCart(count);
    });
  }
  changeActiveCategory() {
    // this.isVisible = !this.isVisible;
    const filterCategory: any[] = this.commonService.allData.categories.filter(
      (x) => x?.categoryWithtags.some((y) => y?.tagId == this.activeTagId)
    );
    const activeCat: any = this.commonService.allData.categories.find((x) =>
      x?.categoryWithtags.some((y) => y?.tagId == this.activeTagId)
    );
    this.activeTagTitle =
      activeCat?.categoryWithtags[0]?.CategoryTagMapWithTag?.title;

    if (filterCategory.length) {
      this.activeCategoryId = filterCategory[0]?.id;
    } else {
      this.activeCategoryId = null;
    }
  }
  dismissModal(ev) {
    if (ev.type == 'SELECT') {
      this.searchToggle = !this.searchToggle;
      this.modalService.dismissAll();
    } else if (ev.type == 'DESTROY') {
      this.isSearchOpen = ev.isModal;
    } else {
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
  logout(path) {
    this.navigateTo(path);
    this.user = this.storageService.remove('Customer');
    this.commonService.setLogout();
    this.commonService.resetCart();
  }

  decrementQty(p: any): void {
    if (p.qty != 1) {
      if (this.user) {
        p.qty = Math.max(1, p.qty - 1);
        let data = {
          customerId: this.user.id,
          id: p.id,
          qty: p.qty,
        };
        this.spinnerService.show();
        let products: any[] = JSON.parse(sessionStorage.getItem('products'));
        let index = products.findIndex((x: any) => x.id == p.id);
        console.log('products[index]', products[index]);

        if (index !== -1) {
          products[index].qty = p.qty;
          this.isLoading = true;
          this.cartService.update(p.id, data).subscribe((success: any) => {
            this.isLoading = false;
            this.spinnerService.hide();
            this.toasterService.success(success?.result?.message);
          });
        } else {
          this.spinnerService.hide();
          console.error('Product not found in the session storage');
        }
        sessionStorage.setItem('products', JSON.stringify(products));
        this.commonService.removeToCart();
      } else {
        p.qty = Math.max(1, p.qty - 1);
        let products = this.storageService.get('noLoginCartProducts') ?? [];
        if (products.length) {
          let index = products.findIndex((x: any) => x.id == p.id);
          console.log('products[index]', products[index]);
          if (index !== -1) {
            products[index].qty = p.qty;
          }
          this.storageService.set('noLoginCartProducts', products);
          this.commonService.removeToCart();
        }
      }
    }
  }

  incrementQty(p: any): void {
    if (this.user) {
      this.cartService.getAll().subscribe((success) => {
        let carts = success?.result?.rows;
        if (carts.length) {
          let selectedVar = carts.find(
            (cart: any) => cart?.variantId == p.variantId
          );
          if (selectedVar?.qty >= selectedVar.cartWithVariants.qty) {
            this.toasterService.error(
              'Your selected product is already with max quantity in cart.'
            );
            return;
          }
        }
        p.qty = p.qty + 1;
        let data = {
          customerId: this.user.id,
          id: p.id,
          qty: p.qty,
        };
        this.spinnerService.show();
        let products = JSON.parse(sessionStorage.getItem('products'));
        let index = products.findIndex((x: any) => x.id === p.id);

        if (index !== -1) {
          products[index].qty = p.qty;
          this.isLoading = true;
          this.cartService.update(p.id, data).subscribe((success: any) => {
            this.isLoading = false;
            this.spinnerService.hide();
            this.toasterService.success(success?.result?.message);
          });
        } else {
          this.spinnerService.hide();
          console.error('Product not found in the session storage');
        }
        sessionStorage.setItem('products', JSON.stringify(products));
        this.commonService.addToCart();
      });
    } else {
      let products = this.storageService.get('noLoginCartProducts') ?? [];
      if (products.length) {
        let selectedVar = products.find(
          (cart: any) => cart?.variantId == p.variantId
        );
        if (selectedVar?.qty >= selectedVar.cartWithVariants.qty) {
          this.toasterService.error(
            'Your selected product is already with max quantity in cart.'
          );
          return;
        }
        let index = products.findIndex((x: any) => x.id == p.id);
        if (index !== -1) {
          products[index].qty = p.qty + 1;
        }
      }
      p.qty = p.qty + 1;
      this.storageService.set('noLoginCartProducts', products);
      this.commonService.addToCart();
    }
  }
  getAllCartWithoutLogin() {
    let products = [];
    if (isPlatformBrowser(this._platformId)) {
      products = this.storageService.get('noLoginCartProducts') ?? [];
    }
    this.cartService.cartItems.next([]);
    this.cartService.cartItems.next([...products]);
    this.cartData = this.cartService.cartItems.getValue();
    let count = products.reduce((acc, curr) => acc + curr.qty, 0);
    this.commonService.resetCart();
    this.commonService.addToCart(count);
  }
  openLogin(content: any) {
    this.modalService.open(content, { centered: true });
  }
  loginSubmit() {
    if (this.loginForm.value) {
      this.customerService.login(this.loginForm.value).subscribe(
        (success: any) => {
          this.user = success.result;
          this.storageService.set('Customer', success.result);
          this.toasterService.success('Successfully logged in!!!');
          this.isLoginDone = true;
          this.modalService.dismissAll();
        },
        (error) => {}
      );
    } else {
      this.toasterService.error('Something went wrong!!');
    }
  }
}
