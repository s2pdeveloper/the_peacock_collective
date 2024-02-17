import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, TopbarComponent],
  imports: [CommonModule, NgbModule],
  exports: [HeaderComponent, FooterComponent, TopbarComponent],
})
export class SharedModule {}
