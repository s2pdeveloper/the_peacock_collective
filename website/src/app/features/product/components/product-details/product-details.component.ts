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
  attrArr: any[] = [];
  currentVariant = null;
  variants: any[] = [];
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
        console.log(this.currentVariant);
        
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
        // for (const [i, item] of this.products.productWithVariants.entries()) {
        //   for (const varMap of item.variantWithAttrVariantMap) {
        //     let index = this.attrArr.findIndex(
        //       (x) => x.name == varMap.AttrVariantMapWithAttributes.name
        //     );
        //     if (index == -1) {
        //       this.attrArr.push({
        //         name: varMap.AttrVariantMapWithAttributes.name,
        //         type: varMap.AttrVariantMapWithAttributes.type,
        //         value: [varMap.value],
        //         selectedValue: i == 0 ? varMap.value : null,
        //       });
        //     } else {
        //       this.attrArr[index].value.push(varMap.value);
        //       this.attrArr[index].value = [
        //         ...new Set(this.attrArr[index].value),
        //       ];
        //     }
        //   }
        // }
        // this.currentVariant = this.products.productWithVariants.filter(
        //   (x) => x.id === this.currentVariant.id
        // )[0];
      }
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
  }
  handleImg(img: string) {
    this.bannerImg = img;
  }

  createCart() {
    if (this.qty > this.currentVariant.qty) {
      this.qty = this.currentVariant.qty;
    }
    let payload = {
      qty: this.qty,
      variantId: this.currentVariant.id,
      customerId: this.user.id,
    };
    this.cartService.create(payload).pipe(throttleTime(1000)).subscribe((success) => {
      if (success) {
        this.cartService.getAll().subscribe((success) => {
          let count = success.result.rows.reduce(
            (acc, curr) => acc + curr.qty,
            0
          );
          this.commonService.resetCart();
          this.commonService.addToCart(count);
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
          this.toasterService.success('Login done Successfully!!!');
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
        this.toasterService.success('Product added to wishlist!!');
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
}
