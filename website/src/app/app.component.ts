import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
import { SpinnerService, StorageService } from './core/services';

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
    private storageService: StorageService,
    private spinner : SpinnerService
  ) {
    this.user = this.storageService.get('Customer');
  }
  ngOnInit(): void {
    this.getAllMasterData();
  }

  getAllMasterData() {
    this.spinner.show();
    this.commonService.getAllMasterData({}).subscribe((success) => {
      this.spinner.hide();
      this.commonService.allData = success.result;
      this.loader = false;
    });
  }
  // getAllCartData(){
  //   this.commonService.getAllCart(this.user.id).subscribe((success) => {
  //     this.commonService.cartData = success.result.rows;
  //     console.log('this.commonService.cartData',this.commonService.cartData);
  //     this.loader = false;
  //   });
  // }
}
