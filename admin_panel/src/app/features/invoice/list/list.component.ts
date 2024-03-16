import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService } from "@core/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { InvoiceService } from "@shared/services/invoice.service";
import { ToastrService } from "ngx-toastr";
import { Title } from "@angular/platform-browser";
import moment from "moment";
import { Clipboard } from "@angular/cdk/clipboard";
@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent {
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  products: any = [];
  statusArray: any = ["Created", "Generated"];
  isReportTab: any = "";
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private service: InvoiceService,
    private spinner: SpinnerService,
    private toastService: ToastrService,
    private actRoute: ActivatedRoute,
    private title: Title,
    private clipboard: Clipboard
  ) {}

  updateUser(c: any) {}
  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.isReportTab = params.id;
        this.getAll(["Generated"]);
      } else {
        this.isReportTab = "";
        this.getAll(this.statusArray);
      }
    });
  }

  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAll(this.statusArray);
  }

  searchFn() {
    this.search.toString().length >= 1 || this.search.toString().length == 0
      ? this.getAll(this.statusArray)
      : null;
  }
  open(s: any, content: any) {
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }
  add() {
    this.router.navigate(["/default/product/product-form"]);
  }

  delete(id: any) {
    this.spinner.show();
    this.service.deleteById(id).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.modalService.dismissAll();
      this.getAll(this.statusArray);
    });
  }
  updateStatus(id: string, status: string, action: string) {
    this.spinner.show();
    let payload = {
      status,
      action,
    };
    this.service.updateStatus(id, payload).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.modalService.dismissAll();
      if (action == "reset") {
        this.router.navigate(["/default/invoice/form"], {
          queryParams: { id: id, action: "update" },
        });
      } else {
        this.getAll(this.statusArray);
      }
    });
  }

  getAll(statusArr: any) {
    this.spinner.show();
    let params = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
      statusArray: statusArr,
    };
    this.service.getAll(params).subscribe((success: any) => {
      this.spinner.hide();
      this.products = success.rows;
      this.collection = success.count;
    });
  }

  navigateToInvoice(page: string, p: any) {
    this.spinner.show();
    this.service.getInvoiceDetails(p._id).subscribe((success: any) => {
      this.spinner.hide();
      if (!success) {
        this.toastService.warning("No invoice exists");
        return;
      }
      this.router.navigate([page], {
        state: { data: JSON.stringify(success) },
      });
    });
    this.title.setTitle(
      `${p.invoiceNo}_${p.customer.mobile}_${moment().format("D MMM, YYYY")}`
    );
  }

  navigateTo(page, id, action) {
    if (id) {
      this.router.navigate([page], {
        queryParams: { id: id, action },
      });
    } else {
      this.router.navigate([page], {
        queryParams: { action },
      });
    }
  }

  sendMessage(data: any): void {
    const phoneNumber = data.customer.mobile; // Replace with the recipient's phone number
    // const message = `Hi ${data.customerName}!  Your recent purchase is greatly appreciated. Your invoice is now ready. Please find it attached for your review. Should you have any questions or require any assistance, feel free to reach out to us. Thank you for your business!
    // Regards
    // Jhumka Planet`;
    const message = `Hi ${data.customerName}!  Thank You for Shopping with Jhumka Planet. Your invoice is now ready. Do visit us again 🙂.\nRegards\nRucha, Jhumka Planet`;

    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    this.clipboard.copy(message);
    window.open(url, "_blank");
  }
}
