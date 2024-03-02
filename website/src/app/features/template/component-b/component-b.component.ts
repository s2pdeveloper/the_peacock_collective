import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent {
  constructor(private router: Router) {}
  showNavigationIndicators = false;
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
