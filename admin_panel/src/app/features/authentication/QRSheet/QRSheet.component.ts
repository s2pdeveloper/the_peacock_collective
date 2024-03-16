import { CommonModule, LocationStrategy } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { QRCodeModule } from "angularx-qrcode";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-QRSheet",
  standalone: true,
  imports: [CommonModule, RouterModule, QRCodeModule],
  templateUrl: "./QRSheet.component.html",
  styleUrls: ["./QRSheet.component.scss"],
})
export default class QRSheetComponent implements OnInit {
  qrList: any = [];
  constructor(private location: LocationStrategy) {}
  websiteUrl: string = environment.websiteUrl;
  ngOnInit() {
    let state: any = this.location.getState();
    for (const ele of state.products) {
      for (let i = 0; i < ele.quantity; i++) {
        this.qrList.push({ ...ele, quantity: 1 });
      }
    }
  }
  back() {
    this.location.back();
  }
  print() {
    window.print();
  }
  getNumber(number) {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 2,
    }).format(number);
  }
}
