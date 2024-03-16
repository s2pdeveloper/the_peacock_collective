// Angular Imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// project import
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { CardComponent } from "./components/card/card.component";
import { NgScrollbarModule } from "ngx-scrollbar";

// bootstrap import
import {
  NgbDropdownModule,
  NgbNavModule,
  NgbModule,
  NgbCollapseModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxFileDropModule } from "ngx-file-drop";

import {
  NgbdSortableHeader,
  TwoDigitDecimalNumberDirective,
  AccessControlDirective,
  LazyLoadImageDirective,
} from "./directives";
import {
  SearchFilterPipe,
  TruncatePipe,
  // ToWordsPipe,
  LabelTranslatePipe,
  CompanyCurrencyPipe,
} from "./pipes";
import { CustomPaginationComponent } from "@core/components/custom-pagination/custom-pagination.component";
import { ProductModelComponent } from "src/app/model/product-model/product-model.component";
import { CustomerModelComponent } from "src/app/model/customer-model/customer-model.component";
import { CustomerModelNewComponent } from "src/app/model/customer-model-new/customer-model-new.component";

const PIPES: any = [
  SearchFilterPipe,
  TruncatePipe,
  // ToWordsPipe,
  LabelTranslatePipe,
  CompanyCurrencyPipe,
];
const DIRECTIVES: any = [
  NgbdSortableHeader,
  TwoDigitDecimalNumberDirective,
  AccessControlDirective,
  LazyLoadImageDirective,
];
const MODULES: any = [
  CommonModule,
  NgSelectModule,
  FormsModule,
  ReactiveFormsModule,
  BreadcrumbComponent,
  NgbDropdownModule,
  NgbNavModule,
  NgbModule,
  NgbCollapseModule,
  NgScrollbarModule,
  CardComponent,
  NgxFileDropModule,
];
@NgModule({
  imports: [...MODULES, CustomPaginationComponent],
  exports: [...MODULES, ...DIRECTIVES, ...PIPES],

  declarations: [
    CustomerModelComponent,
    CustomerModelNewComponent,
    ProductModelComponent,
    SpinnerComponent,
    ...DIRECTIVES,
    ...PIPES,
  ],
})
export class SharedModule {}
