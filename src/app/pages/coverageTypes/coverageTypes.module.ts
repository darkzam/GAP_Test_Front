import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material/material.module';
import { GpaCommonModule } from '../../core/common/common.module';
import { CoverageTypesRouterModule } from './coverageTypes.router.module';
import { CoverageTypesComponent } from './CoverageTypes/CoverageType.component';
import { NewCoverageTypeComponent } from './newCoverageType/newCoverageType.component';
import { UpdateCoverageTypeComponent } from './updateCoverageType/updateCoverageType.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GpaCommonModule,
    CoverageTypesRouterModule
  ],
  declarations: [
    CoverageTypesComponent,
    NewCoverageTypeComponent,
    UpdateCoverageTypeComponent
  ],
  exports: [
    NewCoverageTypeComponent,
    UpdateCoverageTypeComponent
  ],
  entryComponents: [
    NewCoverageTypeComponent,
    UpdateCoverageTypeComponent
  ]
})
export class CoverageTypesModule { }
