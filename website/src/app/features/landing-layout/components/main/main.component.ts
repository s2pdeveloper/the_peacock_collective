import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement') videoElement: ElementRef<HTMLVideoElement>;
  constructor() { }
  ngOnInit(): void { }
  ngAfterViewInit(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    video.muted = true;
    video.play().catch(error => {
      console.error('Error trying to play the video', error);
    });
  }
  goDown(ele:any){
    const element = document.getElementById(ele)
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
