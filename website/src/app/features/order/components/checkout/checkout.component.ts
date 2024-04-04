import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private actRouter: ActivatedRoute,
    private orderService: OrderService,

  ) { }
  showEye: boolean = true;
  collapsed: boolean = false;
  collapsedAddress: boolean = true;
  collapsedShipping: boolean = true;
  collapsedPayment: boolean = true;
  collapsedDetails: boolean = true;
  selcetedAddressId: number = null;
  type: string = null;
  product: any[] = [
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/chair.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5
    },
    {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/printer.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5
    },
  ]
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {
    this.actRouter.queryParams.subscribe((params: any) => {
      if (params?.type) {
        this.type = params.type
      }
    })
    this.product = sessionStorage.getItem("products") ? JSON.parse(sessionStorage.getItem("products")) : []

  }
  createOrder() {
    let payload = {
      products: this.product,
      addressId: this.selcetedAddressId,
      type: this.type
    }

    this.orderService.create(payload).subscribe({
      next: (success) => {
        // this.carts = success;
      },
      error: (err) => {
        console.log('err', err);
      },
    });

  }
  ngOnDestroy(): void {
    try {
      if (sessionStorage.getItem("products")) {
        sessionStorage.removeItem("products")
      }
    } catch (error) {
      console.log("error", error);
    }

  }


}
