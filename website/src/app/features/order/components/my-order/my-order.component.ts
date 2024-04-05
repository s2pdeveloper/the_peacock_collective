import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.scss',
})
export class MyOrderComponent implements OnInit {
  orders = [];
  orderVariants = [];
  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.getAllOrder();
  }
  getAllOrder() {
    this.orderService.getAll({}).subscribe({
      next: (success) => {
        this.orders = success.result;
        let variants = this.orders.map(x => x.orderWithOrderVariantMap);
        for (const items of variants) {
          for (const item of items) {
            this.orderVariants.push(item);
          }
        }
        console.log('this.orderVariants',this.orderVariants);
        
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
