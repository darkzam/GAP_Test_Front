import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PoliciesService } from '../../../services/policies/policies.service';
import { NewPolicyComponent } from '../newpolicy/newpolicy.component';
import { UpdatePolicyComponent } from '../updatepolicy/updatePolicy.component';
import { CoverageTypesService } from 'src/app/services/coverageTypes/coverageTypes.service';
import { RiskTypesService } from 'src/app/services/riskTypes/riskTypes.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  private displayedColumns: Array<string> = ['id', 'name', 'description', 'period', 'dateStart' , 'dateEnd', 'price', 
                                            'coverageName', 'coverageName', 'coverage', 'riskName', 'actions'];
  private dataSource: Array<any>;
  private coverages : Array<any>;
  private risks : Array<any>;

  constructor(
    private dialog: MatDialog,
    private policiesService: PoliciesService,
    private coverageTypesService : CoverageTypesService,
    private riskTypesService : RiskTypesService
  ) { 

    this.policiesService.onChangePolicies.subscribe(
			(id: number) => {
        this.getAll();
			});
  }

  ngOnInit() { 
    this.getAll(); 
    this.getAllCoverages();
    this.getAllRisks();
  }

  private getAll() {
    this.policiesService.get("").subscribe(response => {
      this.dataSource = response;
      console.log(response);
    });
  }

  private getAllCoverages() {
    this.coverageTypesService.get("").subscribe(response => {
      this.coverages = response;
      console.log(response);
    });
  }

  private getAllRisks() {
    this.riskTypesService.get("").subscribe(response => {
      this.risks = response;
      console.log(response);
    });
  }

 private getById(id: string | number){
  this.policiesService.get(id).subscribe(response => {
      this.opendialogEdit(response);
  });
 }

 private removeById(id: string | number){
  this.policiesService.delete(id).subscribe(response => {
      this.getAll();
  });
}

  private opendialogEdit (Policy : any) {
    const updatePolicyDialog = this.dialog.open(UpdatePolicyComponent, {
      width: '400px',
      data: {
        dataKey: Policy,
        coverages: this.coverages,
        risks : this.risks
      }
    });
  }

  private opendialogCreate() {
    const newPolicyDialog = this.dialog.open(NewPolicyComponent, {
      width: '400px',
      data: {
        coverages: this.coverages,
        risks : this.risks
      }
    });
  }

  private editPolicy(id: string | number){
    this.getById(id);
  }

  private createPolicy(){
    this.opendialogCreate();
  }

  private removePolicy(id: string | number){
    this.removeById(id);
  }


}
