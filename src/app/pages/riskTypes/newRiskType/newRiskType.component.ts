import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { RiskTypesService } from '../../../services/riskTypes/riskTypes.service';

@Component({
  selector: 'app-new-RiskType',
  templateUrl: './newRiskType.component.html',
  styleUrls: ['./newRiskType.component.css']
})
export class NewRiskTypeComponent implements OnInit {

  private options: Array<{ label: string, value: boolean }> = [
    { label: 'fist', value: true },
    { label: 'second', value: true }
  ];
  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewRiskTypeComponent>,
    private formBuilder: FormBuilder,
    private riskTypesService: RiskTypesService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });

  }

  private submitForm() {
    if (this.form.valid) {
      this.riskTypesService.post(this.form.getRawValue()).subscribe((response: Response) => {
        this.dialogRef.close(response);
        this.riskTypesService.onChangeRiskTypes.emit();
      });
    }
  }

  private cancelForm(){

    this.dialogRef.close();
  }

}
