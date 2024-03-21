import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService, ToastService } from '@core/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VariantsService } from '@shared/services/variants.service';

@Component({
  selector: 'app-variant-list',
  templateUrl: './variant-list.component.html',
  styleUrls: ['./variant-list.component.scss']
})
export class VariantListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private variantService: VariantsService,
    private activated: ActivatedRoute,
    private spinner: SpinnerService,
    private toastService: ToastService
  ) {}
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  allData: any = [];
  address: string = "";
  ngOnInit(): void {
    this.getAll();
  }
  navigateTo(page, id) {
    if (id) {
      this.router.navigate([page], {
        queryParams: { id: id },
      });
    } else {
      this.router.navigate([page]);
    }
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
    this.variantService.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.allData = success?.rows;
      this.collection = success?.count;
    });
  }

  delete(id: any) {
    this.spinner.show();
    this.variantService.delete(id).subscribe((success: any) => {
    this.spinner.hide();
    this.toastService.success(success?.message);
    this.modalService.dismissAll();
    this.getAll();
    });
  }
}
