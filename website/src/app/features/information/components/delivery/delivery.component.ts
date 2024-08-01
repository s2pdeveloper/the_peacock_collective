import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss'],
})
export class DeliveryComponent {
  constructor(private router: Router) {}

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
