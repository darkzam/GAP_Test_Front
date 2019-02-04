import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material/material.module';
import { GpaCommonModule } from '../../core/common/common.module';
import { PoliciesRouterModule } from './policies.router.module';
import { PoliciesComponent } from './policies/policies.component';
import { NewPolicyComponent } from './newpolicy/newpolicy.component';
import { UpdatePolicyComponent } from './updatepolicy/updatePolicy.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GpaCommonModule,
    PoliciesRouterModule
  ],
  declarations: [
    PoliciesComponent,
    NewPolicyComponent,
    UpdatePolicyComponent
  ],
  exports: [
    NewPolicyComponent,
    UpdatePolicyComponent
  ],
  entryComponents: [
    NewPolicyComponent,
    UpdatePolicyComponent
  ]
})
export class PoliciesModule { }
