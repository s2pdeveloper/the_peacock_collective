import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private router: Router,
    public commonService: CommonService,
    private cartService: CartService,
    private storageService: StorageService,
  ) {
    this.user = this.storageService.get('userData');
  }
  product: any[] = [
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/chair.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
    },
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/printer.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
    },
  ];
  payloadData = {
    edit: [],
    delete: [],
  };
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {
    // console.log('this.commonService.cartData', this.commonService.cartData);
    // this.getAllCart()
  }
  deleteVariant(item, i) {
    this.payloadData.delete.push(item);
    this.carts.splice(i, 1);
  }
  updateAllCart() {
    this.payloadData.edit = [];
    for (const item of this.carts) {
      let orgCart = this.originalCart.find(y => y.id == item.id);
      if (this.checkForVariantQtyExceeds(item)) {
        return;
      }
      if (orgCart && orgCart.qty != item.qty) {
        this.payloadData.edit.push(item);
      }
    }

    this.cartService.updateAll(this.payloadData).subscribe({
      next: (success) => {
        // this.carts = success;
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
        if (item.qty > cart.qty) {
          qtyExceed = true;

        }
        break
      }

    }
    return qtyExceed;
  }
  getAllCart() {
    this.cartService.getAll().subscribe({
      next: (success) => {
        this.originalCart = success;
        this.carts = success;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  checkout() {
    let checkoutProduts = this.carts.map(x => {
      return {
        price: x.price,
        qty: x.qty,
        variantId: x.variantId,
      }
    })

    sessionStorage.setItem("products", JSON.stringify(checkoutProduts));
    this.router.navigate(['/order/checkout'], {
      queryParams: {
        type: 'CART'
      }
    });
  }
}
