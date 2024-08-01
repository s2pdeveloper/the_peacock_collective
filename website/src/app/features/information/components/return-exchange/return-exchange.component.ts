import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-return-exchange',
  templateUrl: './return-exchange.component.html',
  styleUrls: ['./return-exchange.component.scss'],
})
export class ReturnsExchangesComponent {
  constructor(private router: Router) {}

  data: any = {
    name: 'Returns and Exchanges',
    title: 'Returns and Exchanges',
    subTitle: 'Credits',
    description: [
      'Each of our products is handmade with care, making every piece unique. This means your purchase may vary slightly from the website image, with minor irregularities. For instance, stone shades and embroidery can differ due to their handmade nature.',
      'We accept returns or exchanges only if your received product doesn’t match the order confirmation or has a genuine quality issue. Please review product descriptions, size charts, and guides before ordering. ',
      'If your item is damaged or incorrect, email us with an unboxing video and a photo within 14 days of receiving it to sukanya@peacockollective.in',
      'This policy excludes damage caused by accidental or incidental use, or normal wear and tear. We do not provide any warranty for products, whether express or implied, including warranties of merchantability, quality, conformity to description, and fitness for a specific purpose.',
    ],
  };

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
