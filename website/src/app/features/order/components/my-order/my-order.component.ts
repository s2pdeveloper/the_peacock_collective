import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-order',
  standalone: true,
  imports: [],
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.scss'
})
export class MyOrderComponent implements OnInit {
  orders = []
  constructor(
    private orderService: OrderService,

  ) { }

  ngOnInit(): void {

  }
  getAllOrder() {
    this.orderService.getAll({}).subscribe({
      next: (success) => {
        this.orders = success;
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }

}
