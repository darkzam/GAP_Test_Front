import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './core/material/material.module';
import { AppRouterModule } from './app.router.module';
import { AppComponent } from './app.component';
import { ApiService } from './services/api/api.service';
import { PoliciesService } from './services/policies/policies.service';
import { GpaCommonModule } from './core/common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    GpaCommonModule,
    AppRouterModule
  ],
  providers: [
    ApiService,
    PoliciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
