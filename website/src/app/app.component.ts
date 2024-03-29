import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'website';
  loader=true
  constructor(private commonService: CommonService) {}
  ngOnInit(): void {
    this.getAllMasterData();
  }

  getAllMasterData() {
    this.commonService.getAllMasterData({}).subscribe((success) => {
      this.commonService.allData = success.result
      this.loader=false
    });
  }
}
