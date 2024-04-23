import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpinnerService, StorageService } from 'src/app/core/services';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  actRoute = inject(ActivatedRoute);
  qty: number = 1;
  tabActive: String = '';
  products: any = null;
  attrArr: any[] = [];
  currentVariant = null;
  variants: any[] = [];
  user: any;
  constructor(
    private router: Router,
    public commonService: CommonService,
    private spinnerService: SpinnerService,
    private cartService: CartService,
    private storageService: StorageService,
    private toasterService: ToastrService,
    private wishlistService: WishlistService

  ) {
    this.user = this.storageService.get('Customer');
  }
  setTabActive(key: any) {
    this.tabActive = key;
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params: any) => {
      if (params?.id) {
        this.products = this.commonService.allData.products.find(
          (x) => x.id == params.id
        );
        console.log("this.products", this.products);

        this.variants = this.products.productWithVariants;
        this.currentVariant = this.products.productWithVariants[0];
        for (const item of this.currentVariant.variantWithAttrVariantMap) {
          this.attrArr.push({
            name: item.AttrVariantMapWithAttributes.name,
            type: item.AttrVariantMapWithAttributes.type,
            value: [item.value],
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
    for (const item of data.variantWithAttrVariantMap) {
      this.attrArr.push({
        name: item.AttrVariantMapWithAttributes.name,
        type: item.AttrVariantMapWithAttributes.type,
        value: [item.value],
        selectedValue: item.value ? item.value : null,
      });
    }
  }
  createCart() {
    try {
      if (!this.user) {
        this.toasterService.warning('Please login to add cart');
        return;
      }

      if (this.qty > this.currentVariant.qty) {
        this.qty = this.currentVariant.qty;
      }
      let payload = {
        qty: this.qty,
        variantId: this.currentVariant.id,
        customerId: this.user.id,
      };

      this.cartService.create(payload).subscribe((success) => {
        this.toasterService.success("Product added to cart!!")
      });
    } catch (error) {
      console.log("error", error);

    }
  }

  buyNow() {
    if (!this.user) {
      this.toasterService.warning('Please login to buy product');
      return;
    }
    if (this.qty > this.currentVariant.qty) {
      this.qty = this.currentVariant.qty;
    }
    let payload = {
      price: this.qty * this.currentVariant.price,
      qty: this.qty,
      variantId: this.currentVariant.id,
    };
    sessionStorage.setItem("products", JSON.stringify([payload]));
    this.router.navigate(['/order/checkout'], {
      queryParams: {
        type: 'BUY'
      }
    });
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
        this.toasterService.success("Product added to wishlist!!")
      },
      error: (err) => {
        console.log('err', err);

      },
    });

  }
}
