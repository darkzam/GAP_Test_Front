import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { PoliciesService } from '../../../services/policies/policies.service';

@Component({
  selector: 'app-new-policy',
  templateUrl: './newpolicy.component.html',
  styleUrls: ['./newpolicy.component.css']
})
export class NewPolicyComponent implements OnInit {

  private options: Array<{ label: string, value: boolean }> = [
    { label: 'fist', value: true },
    { label: 'second', value: false }
  ];
  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewPolicyComponent>,
    private formBuilder: FormBuilder,
    private policiesService: PoliciesService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(16)]],
      myOption: ['', Validators.required]
    });
  }

  private submitForm() {
    if (this.form.valid) {
      this.policiesService.post(this.form.getRawValue()).subscribe((response: Response) => {
        this.dialogRef.close(response);
      });
    }
  }

}
