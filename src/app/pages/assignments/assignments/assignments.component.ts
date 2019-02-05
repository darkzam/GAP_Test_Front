import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AssignmentService } from '../../../services/assignments/assignment.service';
import { NewAssignmentComponent } from '../newAssignment/newAssignment.component';
import { PoliciesService } from 'src/app/services/policies/policies.service';
import { ActivatedRoute } from '@angular/router';
import { ClientsService } from 'src/app/services/clients/clients.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  private displayedColumns: Array<string> = ['id', 'name', 'description', 'period', 'price','actions'];
  private dataSource : Array<any>;
  private policies : Array<any>;
  private client : any;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private assignmentService: AssignmentService,
    private policiesService : PoliciesService,
    private clientsService: ClientsService
  ) { 

    this.assignmentService.onChangeAssignment.subscribe(
			(id: number) => {
				this.getAssignmentsForClient(this.client.id);
			});

  }

  ngOnInit() { 

    const id = this.route.snapshot.params.id;

    this.getClient(id);
    
    this.getAssignmentsForClient(id);

    this.getAllPolicies();
  }

  private getAssignmentsForClient(clientId: string | number) {
    this.assignmentService.get(clientId).subscribe(response => {
      this.dataSource = response;
      console.log(response);
    });
  }

  private getClient(id: string | number){
    this.clientsService.get(id).subscribe(response => {
      this.client = response;
  });
  }

  private getAllPolicies() {
    this.policiesService.get("").subscribe(response => {
      this.policies = response;
    });
  }

 private removeById(policyId: string | number){
  this.assignmentService.delete(this.client.id, policyId).subscribe(response => {
    this.getAssignmentsForClient(this.client.id);
  });
  }

  private opendialogCreate() {
    const newAssignmentDialog = this.dialog.open(NewAssignmentComponent, {
      width: '400px',
      data: {
        policies : this.policies,
        client : this.client
      }
    });
  }

  private createAssignment(){
    this.opendialogCreate();
  }

  private removeAssignment(policyId: string | number){
    this.removeById(policyId);
  }

}
