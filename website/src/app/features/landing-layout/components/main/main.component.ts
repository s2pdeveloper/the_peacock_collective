import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    try {
      const video: HTMLVideoElement | null = document.getElementById(
        'myVideo'
      ) as HTMLVideoElement;
      console.log('video', video);
      if (video) {
        video.play().catch((error) => {
          console.error('Error attempting to play', error);
        });
      }
    } catch (error) {
      console.error('Error attempting to play', error);
    }
  }
}
