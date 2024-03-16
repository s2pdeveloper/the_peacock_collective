import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-right",
  templateUrl: "./nav-right.component.html",
  styleUrls: ["./nav-right.component.scss"],
})
export class NavRightComponent {
  // public method
  constructor(private router: Router) {}
  userData: any = null;
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  profile = [
    {
      icon: "ti ti-power",
      title: "Logout",
      url: "/login",
    },
  ];
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    let user: any = localStorage.getItem("Inv_Bill_User");
    return (this.userData = JSON.parse(user));
  }
}
