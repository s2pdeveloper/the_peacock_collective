// angular import
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./register.component.html",
})
export default class RegisterComponent {
  constructor(private router: Router) {}
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
}
