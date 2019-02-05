import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentsComponent } from './pages/assignments/assignments/assignments.component';

const routes: Routes = [
  { path: '', redirectTo: 'policies', pathMatch: 'full' },
  { path: 'policies', loadChildren: './pages/policies/policies.module#PoliciesModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule' },
  { path: 'riskTypes', loadChildren: './pages/riskTypes/riskTypes.module#RiskTypesModule' },
  { path: 'coverageTypes', loadChildren: './pages/coverageTypes/coverageTypes.module#CoverageTypesModule'},
  { path: 'clients', loadChildren: './pages/clients/clients.module#ClientsModule'},
  { path: 'clients/:id/policies', loadChildren: './pages/assignments/assignments.module#AssignmentsModule'}
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
