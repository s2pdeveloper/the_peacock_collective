import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/core/services';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  wishlist: any[] = [];
  carts: any[] = [];
  user: any;
  isLoading : boolean = false;
  constructor(
    private wishlistService: WishlistService,
    private cartService: CartService,
    private storageService: StorageService,
    private toasterService: ToastrService,
    private router: Router
  ) {
    this.user = this.storageService.get('Customer');
  }

  ngOnInit(): void {
    if (this.user) {
      this.getAllWishlist();
    }
  }
  getAllWishlist() {
    this.wishlistService.getAll().subscribe({
      next: (success) => {
        this.wishlist = success.result.rows;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  navigateToProdDetails(id: number) {
    let path = `/product/product-details/${id}`;
    this.router.navigate([path]);
  }
  createCart(p: any) {
    console.log("p",p);
    
    try {
      if (!this.user) {
        this.toasterService.warning('Please login to add cart');
        return;
      }
      let payload = {
        qty: 1,
        variantId: p.variantId,
        customerId: this.user.id,
      };
      this.cartService.getAll().subscribe((success) => {
        this.carts = success?.result?.rows;
        if (this.carts.length) {
          let selectedVar = this.carts.find(
            (cart: any) => cart?.variantId == p.variantId
          );
          console.log("selectedVar",selectedVar);
          
          if (selectedVar?.qty >= selectedVar.cartWithVariants.qty) {
            this.toasterService.error(
              'Your selected product is already with max quantity in cart.'
            );
            return;
          }
        }
        this.cartService.create(payload).subscribe((x) => {
          this.toasterService.success('Product added to cart!!');
        });
      });
    } catch (error) {
      console.log('error', error);
    }
  }
  deleteList(id: number) {
    try {
      let payload = {
        variantId : id
      }
      this.isLoading = true;
      this.wishlistService.delete(payload).subscribe((success) => {
        this.isLoading = false;
        this.getAllWishlist();
        this.toasterService.success('Product removed from wishlist!!');
      });
    } catch (error) {
      console.log('error', error);
    }
  }
}
