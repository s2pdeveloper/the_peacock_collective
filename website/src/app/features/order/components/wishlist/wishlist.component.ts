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
  user:any;
  constructor(
    private wishlistService: WishlistService,
    private cartService : CartService,
    private storageService: StorageService,
    private toasterService: ToastrService,
    private router: Router
  ) {
    this.user = this.storageService.get('Customer');
  }

  ngOnInit(): void {
    this.getAllWishlist();
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
  navigateToProdDetails(id:number) {
    let path = `/product/product-details/${id}`
    this.router.navigate([path]);
  }
  createCart(id:number) {
    try {
      if (!this.user) {
        this.toasterService.warning('Please login to add cart');
        return;
      }
      console.log("added to cart");
      let payload = {
        qty: 1,
        variantId:id,
        customerId: this.user.id,
      };
      this.cartService.create(payload).subscribe(x => {
        this.toasterService.success('Product added to cart!!');
      })
    } catch (error) {
      console.log("error", error);

    }
  }
  deleteList(id:number){
    try {
      if (!this.user) {
        this.toasterService.warning('Please login to add cart');
        return;
      }
      this.wishlistService.delete(id).subscribe(success =>{
        this.getAllWishlist();
        this.toasterService.success('Product removed from wishlist!!');
      })
    } catch (error) {
      console.log("error", error);
    }
  }
}
