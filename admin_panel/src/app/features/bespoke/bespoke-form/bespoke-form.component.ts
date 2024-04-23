import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { BespokeService } from "@shared/services/bespoke";

@Component({
  selector: "app-bespoke-form",
  templateUrl: "./bespoke-form.component.html",
  styleUrls: ["./bespoke-form.component.scss"],
})
export class BespokeFormComponent implements OnInit {
  id: number = null;
  data: any = {};
  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private bespokeService: BespokeService,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private domSanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      this.id = Number(params?.id);
    });
    this.getData();
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  getData() {
    this.spinner.show();
    this.bespokeService.getById(this.id).subscribe((success: any) => {
      this.spinner.hide();
      this.data = success;
      console.log("success", success);
    });
  }
}
