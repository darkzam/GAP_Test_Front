import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RiskTypesService } from '../../../services/riskTypes/riskTypes.service';
import { NewRiskTypeComponent } from '../newRiskType/newRiskType.component';
import { UpdateRiskTypeComponent } from '../updateRiskType/updateRiskType.component';

@Component({
  selector: 'app-riskType',
  templateUrl: './riskType.component.html',
  styleUrls: ['./riskType.component.css']
})
export class RiskTypesComponent implements OnInit {

  private displayedColumns: Array<string> = ['id', 'name', 'actions'];
  private dataSource: Array<any> ;

  constructor(
    private dialog: MatDialog,
    private riskTypesService: RiskTypesService
  ) { 

    this.riskTypesService.onChangeRiskTypes.subscribe(
			(id: number) => {
				this.getAll();
			});

  }

  ngOnInit() { 
    this.getAll(); 
  }

  private getAll() {
    this.riskTypesService.get("").subscribe(response => {
      this.dataSource = response;
    });
  }

 private getById(id: string | number){
  this.riskTypesService.get(id).subscribe(response => {
      this.opendialogEdit(response);
  });
 }

 private removeById(id: string | number){
  this.riskTypesService.delete(id).subscribe(response => {
      this.getAll();
  });
}

  private opendialogEdit (riskType : any) {
    const updateRiskTypeDialog = this.dialog.open(UpdateRiskTypeComponent, {
      width: '400px',
      data: {
        dataKey: riskType
      }
    });
  }

  private opendialogCreate() {
    const newRiskTypeDialog = this.dialog.open(NewRiskTypeComponent, {
      width: '400px',
      data: {}
    });
  }

  private editRiskType(id: string | number){
    this.getById(id);
  }

  private createRiskType(){
    this.opendialogCreate();
  }

  private removeRiskType(id: string | number){
    this.removeById(id);
  }

}
