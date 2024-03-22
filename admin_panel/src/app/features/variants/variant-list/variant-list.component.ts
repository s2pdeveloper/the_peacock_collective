import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { VariantsService } from "@shared/services/variants.service";

@Component({
  selector: "app-variant-list",
  templateUrl: "./variant-list.component.html",
  styleUrls: ["./variant-list.component.scss"],
})
export class VariantListComponent {
  private modalService = inject(NgbModal);
  attributeList: any[] = [];

  constructor(
    private router: Router,
    private variantService: VariantsService,
    private activated: ActivatedRoute,
    private spinner: SpinnerService,
    private toastService: ToastService
  ) {}
  @Input() variantList: any = [];
  @Output() customEvent = new EventEmitter<any>();
  selectedRow;
  ngOnInit(): void {
    this.attributeList = this.variantList.map(
      (x) => x
      );
      console.log('this.attributeList',this.attributeList);
    
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
  update(data: any, index) {
    data.id = data.id ? data.id : index;
    this.customEvent.emit({ action: "EDIT", data: data });
  }

  open(s: any, content: any, index) {
    s.id = s.id ? s.id : index;
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }
  deleteVariant(data) {
    this.customEvent.emit({ action: "DELETE", data: data });
  }
}
