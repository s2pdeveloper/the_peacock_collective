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
import { FavService } from "@shared/services/fav.service";
@Component({
  selector: "app-fav-list",
  templateUrl: "./fav-list.component.html",
  styleUrls: ["./fav-list.component.scss"],
})
export class FavListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private favservice: FavService,
    private spinner: NgxSpinnerService,
    private toastService: ToastrService
  ) {}
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  Favorite: any = [];
  allData: any = [];
  product: any = [];
  customer: any = [];
  ngOnInit(): void {
    this.getAll();
  }

  updateUser(favorite: any) {
    queryParams: {
      id: favorite._id;
    }
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
    this.favservice.getAllfavorites(params).subscribe((success: any) => {
      this.spinner.hide();
      this.allData = success.data;
      this.product = success.data.product;
      this.customer = success.data.customer;
      this.collection = success.count;
    });
  }

  delete(_id: any) {
    this.spinner.show();
    this.favservice.deleteFavoriteById(_id).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.modalService.dismissAll();
      this.getAll();
    });
  }
}
