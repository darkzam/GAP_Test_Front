import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoverageTypesComponent } from './CoverageTypes/CoverageType.component';

const routes: Routes = [
  { path: '', component: CoverageTypesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoverageTypesRouterModule { }
