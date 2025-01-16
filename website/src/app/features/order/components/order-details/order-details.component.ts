import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
})
export class OrderDetailsComponent implements OnInit {
  data: any = {};
  constructor(
    private orderService: OrderService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.actRoute.params.subscribe((params: any) => {
      console.log('params', params);
      if (params.id) {
        this.getOrderById(Number(params?.id));
      }
    });
  }

  navigateTo(path: any, id?: number) {
    if (id) {
      let p = `${path + id}`;
      this.router.navigate([p]);
    } else {
      this.router.navigate([path]);
    }
  }
  getOrderById(id: number) {
    this.orderService.getById(id).subscribe((success) => {
      console.log('success', success.result);
      this.data = success.result;
      console.log("this.data",this.data);
    });
  }
}
