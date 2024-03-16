import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./guards/index";
import {
  JwtInterceptorProvider,
  ErrorInterceptorProvider,
  ApiPrefixInterceptorProvider,
} from "./helpers/index";
import { ValidationService } from "./components";
import { NgxSpinnerModule } from "ngx-spinner"; 
@NgModule({
  imports: [
    HttpClientModule,
    NgxSpinnerModule,

  ],
  declarations: [],
  exports: [NgxSpinnerModule],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AuthGuard,
        ValidationService,
        ApiPrefixInterceptorProvider,
        JwtInterceptorProvider,
        ErrorInterceptorProvider,
      ],
    };
  }
}
