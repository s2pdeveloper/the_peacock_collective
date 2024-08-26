import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';
register()
@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit ,AfterViewInit{
  constructor(private router: Router, public commonService: CommonService, @Inject(PLATFORM_ID) private _platformId: Object,) { }
  smallProducts: any = [];
  mediumProducts: any = [];
  largeProducts: any = [];
  currentIndex = 0;
  swiper;

  ngOnInit(): void {
 
    // console.log('commonService.allData.products',this.commonService.allData.products);

  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      this.swiper = new Swiper('.sample-slider', {
        loop: true, //loop
        autoplay: {
          //autoplay
          delay: 2000,
        },
        pagination: {
          //pagination(dots)
          el: '.swiper-pagination',
        },
        navigation: {
          //navigation(arrows)
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  }

  showNavigationIndicators = false;
  navigateTo( param: any) {
    let path = `/product/product-details/${param}`
    this.router.navigate([path]);
    let ele: any = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
