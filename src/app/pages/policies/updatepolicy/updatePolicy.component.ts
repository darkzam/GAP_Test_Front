import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { PoliciesService } from '../../../services/policies/policies.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-update-Policy',
  templateUrl: './updatePolicy.component.html',
  styleUrls: ['./updatePolicy.component.css']
})
export class UpdatePolicyComponent implements OnInit {

  private options: Array<{ label: string, value: boolean }> = [
    { label: 'fist', value: true },
    { label: 'second', value: true }
  ];
  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdatePolicyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private policiesService: PoliciesService
  ) { }

  ngOnInit() {

      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        id: ['', Validators.required],
        coverage: ['', Validators.required]
      });

      this.form.controls['id'].disable();

      this.form.controls['id'].setValue(this.data.dataKey.id);
      this.form.controls['name'].setValue(this.data.dataKey.name);
      this.form.controls['coverage'].setValue(this.data.dataKey.coverage*100);

  }

  private submitForm() {

    var body = this.form.getRawValue();
    body.coverage = body.coverage/100;
   
    if (this.form.valid) {
      this.policiesService.update(this.form.controls['id'].value, body ).subscribe((response: Response) => {
        this.dialogRef.close(response);
        this.policiesService.onChangePolicies.emit();
      });
    }
  }
  

  private cancelForm(){

    this.dialogRef.close();
  }

}
