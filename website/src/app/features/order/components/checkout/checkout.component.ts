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
import { SpinnerService, StorageService } from 'src/app/core/services';
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
  shippingFee = 0;
  discount = 0;


  type: string = null;
  constructor(
    private router: Router,
    private actRouter: ActivatedRoute,
    private orderService: OrderService,
    private storageService: StorageService,
    private addressService: AddressService,
    private toasterService: ToastrService,
    private spinnerService: SpinnerService,
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

    if (isPlatformBrowser(this._platformId)) {
      this.product = sessionStorage.getItem('products')
        ? JSON.parse(sessionStorage.getItem('products'))
        : [];
    }

    this.getAddresses();
    // console.log('this.product', this.product);
    let allProduct = JSON.parse(
      JSON.stringify(this.commonService.allData.products)
    );

    if (this.product.length) {
      for (let i = 0; i < this.product.length; i++) {
        let item = this.product[i];
        let variant = null;
        for (let p of allProduct) {
          if (p.productWithVariants.some((y) => y.id == item.variantId)) {
            variant = p.productWithVariants.find((s) => s.id == item.variantId);
            if (variant) {
              // p.variant = variant;
              this.product[i].product = p;
              this.product[i].variant = variant;
              // this.product[i].product.variant = JSON.parse(JSON.stringify(variant))
              this.product[i].price = this.product[i].qty * variant.price;
              break;
            }
          }
        }
      }
    }
  }
  createOrder() {
    let amount = this.product.reduce(
      (acc, currValue) => acc + currValue.price,
      0
    );
    let payload = {
      products: this.product,
      addressId: this.selectedAddressId,
      type: this.type,
      amount: (amount + this.shippingFee) - this.discount,
      shippingFee: this.shippingFee,
      discount: this.discount,
    };
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
    const description = (product: any) => {
      let str = '';
      for (const item of product) {
        str = (str ? str + ',' : '') + `${item.variant.sku} (QTY: ${item.qty},Price : ₹ ${item.variant.price} / unit)`;

      }
      return str;
    };
    let payload = {
      products: this.product,
      addressId: this.selectedAddressId,
      desc: description(this.product),
      type: this.type,
    };
    this.orderService.validateOrder(payload).subscribe({
      next: (success) => {
        this.paymentStripe(token, payload, amount);
        // this.order(payload)
      },
    });
  }
  paymentStripe(token, payload, amount) {
    this.spinnerService.show();
    let res = {
      token: token.id,
      desc: payload.desc,
      amount: amount,
      email: this.user.email,
      name: this.user.name,
    };
    this.paymentService.pay(res).subscribe({
      next: (success) => {
        this.spinnerService.show();
        let orderPayload = {
          ...payload,
          amount: (amount + this.shippingFee) - this.discount,
          transId: success?.result?.data?.id,
          shippingFee: this.shippingFee,
          discount: this.discount,
        };
        if (success?.result?.data?.status == 'succeeded') {
          this.order(orderPayload);
        } else {
          this.toasterService.error('Transaction Failed!!');
        }
      },
      error: (err) => {
        this.spinnerService.show();
        console.log('err', err);
      },
    });
  }
  order(payload) {
    console.log('payload', payload);

    this.spinnerService.show();
    this.orderService.create(payload).subscribe({
      next: (success) => {
        this.spinnerService.hide();
        this.toasterService.success('Order placed successfully!!');
        if (isPlatformBrowser(this._platformId)) {
          sessionStorage.removeItem('products');
          // this.carts = success;
        }
        this.router.navigate(['/order/my-orders']);
      },
      error: (err) => {
        this.spinnerService.hide();
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
      this.product = success.result.rows;
    });
  }
}
