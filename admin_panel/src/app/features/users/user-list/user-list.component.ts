import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "@shared/services/user.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SpinnerService, ToastService } from "@core/services";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private userService: UserService,
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
  users: any = [];
  address: string = "";
  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getAddressById(params.id);
        this.address = params.id;
      }
    });

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
  open(s: any, content: any) {
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }
  searchFn() {
    this.search.toString().length >= 3 || this.search.toString().length == 0
      ? this.getAll()
      : null;
  }
  deleteUser(id: any) {
    this.spinner.show();
    this.userService.delete(id).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.modalService.dismissAll();
      this.getAll();
    });
  }
  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAll();
  }
  getAll() {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.userService.getAllUsers(params).subscribe((success: any) => {
      this.spinner.hide();
      this.users = success.rows;
      this.collection = success.count;
    });
  }

  getAddressById(id) {
    this.spinner.show();
    this.userService.getAddressByIdPath(id).subscribe((success) => {
      this.spinner.hide();
      this.router.navigate(["/default/user/customer-address"], {
        queryParams: { id },
      });
    });
  }
}
