import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  showNavigationIndicators = false;
  showNavigationArrows = false;
  constructor(private router: Router) {}
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
