// angular import
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// project import
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./theme/shared/shared.module";
import { AdminComponent } from "./theme/layouts/admin/admin.component";
import { GuestComponent } from "./theme/layouts/guest/guest.component";
import { NavigationComponent } from "./theme/layouts/admin/navigation/navigation.component";
import { NavBarComponent } from "./theme/layouts/admin/nav-bar/nav-bar.component";
import { NavLeftComponent } from "./theme/layouts/admin/nav-bar/nav-left/nav-left.component";
import { NavRightComponent } from "./theme/layouts/admin/nav-bar/nav-right/nav-right.component";
import { NavContentComponent } from "./theme/layouts/admin/navigation/nav-content/nav-content.component";
import { NavCollapseComponent } from "./theme/layouts/admin/navigation/nav-content/nav-collapse/nav-collapse.component";
import { NavGroupComponent } from "./theme/layouts/admin/navigation/nav-content/nav-group/nav-group.component";
import { NavItemComponent } from "./theme/layouts/admin/navigation/nav-content/nav-item/nav-item.component";
import { NavigationItem } from "./theme/layouts/admin/navigation/navigation";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { CoreModule } from "@core/core.module";
import { StorageService } from "@core/services";
import { NgImageSliderModule } from "ng-image-slider";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    GuestComponent,
    NavigationComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavContentComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgImageSliderModule,
    CoreModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000, // Time to close the toaster (in milliseconds)
      positionClass: "toast-top-right", // Toast position
      closeButton: true, // Show close button
      progressBar: true, // Show progress bar
    }),
    BrowserAnimationsModule,
    HttpClientModule,


  ],
  providers: [
    NavigationItem,
    StorageService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
