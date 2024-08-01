import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  standalone: true,
  imports: [],
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.scss'
})
export class TermsConditionComponent {
  constructor(private router: Router) {}
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
