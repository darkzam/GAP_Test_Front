import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RiskTypesComponent } from './riskTypes/riskType.component';

const routes: Routes = [
  { path: '', component: RiskTypesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RiskTypesRouterModule { }
