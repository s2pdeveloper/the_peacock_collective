import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit {
  constructor(private router: Router, public commonService: CommonService) {}
  smallProducts: any = [];
  mediumProducts: any = [];
  largeProducts: any = [];
  currentIndex = 0;

  swiper = new Swiper('.sample-slider', {
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
  ngOnInit(): void {}

  showNavigationIndicators = false;
  navigateTo(path: any) {
    this.router.navigate([path]);
    let ele: any = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
