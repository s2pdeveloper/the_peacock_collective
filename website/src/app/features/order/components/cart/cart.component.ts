import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/core/services';
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
  carts = [];
  showUpdate : boolean = false;
  constructor(
    private router: Router,
    public commonService: CommonService,
    private cartService: CartService,
    private storageService: StorageService,
    private toasterService: ToastrService
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
    this.getAllCart();
  }
  deleteVariant(item, i) {
    this.payloadData.delete.push(item.id);
    this.carts.splice(i, 1);
  }
  updateAllCart() {
    this.payloadData.edit = [];

    for (let item of this.carts) {
      item.qty = Number(item.qty);
      let orgCart = this.originalCart.find((y) => y.id == item.id);
      console.log('orgCart', orgCart);

      if (this.checkForVariantQtyExceeds(item)) {
        item.error = true;
        console.log('this.carts',this.carts);
        return;
      }else{
        item.error = false;
      }
      if (orgCart && orgCart.qty != item.qty) {
        this.payloadData.edit.push(item);
      }
    }
    
    console.log('this.payloadData)', this.payloadData);

    this.cartService.updateAll(this.payloadData).subscribe({
      next: (success) => {
        // this.carts = success;
        this.toasterService.success('Cart updated successfully')
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  checkForVariantQtyExceeds(cart) {
    let qtyExceed = false;
    for (const item of this.commonService.allData.variants) {
      if (item.id == cart.variantId) {
        if (typeof +cart.qty == 'number') {
          if (item.qty < cart.qty) {
            this.toasterService.error(
              'Quantity not available in stock!!'
            );
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
  getAllCart() {
    this.cartService.getAll().subscribe({
      next: (success) => {
        console.log('success', success);
        this.originalCart = JSON.parse(JSON.stringify(success.result.rows));
        this.carts = JSON.parse(JSON.stringify(success.result.rows));
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  get totalItemPrice() {
    let totalPriceArray = this.carts.reduce(
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
  checkout() {
    let checkoutProduts = this.carts.map((x) => {
      return {
        price: x.cartWithVariants.price * x.qty,
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
}
