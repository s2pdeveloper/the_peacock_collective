import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './features/shared/shared.module';
import { LandingLayoutModule } from './features/landing-layout/landing-layout.module';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    LandingLayoutModule
  ],
  exports:[
    SafePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
