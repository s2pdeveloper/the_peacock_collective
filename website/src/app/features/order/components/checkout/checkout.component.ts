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

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit, OnDestroy {
  @Inject(PLATFORM_ID) private _platformId: Object;

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
    private cartService: CartService
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
    if (this.type == 'CART') {
      this.getAllCartData();
    }
    if (isPlatformBrowser(this._platformId)) {
      this.product = sessionStorage.getItem('products')
        ? JSON.parse(sessionStorage.getItem('products'))
        : [];
      console.log('this.product', this.product);
    }

    // this.getAllCartData();

    this.getAddresses();
    console.log(
      'this.commonService.allData.product',
      this.commonService.allData.products
    );
    console.log('this.product', this.product);
    let allProduct = JSON.parse(
      JSON.stringify(this.commonService.allData.products)
    );

    if (this.product.length) {
      for (let item of this.product) {
        let variant = null;
        let prod = allProduct.find((x) => {
          if (x.productWithVariants.some((y) => y.id == item.variantId)) {
            variant = x.productWithVariants.find((s) => s.id == item.variantId);
            return x;
          }
        });
        console.log('prod', prod);

        prod.variant = variant;
        item.product = prod;
        item.price = item.qty * variant.price;
      }
    }
    console.log('this.product', this.product);
  }
  createOrder() {
    let payload = {
      products: this.product,
      addressId: this.selectedAddressId,
      type: this.type,
    };
    console.log('payload', payload);
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
      (acc, currValue) =>
        acc + currValue.product?.variant.price * currValue.qty,
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
      this.product = success.result.rows;
    });
  }
}
