import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VendorService } from '@shared/services/vendor.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastService: ToastrService,
    private vendorService: VendorService,

  ) { }
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  vendor: any = [];
  allData: any = [];
  ngOnInit(): void {
    this.getAll();
  }
  add() {
    this.router.navigate(["/default/vendor/vendor-form"]);
  }
  update(vendor: any) {
    this.router.navigate(["/default/vendor/vendor-form"], {
      queryParams: { id: vendor.id },
    });
  }
  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAll();
  }
  open(s: any, content: any) {
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }
  searchFn() {
    this.search.toString().length >= 3 || this.search.toString().length == 0
      ? this.getAll()
      : null;
  }

  getAll() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.vendorService.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.allData = success?.rows;
      this.collection = success?.count;
    });
  }

  delete(id: any) {
    this.spinner.show();
    this.vendorService.delete(id).subscribe((success: any) => {
    this.spinner.hide();
    this.toastService.success(success?.message);
    this.modalService.dismissAll();
    this.getAll();
    });
  }
}
