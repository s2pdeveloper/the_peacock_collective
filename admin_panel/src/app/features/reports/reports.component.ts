import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent {
  constructor(private route: Router) {}
  cards = [
    {
      displayName: "Invoice Report",
      url: "/default/reports/invoice",
    },
    {
      displayName: "Balance Inventory Report",
      url: "/default/reports/bal-inv",
    },
    {
      displayName: "Product Wise Report",
      url: "/default/reports/pr-inv",
    },
    // {
    //   displayName: "Invoice Report",
    //   url: "/default/reports/invoice",
    // },
  ];
  navigateTo(c) {
    this.route.navigate([c.url]);
  }
}
