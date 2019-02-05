import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material/material.module';
import { GpaCommonModule } from '../../core/common/common.module';
import { AssignmentsRouterModule } from './assignments.router.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { NewAssignmentComponent } from './newAssignment/newAssignment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GpaCommonModule,
    AssignmentsRouterModule
  ],
  declarations: [
    AssignmentsComponent,
    NewAssignmentComponent
  ],
  exports: [
    NewAssignmentComponent
  ],
  entryComponents: [
    NewAssignmentComponent
  ]
})
export class AssignmentsModule { }
