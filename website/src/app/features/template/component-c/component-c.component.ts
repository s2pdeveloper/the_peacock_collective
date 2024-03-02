import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-c',
  templateUrl: './component-c.component.html',
  styleUrls: ['./component-c.component.scss']
})
export class ComponentCComponent {
  constructor(private router: Router) {}
  showNavigationIndicators = false;
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
