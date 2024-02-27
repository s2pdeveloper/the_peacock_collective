import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModalComponent } from './modals/header-modal/header-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomPaginationComponent } from './components/custom-pagination/custom-pagination.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TopbarComponent, HeaderModalComponent, CustomPaginationComponent],
  imports: [CommonModule, NgbModule,FormsModule,ReactiveFormsModule,NgbPaginationModule],
  exports: [HeaderComponent, FooterComponent, TopbarComponent,CustomPaginationComponent],
})
export class SharedModule {}
