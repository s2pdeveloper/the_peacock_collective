import { Component, OnDestroy, OnInit } from '@angular/core';
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
  showEye: boolean = true;
  collapsed: boolean = false;
  user: any;
  collapsedAddress: boolean = true;
  collapsedPayment: boolean = true;
  collapsedDetails: boolean = true;
  selectedAddressId: number = null;
  allAddresses: any[] = [];
  product: any[] = [];
  cartData: any[] = [];

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
    this.product = sessionStorage.getItem('products')
      ? JSON.parse(sessionStorage.getItem('products'))
      : [];
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
        prod.variant = variant;
        item.product = prod;
      }
    }
    console.log('this.product', this.product);

    this.getAllCartData();
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
        sessionStorage.removeItem('products');
        this.router.navigate(['/order/my-orders']);
        // this.carts = success;
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
    try {
      if (sessionStorage.getItem('products')) {
        sessionStorage.removeItem('products');
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  getAddresses() {
    if (this.user) {
      this.addressService.getByCustomerId().subscribe((success: any) => {
        this.allAddresses = success.result.rows;
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
      this.cartData = success.result.rows;
    });
  }
}
