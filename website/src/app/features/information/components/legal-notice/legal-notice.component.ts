import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss'],
})
export class LegalNoticeComponent {
  constructor(private router: Router) {}

  data: any = {
    name: 'Legal Notice',
    title: 'Legal',
    subTitle: 'Credits',
    description: [
      'Concept and production:',
      "This Online store was created using Prestashop Shopping Cart Software,check out PrestaShop's ecommerce blog for news and advices about selling online and running your ecommerce website.",
    ],
  };

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
