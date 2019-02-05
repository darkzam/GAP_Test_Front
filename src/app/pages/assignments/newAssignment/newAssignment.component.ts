import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AssignmentService } from '../../../services/assignments/assignment.service';

@Component({
  selector: 'app-new-Assignment',
  templateUrl: './newAssignment.component.html',
  styleUrls: ['./newAssignment.component.css']
})
export class NewAssignmentComponent implements OnInit {

  private form: FormGroup;
  private policies : Array<any>;

  constructor(
    public dialogRef: MatDialogRef<NewAssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private assignmentsService: AssignmentService
  ) { }

  ngOnInit() {

    this.policies = this.data.policies;

    this.form = this.formBuilder.group({
      policyId: ['', Validators.required]
    });

  }

  private submitForm() {

    if (this.form.valid) {
      this.assignmentsService.post( this.data.client.id, { clientId: this.data.client.id, policyId: this.form.controls['policyId'].value } ).subscribe((response: Response) => {
        this.dialogRef.close(response);
        this.assignmentsService.onChangeAssignment.emit();
      });
    }
  }

  private cancelForm(){

    this.dialogRef.close();
  }

}
