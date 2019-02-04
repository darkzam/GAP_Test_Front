import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../core/material/material.module';
import { GpaCommonModule } from '../../core/common/common.module';
import { ClientsRouterModule } from './clients.router.module';
import { ClientsComponent } from './clients/clients.component';
import { NewClientComponent } from './newClient/newClient.component';
import { UpdateClientComponent } from './updateClient/updateClient.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GpaCommonModule,
    ClientsRouterModule
  ],
  declarations: [
    ClientsComponent,
    NewClientComponent,
    UpdateClientComponent
  ],
  exports: [
    NewClientComponent,
    UpdateClientComponent
  ],
  entryComponents: [
    NewClientComponent,
    UpdateClientComponent
  ]
})
export class ClientsModule { }
