import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material/material.module';
import { GpaCommonModule } from '../../core/common/common.module';
import { RiskTypesRouterModule } from './riskTypes.router.module';
import { RiskTypesComponent } from './riskTypes/riskType.component';
import { NewRiskTypeComponent } from './newRiskType/newRiskType.component';
import { UpdateRiskTypeComponent } from './updateRiskType/updateRiskType.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GpaCommonModule,
    RiskTypesRouterModule
  ],
  declarations: [
    RiskTypesComponent,
    NewRiskTypeComponent,
    UpdateRiskTypeComponent
  ],
  exports: [
    NewRiskTypeComponent,
    UpdateRiskTypeComponent
  ],
  entryComponents: [
    NewRiskTypeComponent,
    UpdateRiskTypeComponent
  ]
})
export class RiskTypesModule { }
