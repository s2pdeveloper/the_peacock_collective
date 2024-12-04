import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';
// import { SpinnerService, StorageService } from './core/services';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { StateService } from './services/state.service';
import { ToastrService } from 'ngx-toastr';
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
    private stateService: StateService,
    @Inject(PLATFORM_ID) private _platformId: Object,
    private toast: ToastrService
  ) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      const results: any = this.stateService.getState('ALL_DATA', null);
      if (!results) {
        this.getAllMasterData();
      } else {
        this.commonService.allData = results;
        this.commonService.allData = { ...this.commonService.allData };
        this.loader = false;
      }
    } else {
      this.getAllMasterData();
    }
  }
  @HostListener('window:online')
  online() {
    console.log('online');
    this.toast.success('Connection established');
  }

  @HostListener('window:offline')
  offline() {
    console.log('offline');
    this.toast.warning('You are offline');
  }

  getAllMasterData() {
    this.commonService.getAllMasterData({}).subscribe(
      (success) => {
        this.commonService.allData = success.result;
        this.loader = false;
        this.stateService.saveState('ALL_DATA', success.result);
        this.loader = false;
      },
      (error) => {
        console.log('error', error);
        this.loader = false;
      }
    );
  }
}
