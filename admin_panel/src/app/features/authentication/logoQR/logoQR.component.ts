import { CommonModule, LocationStrategy } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { QRCodeModule } from "angularx-qrcode";

@Component({
  selector: "app-logoQR",
  standalone: true,
  imports: [CommonModule, RouterModule, QRCodeModule, FormsModule],
  templateUrl: "./logoQR.component.html",
  styleUrls: ["./logoQR.component.scss"],
})
export default class LogoQRComponent implements OnInit {
  qrList: any = [];
  rows = 8;
  col = 6;
  constructor(private location: LocationStrategy) {}

  ngOnInit() {
    this.qrList.length = this.rows * this.col;
  }
  setCount(ev: number) {
    this.qrList.length = ev * this.col;
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
