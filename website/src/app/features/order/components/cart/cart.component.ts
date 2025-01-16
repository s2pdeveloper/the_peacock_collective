import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService, StorageService } from 'src/app/core/services';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  qty: number = 1;
  user: any = null;
  originalCart = [];
  sessionCart: any[] = [];
  showUpdate: boolean = false;
  isLoading: boolean = false;
  type: string = '';
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private router: Router,
    public commonService: CommonService,
    private cartService: CartService,
    private storageService: StorageService,
    private toasterService: ToastrService,
    private spinnerService: SpinnerService,
    private actRouter: ActivatedRoute
  ) {
    this.user = this.storageService.get('Customer');
  }
  payloadData = {
    edit: [],
    delete: [],
  };
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {
    // this.originalCart = JSON.parse(sessionStorage.getItem('products'));
    // this.sessionCart = JSON.parse(sessionStorage.getItem('products'));
    // console.log("this.sessionCart",this.sessionCart);
    // this.getAllCartData()

    this.actRouter.queryParams.subscribe((params: any) => {
      if (params?.type) {
        this.type = params.type;
      }
    });

    if (isPlatformBrowser(this._platformId)) {
      if (this.type == 'CART') {
        this.sessionCart = sessionStorage.getItem('products')
          ? JSON.parse(sessionStorage.getItem('products'))
          : [];
      } else {
        this.sessionCart = sessionStorage.getItem('buyProducts')
          ? JSON.parse(sessionStorage.getItem('buyProducts'))
          : [];
      }
    }
  }
  deleteVariant(id) {
    console.log('id222222', id);
    this.cartService.delete(id).subscribe({
      next: (success) => {
        console.log('success', success);
        this.toasterService.success(success?.result?.message);
        // this.getAllCart()
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  // updateAllCart() {
  //   this.payloadData.edit = [];

  //   for (let item of this.sessionCart) {
  //     item.qty = Number(item.qty);
  //     let orgCart = this.originalCart.find((y) => y.id == item.id);
  //     console.log('orgCart', orgCart);

  //     if (this.checkForVariantQtyExceeds(item)) {
  //       item.error = true;
  //       console.log('this.sessionCart', this.sessionCart);
  //       return;
  //     } else {
  //       item.error = false;
  //     }
  //     if (orgCart && orgCart.qty != item.qty) {
  //       this.payloadData.edit.push(item);
  //     }
  //   }

  //   console.log('this.payloadData)', this.payloadData);

  //   this.cartService.updateAll(this.payloadData).subscribe({
  //     next: (success) => {
  //       // this.sessionCart = success;
  //       this.toasterService.success('Cart updated successfully');
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     },
  //   });
  // }
  checkForVariantQtyExceeds(cart) {
    let qtyExceed = false;
    for (const item of this.commonService.allData.variants) {
      if (item.id == cart.variantId) {
        if (typeof +cart.qty == 'number') {
          if (item.qty < cart.qty) {
            this.toasterService.error('Quantity not available in stock!!');
            qtyExceed = true;
          }
          break;
        } else {
          this.toasterService.error('Invalid Quantity');
          qtyExceed = true;
        }
      }
    }
    return qtyExceed;
  }
  // getAllCart() {
  //   this.cartService.getAll().subscribe({
  //     next: (success) => {
  //       this.originalCart = JSON.parse(JSON.stringify(success.result.rows));
  //       this.sessionCart = JSON.parse(JSON.stringify(success.result.rows));
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     },
  //   });
  // }
  get totalItemPrice() {
    if (this.sessionCart.length) {
      let totalPriceArray = this.sessionCart.reduce(
        (acc, currValue) =>
          acc + currValue.cartWithVariants.price * currValue.qty,
        0
      );
      return totalPriceArray;
    }
  }
  checkout() {
    // let checkoutProduts = this.sessionCart.map((x) => {
    //   return {
    //     price: x.cartWithVariants.price * x.qty,
    //     qty: x.qty,
    //     variantId: x.variantId,
    //   };
    // });
    // if (isPlatformBrowser(this._platformId)) {
    //   sessionStorage.setItem('products', JSON.stringify(checkoutProduts));
    this.router.navigate(['/order/checkout'], {
      queryParams: {
        type: this.type,
      },
    });
    // }
  }
  decrementQty(p: any): void {
    if (p.qty != 1) {
      p.qty = Math.max(1, p.qty - 1);
      if (this.type == 'CART') {
        let data = {
          customerId: this.user.id,
          id: p.id,
          qty: p.qty,
        };
        this.spinnerService.show();
        let products: any[] = JSON.parse(sessionStorage.getItem('products'));
        let index = products.findIndex((x: any) => x.id == p.id);

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
        let products: any[] =
          JSON.parse(sessionStorage.getItem('buyProducts')) ?? [];

        let index;
        if (products) {
          index = products.findIndex(
            (prod: any) => prod.variantId === p.variantId
          );
        }
        products[index].qty = p.qty;
        sessionStorage.setItem('buyProducts', JSON.stringify(products));
      }
    }
  }

  incrementQty(p: any): void {
    if (this.type == 'CART') {
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
      let products: any[] =
        JSON.parse(sessionStorage.getItem('buyProducts')) ?? [];

      let index;
      if (products) {
        index = products.findIndex(
          (prod: any) => prod.variantId === p.variantId
        );
      }
      let finalQty = products[index] ? products[index]?.qty + p.qty + 1 : p.qty;
      if (finalQty > products[index]?.cartWithVariants?.qty) {
        this.toasterService.error(
          'Your selected product is already with max quantity in cart.'
        );
        return;
      } else {
        p.qty = p.qty + 1;
        products[index].qty = p.qty;
      }
      sessionStorage.setItem('buyProducts', JSON.stringify(products));
      this.commonService.addToCart();
    }
  }
}
