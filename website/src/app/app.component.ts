import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import { StorageService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'website';
  loader = true;
  user: any;
  constructor(
    private commonService: CommonService,
    private storageService: StorageService
  ) {
    this.user = this.storageService.get('Customer');
  }
  ngOnInit(): void {
    this.getAllMasterData();
    this.getAllCartData()
  }

  getAllMasterData() {
    this.commonService.getAllMasterData({}).subscribe((success) => {
      this.commonService.allData = success.result;
      this.loader = false;
    });
  }
  getAllCartData(){
    this.commonService.getAllCart(this.user.id).subscribe((success) => {
      this.commonService.cartData = success.result.rows;
      console.log('this.commonService.cartData',this.commonService.cartData);
      this.loader = false;
    });
  }
}
