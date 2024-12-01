import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-packbag',
  templateUrl: './packbag.component.html',
  styleUrls: ['./packbag.component.scss'],
})
export class PackbagComponent {
  private router = inject(Router);
  navigateTo() {
    let path = `/product/product-details/6`;
    this.router.navigate([path]);
  }
}
