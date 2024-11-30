import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService, StorageService } from 'src/app/core/services';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/services/customer.service';
import { AddressService } from 'src/app/services/address.service';
import { throttleTime } from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  private modalService = inject(NgbModal);
  private actRoute = inject(ActivatedRoute);
  qty: number = 1;
  tabActive: String = '';
  products: any = null;
  isLoginDone: boolean = false;
  isFav: boolean = false;
  attrArr: any[] = [];
  currentVariant = null;
  variants: any[] = [];
  wishlist: any[] = [];
  carts: any[] = [];
  user: any;
  bannerImg: any;
  event: any;

  constructor(
    private router: Router,
    public commonService: CommonService,
    private spinnerService: SpinnerService,
    private cartService: CartService,
    private customerService: CustomerService,
    private storageService: StorageService,
    private toasterService: ToastrService,
    private wishlistService: WishlistService,
    private addressService: AddressService,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) {
    this.user = this.storageService.get('Customer');
  }
  showEye: boolean = true;
  setTabActive(key: any) {
    this.tabActive = key;
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  openLogin(content: any) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe((params: any) => {
      if (params?.id) {
        this.products = this.commonService.allData.products.find(
          (x) => x.id == Number(params.id)
        );
        this.variants = this.products.productWithVariants;
        this.currentVariant = this.products.productWithVariants[0];
        // console.log(this.currentVariant);
        if (this.user) {
          this.getAllWishlist();
          this.getAllCart();
        }
        this.attrArr = [];
        this.bannerImg = this.currentVariant.variantImages[0]?.image;
        for (const item of this.currentVariant.variantWithAttrVariantMap) {
          this.attrArr.push({
            name: item.AttrVariantMapWithAttributes.name,
            type: item.AttrVariantMapWithAttributes.type,
            value: [item.value],
            img: null,
            selectedValue: item.value ? item.value : null,
          });
        }
      }
    });
  }
  getAllWishlist() {
    this.wishlistService.getAll().subscribe({
      next: (success) => {
        this.wishlist = success.result.rows;
        this.isFav = this.wishlist.some(
          (x: any) => x.variantId == this.currentVariant?.id
        );
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  handleVariant(data: any) {
    this.currentVariant = data;
    this.attrArr = [];
    this.bannerImg = this.currentVariant.variantImages[0]?.image;
    for (const item of data.variantWithAttrVariantMap) {
      this.attrArr.push({
        name: item.AttrVariantMapWithAttributes.name,
        type: item.AttrVariantMapWithAttributes.type,
        value: [item.value],
        img: this.currentVariant.variantImages[0]?.image,
        selectedValue: item.value ? item.value : null,
      });
    }
    this.getAllWishlist();
  }
  handleImg(img: string) {
    this.bannerImg = img;
  }

  createCart() {
    if (this.carts.length) {
      let selectedVar = this.carts.find(
        (cart: any) => cart?.variantId == this.currentVariant.id
      );
      console.log('selectedVar', selectedVar);
      if (selectedVar?.qty >= this.currentVariant.qty) {
        this.toasterService.error(
          'You selected product is already with max quantity in cart.'
        );
        return;
      }
    }
    let payload = {
      qty: this.qty,
      variantId: this.currentVariant.id,
      customerId: this.user.id,
    };
    this.cartService.create(payload).subscribe((success) => {
      if (success) {
        this.cartService.getAll().subscribe((success) => {
          let count = success.result.rows.reduce(
            (acc, curr) => acc + curr.qty,
            0
          );
          this.commonService.resetCart();
          this.commonService.addToCart(count);
          this.getAllCart();
        });
      }
      this.toasterService.success('Product added to cart!!');
    });
  }

  validateCart(login, event) {
    try {
      if (!this.user) {
        this.openLogin(login);
        this.event = event;
      } else {
        this.createCart();
      }
    } catch (error) {
      console.log('error', error);
    }
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
          if (this.event == 'cart') {
            this.createCart();
          }
          if (this.event == 'buyNow') {
            this.createBuyNow();
          }
        },
        (error) => {}
      );
    } else {
      this.toasterService.error('Something went wrong!!');
    }
  }
  createBuyNow() {
    if (this.qty > this.currentVariant.qty) {
      this.qty = this.currentVariant.qty;
    }
    let payload = {
      price: this.qty * this.currentVariant.price,
      qty: this.qty,
      variantId: this.currentVariant.id,
    };
    if (isPlatformBrowser(this._platformId)) {
      sessionStorage.setItem('products', JSON.stringify([payload]));
      this.router.navigate(['/order/checkout'], {
        queryParams: {
          type: 'BUY',
        },
      });
    }
  }
  validateBuyNow(login, event) {
    try {
      if (!this.user) {
        this.openLogin(login);
        this.event = event;
      } else {
        this.createBuyNow();
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  addToWishlist() {
    // this.toggleFav = !this.toggleFav
    if (!this.user) {
      this.toasterService.warning('Please login to add product to wishlist');
      return;
    }
    let payload = {
      variantId: this.currentVariant.id,
      customerId: this.user.id,
    };
    this.wishlistService.create(payload).subscribe({
      next: (success) => {
        console.log('success', success);
        this.isFav = true;
        this.toasterService.success('Product added to wishlist!!');
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  decrementQty(): void {
    this.qty = Math.max(1, this.qty - 1);
  }

  incrementQty(): void {
    this.qty = this.qty + 1;
  }
  removeWishlist(id: Number) {
    try {
      let payload = {
        variantId: this.currentVariant.id,
      };
      this.wishlistService.delete(payload).subscribe((success) => {
        this.isFav = false;
        this.getAllWishlist();
        this.toasterService.success('Product removed from wishlist!!');
      });
    } catch (error) {
      console.log('error', error);
    }
  }
  getAllCart() {
    this.cartService.getAll().subscribe({
      next: (success) => {
        this.carts = JSON.parse(JSON.stringify(success.result.rows));
        console.log('success', success.result.rows);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
