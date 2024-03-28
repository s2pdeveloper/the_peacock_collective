import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { CategoryService } from "@shared/services/category.service";
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { inject } from "@angular/core";

@Component({
  selector: "app-category-list",
  templateUrl: "./category-list.component.html",
  styleUrls: ["./category-list.component.scss"],
})
export class CategoryListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private spinner: NgxSpinnerService,
    private toastService: ToastrService
  ) { }
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  category: any = [];
  allData: any = [];
  image: any = [];
  ngOnInit(): void {
    this.getAll();
  }
  add() {
    this.router.navigate(["/default/category/category-form"]);
  }
  update(category: any) {
    this.router.navigate(["/default/category/category-form"], {
      queryParams: { id: category.id },
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
  subCatagory(catagory) {
    this.router.navigate(["/default/category/category-form"], {
      queryParams: { parendId: catagory.id },
    });
  }

  getAll() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      category: true
    };
    this.categoryService.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.allData = success.rows;
      this.collection = success.count;
    });
  }

  delete(id: any) {
    this.spinner.show();
    this.categoryService.delete(id).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.modalService.dismissAll();
      this.getAll();
    });
  }
}
