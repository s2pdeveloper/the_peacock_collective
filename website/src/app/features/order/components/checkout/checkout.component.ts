import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/core/services';
import { AddressService } from 'src/app/services/address.service';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  payment: any;
  showEye: boolean = true;
  collapsed: boolean = false;
  user: any;
  collapsedAddress: boolean = true;
  collapsedPayment: boolean = true;
  collapsedDetails: boolean = true;
  selectedAddressId: number = null;
  allAddresses: any[] = [];
  product: any[] = [];
  // cartData: any[] = [];

  type: string = null;
  constructor(
    private router: Router,
    private actRouter: ActivatedRoute,
    private orderService: OrderService,
    private storageService: StorageService,
    private addressService: AddressService,
    private toasterService: ToastrService,
    private commonService: CommonService,
    private cartService: CartService,
    private paymentService: PaymentService,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) {
    this.user = this.storageService.get('Customer');
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {
    this.actRouter.queryParams.subscribe((params: any) => {
      if (params?.type) {
        this.type = params.type;
      }
    });
    // if (this.type == 'CART') {
    //   this.getAllCartData();
    // }
    console.log(
      'isPlatformBrowser(this._platformId',
      isPlatformBrowser(this._platformId)
    );

    if (isPlatformBrowser(this._platformId)) {
      this.product = sessionStorage.getItem('products')
        ? JSON.parse(sessionStorage.getItem('products'))
        : [];
      console.log('this.product55555--------1', this.product);
    }

    // this.getAllCartData();

    this.getAddresses();
    console.log(
      'this.commonService.allData.product',
      this.commonService.allData.products
    );
    // console.log('this.product', this.product);
    let allProduct = JSON.parse(
      JSON.stringify(this.commonService.allData.products)
    );

    if (this.product.length) {
      for (let i = 0; i < this.product.length; i++) {
        let item = this.product[i];
        console.log('item.variantId', item.variantId);

        let variant = null;
        for (let p of allProduct) {
          if (p.productWithVariants.some((y) => y.id == item.variantId)) {
            variant = p.productWithVariants.find((s) => s.id == item.variantId);
            if (variant) {
              console.log('variant---1', variant);
              // p.variant = variant;
              this.product[i].product = p;
              this.product[i].variant = variant;
              // this.product[i].product.variant = JSON.parse(JSON.stringify(variant))
              this.product[i].price = this.product[i].qty * variant.price;
              console.log('this.product[i].product.variant', this.product[i]);
              console.log('this.product[i].product', p);
              break;
            }
          }
        }
      }
    }
    console.log('this.222222222', this.product);
  }
  createOrder() {
    let payload = {
      products: this.product,
      addressId: this.selectedAddressId,
      type: this.type,
    };
    console.log('payload', payload);
    this.orderValidate(payload);
  }
  orderValidate(payload) {
    this.orderService.validateOrder(payload).subscribe({
      next: (success) => {
        this.order(payload);
      },
    });
  }
  stripePay(token: any) {
    let amount = this.product.reduce(
      (acc, currValue) => acc + currValue.price,
      0
    );
    console.log('amount', amount);

    let payload = {
      products: this.product,
      addressId: this.selectedAddressId,
      type: this.type,
    };
    this.orderService.validateOrder(payload).subscribe({
      next: (success) => {
        this.paymentStrive(token, payload, amount);
        // this.order(payload)
      },
    });
  }
  paymentStrive(token, payload, amount) {
    this.paymentService.pay({ token: token, amount: amount }).subscribe({
      next: (success) => {
        console.log('success', success);
        this.order(payload);
      },
    });
  }
  order(payload) {
    this.orderService.create(payload).subscribe({
      next: (success) => {
        this.toasterService.success('Order placed successfully!!');
        if (isPlatformBrowser(this._platformId)) {
          sessionStorage.removeItem('products');
          // this.carts = success;
        }
        this.router.navigate(['/order/my-orders']);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  get totalItemPrice() {
    let totalPriceArray = this.product.reduce(
      (acc, currValue) => acc + currValue?.variant.price * currValue.qty,
      0
    );
    // return totalPriceArray.reduce(
    //   (acc, currValue) => acc + currValue.totalPrice,
    //   0
    // );
    return totalPriceArray;
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this._platformId)) {
      try {
        if (sessionStorage.getItem('products')) {
          sessionStorage.removeItem('products');
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  }
  getAddresses() {
    if (this.user) {
      this.addressService.getByCustomerId().subscribe((success: any) => {
        this.allAddresses = success.result.rows;
        for (const item of this.allAddresses) {
          if (item.isDefault) {
            this.selectedAddressId = item.id;
            break;
          }
        }
        console.log('this.allAddresses', this.allAddresses);
      });
    }
  }
  continue() {
    if (this.selectedAddressId == null && this.selectedAddressId == undefined) {
      this.toasterService.error('Please select atleast 1 address');
      return;
    } else {
      this.collapsedPayment = !this.collapsedPayment;
      this.collapsed = !this.collapsed;
    }
  }
  getAllCartData() {
    this.cartService.getAll().subscribe((success) => {
      console.log('success', success);

      this.product = success.result.rows;
    });
  }
}
