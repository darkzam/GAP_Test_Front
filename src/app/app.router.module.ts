import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'policies', pathMatch: 'full' },
  { path: 'policies', loadChildren: './pages/policies/policies.module#PoliciesModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'riskTypes', loadChildren: './pages/riskTypes/riskTypes.module#RiskTypesModule' },
  { path: 'coverageTypes', loadChildren: './pages/coverageTypes/coverageTypes.module#CoverageTypesModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
