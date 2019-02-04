import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRouterModule } from './about.router.module';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from '../../core/material/material.module';
import { GpaCommonModule } from '../../core/common/common.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    GpaCommonModule,
    AboutRouterModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
