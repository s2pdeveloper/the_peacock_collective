import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttributeService } from '@shared/services/attribute.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-attibute-list',
  templateUrl: './attibute-list.component.html',
  styleUrls: ['./attibute-list.component.scss']
})
export class AttibuteListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastService: ToastrService,
    private attributeService: AttributeService,

  ) { }
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  attribute: any = [];
  allData: any = [];
  ngOnInit(): void {
    this.getAll();
  }
  add() {
    this.router.navigate(["/default/attribute/attribute-form"]);
  }
  update(attribute: any) {
    this.router.navigate(["/default/attribute/attribute-form"], {
      queryParams: { id: attribute.id },
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
    this.attributeService.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.allData = success.rows;
      this.collection = success.count;
    });
  }

  delete(id: any) {
    this.spinner.show();
    this.attributeService.delete(id).subscribe((success: any) => {
    this.spinner.hide();
    this.toastService.success(success.message);
    this.modalService.dismissAll();
    this.getAll();
    });
  }
}
