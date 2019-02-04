import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClientsService } from '../../../services/clients/clients.service';
import { NewClientComponent } from '../newClient/newClient.component';
import { UpdateClientComponent } from '../updateClient/updateClient.component';

@Component({
  selector: 'app-Clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private displayedColumns: Array<string> = ['id', 'name', 'actions'];
  private dataSource: Array<any> ;

  constructor(
    private dialog: MatDialog,
    private clientssService: ClientsService
  ) { 

    this.clientssService.onChangeClients.subscribe(
			(id: number) => {
				this.getAll();
			});

  }

  ngOnInit() { 
    this.getAll(); 
  }

  private getAll() {
    this.clientssService.get("").subscribe(response => {
      this.dataSource = response;
    });
  }

 private getById(id: string | number){
  this.clientssService.get(id).subscribe(response => {
      this.opendialogEdit(response);
  });
 }

 private removeById(id: string | number){
  this.clientssService.delete(id).subscribe(response => {
      this.getAll();
  });
}

  private opendialogEdit (client : any) {
    const updateClientsDialog = this.dialog.open(UpdateClientComponent, {
      width: '400px',
      data: {
        dataKey: client
      }
    });
  }

  private opendialogCreate() {
    const newClientsDialog = this.dialog.open(NewClientComponent, {
      width: '400px',
      data: {}
    });
  }

  private editClient(id: string | number){
    this.getById(id);
  }

  private createClient(){
    this.opendialogCreate();
  }

  private removeClient(id: string | number){
    this.removeById(id);
  }

}
