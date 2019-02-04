import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PoliciesService } from '../../../services/policies/policies.service';
import { CoverageTypesService } from 'src/app/services/coverageTypes/coverageTypes.service';
import { RiskTypesService } from 'src/app/services/riskTypes/riskTypes.service';

@Component({
  selector: 'app-new-policy',
  templateUrl: './newpolicy.component.html',
  styleUrls: ['./newpolicy.component.css']
})
export class NewPolicyComponent implements OnInit {

  private coverages : Array<any>;
  private risks : Array<any>;
  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewPolicyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private policiesService: PoliciesService
  ) { }

  ngOnInit() {

    this.coverages = this.data.coverages;
    this.risks = this.data.risks;

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(16)]],
      price: ['', Validators.required],
      period: ['', Validators.required],
      date: ['', Validators.required],
      coverageTypeId: ['', Validators.required],
      riskTypeId: ['', Validators.required]
    });
  }

  private submitForm() {
   
    if (this.form.valid) {
      this.policiesService.post(this.form.getRawValue()).subscribe((response: Response) => {
        this.dialogRef.close(response);
        this.policiesService.onChangePolicies.emit();
      });
    }
  }

  private cancelForm(){
    this.dialogRef.close();
  }


}
