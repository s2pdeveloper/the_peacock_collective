import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
Swiper.use([Navigation]);
@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit {
  selectedCategories: any[] = [];
  constructor(private router: Router, public commonService: CommonService) {}
  ngOnInit(): void {
    this.selectedCategories = this.commonService?.allData?.categories.filter(
      (cat) => cat.isShowHome === true
    );
  }

  showNavigationIndicators = false;
  navigateTo(param: any) {
    let path = `/product/product-details/${param}`;
    this.router.navigate([path]);
    let ele: any = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
