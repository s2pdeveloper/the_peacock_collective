import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { inject } from "@angular/core";
import {
  ModalDismissReasons,
  NgbDatepickerModule,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { TagService } from "@shared/services/tag.service";

@Component({
  selector: "app-tag-list",
  templateUrl: "./tag-list.component.html",
  styleUrls: ["./tag-list.component.scss"],
})
export class TagListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private tagservice: TagService,
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
  Tag: any = [];
  ngOnInit(): void {
    this.getAll();
  }
  add() {
    this.router.navigate(["/default/tag/tag-form"]);
  }
  updateTag(tag: any) {
    this.router.navigate(["/default/tag/tag-form"], {
      queryParams: { id: tag._id },
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
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.tagservice.getAllTag(obj).subscribe((success: any) => {
      console.log('success',success);
      this.spinner.hide();
      this.Tag = success;
      this.collection = success.length;
    });
  }

  delete(id: any) {
    this.spinner.show();
    this.tagservice.deleteTagById(id).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.modalService.dismissAll();
      this.getAll();
    });
  }
}
