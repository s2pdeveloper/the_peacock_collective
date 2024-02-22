import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderModalComponent } from './modals/header-modal/header-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TopbarComponent, HeaderModalComponent],
  imports: [CommonModule, NgbModule,FormsModule],
  exports: [HeaderComponent, FooterComponent, TopbarComponent],
})
export class SharedModule {}
