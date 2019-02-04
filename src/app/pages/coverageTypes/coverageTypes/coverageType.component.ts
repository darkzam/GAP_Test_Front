import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CoverageTypesService } from '../../../services/coverageTypes/coverageTypes.service';
import { NewCoverageTypeComponent } from '../newCoverageType/newCoverageType.component';
import { UpdateCoverageTypeComponent } from '../updateCoverageType/updateCoverageType.component';

@Component({
  selector: 'app-coverageType',
  templateUrl: './coverageType.component.html',
  styleUrls: ['./coverageType.component.css']
})
export class CoverageTypesComponent implements OnInit {

  private displayedColumns: Array<string> = ['id', 'name', 'coverage', 'actions'];
  private dataSource: Array<any> ;

  constructor(
    private dialog: MatDialog,
    private coverageTypesService: CoverageTypesService
  ) { 

    this.coverageTypesService.onChangeCoverageTypes.subscribe(
			(id: number) => {
				this.getAll();
			});

  }

  ngOnInit() { 
    this.getAll(); 
  }

  private getAll() {
    this.coverageTypesService.get("").subscribe(response => {
      this.dataSource = response;
    });
  }

 private getById(id: string | number){
  this.coverageTypesService.get(id).subscribe(response => {
      this.opendialogEdit(response);
  });
 }

 private removeById(id: string | number){
  this.coverageTypesService.delete(id).subscribe(response => {
      this.getAll();
  });
}

  private opendialogEdit (CoverageType : any) {
    const updateCoverageTypeDialog = this.dialog.open(UpdateCoverageTypeComponent, {
      width: '400px',
      data: {
        dataKey: CoverageType
      }
    });
  }

  private opendialogCreate() {
    const newCoverageTypeDialog = this.dialog.open(NewCoverageTypeComponent, {
      width: '400px',
      data: {}
    });
  }

  private editCoverageType(id: string | number){
    this.getById(id);
  }

  private createCoverageType(){
    this.opendialogCreate();
  }

  private removeCoverageType(id: string | number){
    this.removeById(id);
  }

}
