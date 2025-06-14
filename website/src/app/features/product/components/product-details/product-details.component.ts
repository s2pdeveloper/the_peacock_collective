import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpinnerService, StorageService } from 'src/app/core/services';
import { CartService } from 'src/app/services/cart.service';
import { CommonService } from 'src/app/services/common.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/services/customer.service';
import { Navigation } from 'swiper/modules';
import { NgxImgZoomService } from 'ngx-img-zoom';
import Swiper from 'swiper';
Swiper.use([Navigation]);
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  private modalService = inject(NgbModal);
  private actRoute = inject(ActivatedRoute);
  qty: number = 1;
  tabActive: String = '';
  products: any = null;
  isFav: boolean = false;
  attrArr: any[] = [];
  currentVariant = null;
  variants: any[] = [];
  wishlist: any[] = [];
  carts: any[] = [];
  user: any;
  bannerImg: any;
  event: any;
  isLoading: boolean = false;
  myThumbnail = 'https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg';
  myFullresImage =
    'https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg';
  showZoom = false;
  zoomStyle = {};
  @ViewChild('imageRef') imageRef!: ElementRef;

  constructor(
    private router: Router,
    public commonService: CommonService,
    private spinnerService: SpinnerService,
    private cartService: CartService,
    private storageService: StorageService,
    private toasterService: ToastrService,
    private wishlistService: WishlistService,
    private ngxImgZoom: NgxImgZoomService,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) {
    this.user = this.storageService.get('Customer');
    this.ngxImgZoom.setZoomBreakPoints([
      { w: 100, h: 100 },
      { w: 150, h: 150 },
      { w: 200, h: 200 },
      { w: 250, h: 250 },
      { w: 300, h: 300 },
    ]);
  }
  setTabActive(key: any) {
    this.tabActive = key;
  }

  navigateTo(path: any) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    console.log('this.user', this.user);

    this.actRoute.params.subscribe((params: any) => {
      if (params?.id) {
        this.products = this.commonService.allData.products.find(
          (x) => x.id == Number(params.id)
        );
        console.log('this.products', this.products);

        this.variants = this.products.productWithVariants;
        this.currentVariant = this.products.productWithVariants[0];
        console.log(this.currentVariant);

        if (this.user) {
          this.getAllWishlist();
          this.getAllCart();
        }
        this.attrArr = [];
        this.bannerImg = this.currentVariant.variantImages[0]?.image;
        for (const item of this.currentVariant.variantWithAttrVariantMap) {
          this.attrArr.push({
            name: item.AttrVariantMapWithAttributes.name,
            type: item.AttrVariantMapWithAttributes.type,
            value: [item.value],
            img: null,
            selectedValue: item.value ? item.value : null,
          });
        }
      }
    });
  }
  getAllWishlist() {
    this.wishlistService.getAll().subscribe({
      next: (success) => {
        this.wishlist = success.result.rows;
        this.isFav = this.wishlist.some(
          (x: any) => x.variantId == this.currentVariant?.id
        );
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  handleVariant(data: any) {
    this.currentVariant = data;
    this.attrArr = [];
    this.qty = 1;
    this.bannerImg = this.currentVariant.variantImages[0]?.image;
    for (const item of data.variantWithAttrVariantMap) {
      this.attrArr.push({
        name: item.AttrVariantMapWithAttributes.name,
        type: item.AttrVariantMapWithAttributes.type,
        value: [item.value],
        img: this.currentVariant.variantImages[0]?.image,
        selectedValue: item.value ? item.value : null,
      });
    }
    if (this.user) {
      this.getAllWishlist();
    }
  }
  handleImg(img: string) {
    this.bannerImg = img;
  }

  createCart() {
    console.log('this.qty', this.qty);
    if (this.carts.length) {
      let selectedVar = this.carts.find(
        (cart: any) => cart?.variantId == this.currentVariant.id
      );
      if (selectedVar?.qty >= this.currentVariant.qty) {
        this.toasterService.error(
          'Your selected product is already with max quantity in cart.'
        );
        return;
      }
    }

    let payload = {
      qty: this.qty,
      variantId: this.currentVariant.id,
      customerId: this.user.id,
    };
    this.cartService.create(payload).subscribe((success) => {
      if (success) {
        this.cartService.getAll().subscribe((success) => {
          this.cartService.cartItems.next([]);
          this.cartService.cartItems.next([...success.result.rows]);
          sessionStorage.setItem(
            'products',
            JSON.stringify(success.result.rows)
          );
          this.carts = success?.result?.rows;
          let count = success.result.rows.reduce(
            (acc, curr) => acc + curr.qty,
            0
          );
          // this.getAllCart();
          this.commonService.resetCart();
          this.commonService.addToCart(count);
        });
      }
      this.toasterService.success('Product added to cart!!');
    });
    this.qty = 1;
  }

  validateCart(event) {
    try {
      if (!this.user) {
        // this.openLogin(login);
        this.noLoginCartAdd();
        this.event = event;
      } else {
        this.createCart();
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  createBuyNow() {
    if (this.qty > this.currentVariant.qty) {
      this.qty = this.currentVariant.qty;
    }
    let payload = {
      price: this.qty * this.currentVariant.price,
      qty: this.qty,
      variantId: this.currentVariant.id,
      cartWithVariants: this.currentVariant,
    };
    if (isPlatformBrowser(this._platformId)) {
      sessionStorage.setItem('buyProducts', JSON.stringify([payload]));
      this.router.navigate(['/order/checkout'], {
        queryParams: {
          type: 'BUY',
        },
      });
    }
  }
  validateBuyNow(event) {
    try {
      if (!this.user) {
        // this.openLogin(login);
        this.noLoginCartAdd();
        this.event = event;
      } else {
        this.createBuyNow();
      }
    } catch (error) {
      console.log('error', error);
    }
  }
  addToWishlist() {
    // this.toggleFav = !this.toggleFav
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
        console.log('success', success);
        this.isFav = true;
        this.toasterService.success('Product added to wishlist!!');
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  decrementQty(p: any): void {
    if (this.qty != 1) {
      this.qty = Math.max(1, this.qty - 1);
    }
  }

  incrementQty(p: any): void {
    let products = JSON.parse(sessionStorage.getItem('products')) ?? [];
    let index = products.findIndex((x: any) => x.variantId === p.id);
    if (this.user) {
      this.cartService.getAll().subscribe((success) => {
        let carts = success?.result?.rows;
        if (carts.length) {
          let selectedVar = carts.find((cart: any) => cart?.variantId == p.id);
          let finalQty = products[index]
            ? products[index]?.qty + this.qty + 1
            : this.qty;

          if (finalQty > selectedVar.cartWithVariants.qty) {
            this.toasterService.error(
              'Your selected product is already with max quantity in cart.'
            );
            return;
          } else {
            this.qty = this.qty + 1;
          }
        }
        return;
      });
    } else {
      let products: any[] =
        this.storageService.get('noLoginCartProducts') ?? [];
      let index;
      if (products.length) {
        index = products.findIndex(
          (prod: any) => prod.variantId === this.currentVariant.id
        );
      }
      let finalQty = products[index]
        ? products[index]?.qty + this.qty + 1
        : this.qty;
      if (finalQty > this.currentVariant?.qty) {
        this.toasterService.error(
          'Your selected product is already with max quantity in cart.'
        );
        return;
      } else {
        this.qty = this.qty + 1;
      }
    }
  }
  removeWishlist(id: Number) {
    try {
      let payload = {
        variantId: this.currentVariant.id,
      };
      this.wishlistService.delete(payload).subscribe((success) => {
        this.isFav = false;
        this.getAllWishlist();
        this.toasterService.success('Product removed from wishlist!!');
      });
    } catch (error) {
      console.log('error', error);
    }
  }
  getAllCart() {
    this.cartService.getAll().subscribe({
      next: (success) => {
        this.cartService.cartItems.next([]);
        this.cartService.cartItems.next([...success.result.rows]);
        this.carts = this.cartService.cartItems.getValue();
        console.log('success', success.result.rows);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  noLoginCartAdd() {
    let payload = {
      cartWithVariants: this.currentVariant,
      id: this.currentVariant.productId,
      qty: this.qty,
      variantId: this.currentVariant.id,
    };
    let products: any[] = this.storageService.get('noLoginCartProducts') ?? [];
    let index;
    if (products.length) {
      index = products.findIndex(
        (prod: any) => prod.variantId === this.currentVariant.id
      );
    }
    console.log('products[index]', products[index]);

    let finalQty = products[index] ? products[index]?.qty + this.qty : this.qty;
    console.log('finalQty', finalQty);

    console.log('variant qty', this.currentVariant?.qty);
    if (finalQty > this.currentVariant?.qty) {
      this.toasterService.error(
        'Your selected product is already with max quantity in cart.'
      );
      return;
    }
    console.log('index', index);

    if (index || index === 0) {
      products[index].qty += this.qty;
    } else {
      products.push(payload);
    }
    console.log('products', products);

    let count = products.reduce((acc, curr) => acc + curr.qty, 0);

    this.commonService.resetCart();
    this.commonService.addToCart(count);
    this.storageService.set('noLoginCartProducts', products);
    this.toasterService.success('Product added to cart!!');
    this.qty = 1;
  }

  onMouseMove(event: MouseEvent): void {
    const imageEl = this.imageRef.nativeElement;
    const rect = imageEl.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const zoomX = (x / rect.width) * 120;
    const zoomY = (y / rect.height) * 120;

    this.showZoom = true;

    this.zoomStyle = {
      top: `${y - 100}px`,
      left: `${x - 100}px`,
      backgroundImage: `url(${this.bannerImg})`,
      backgroundPosition: `${zoomX}% ${zoomY}%`,
    };
  }
  onMouseLeave(): void {
    this.showZoom = false;
  }
}
