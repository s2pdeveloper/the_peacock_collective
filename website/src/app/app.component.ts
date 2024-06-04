import { Component, Inject, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
// import { SpinnerService, StorageService } from './core/services';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { StateService } from './services/state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loader = true;
  user: any;
  constructor(
    private commonService: CommonService,
    // private storageService: StorageService,
    private stateService: StateService,
    @Inject(PLATFORM_ID) private _platformId: Object,
  ) {

  }
  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      // this.user = this.storageService.get('Customer');
      const results: any = this.stateService.getState('ALL_DATA', null);
      if (!results) {
        this.getAllMasterData();
      } else {
        this.commonService.allData = results;
        this.loader = false;
      }

    } else {
      this.getAllMasterData();
    }

  }

  getAllMasterData() {
    // this.spinner.show();
    this.commonService.getAllMasterData({}).subscribe((success) => {
      // this.spinner.hide();
      this.commonService.allData = success.result;
      this.loader = false;

      this.stateService.saveState('ALL_DATA', success.result);
      const results: any = this.stateService.getState('ALL_DATA', null);
      this.loader = false;
    }, error => {
      console.log("error", error);
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
