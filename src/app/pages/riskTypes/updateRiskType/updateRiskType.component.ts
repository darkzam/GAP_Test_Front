import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { RiskTypesService } from '../../../services/riskTypes/riskTypes.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-update-RiskType',
  templateUrl: './updateRiskType.component.html',
  styleUrls: ['./updateRiskType.component.css']
})
export class UpdateRiskTypeComponent implements OnInit {

  private options: Array<{ label: string, value: boolean }> = [
    { label: 'fist', value: true },
    { label: 'second', value: true }
  ];
  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateRiskTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private riskTypesService: RiskTypesService
  ) { }

  ngOnInit() {

      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        id: ['', Validators.required]
      });

      this.form.controls['id'].disable();

      this.form.controls['id'].setValue(this.data.dataKey.id);
      this.form.controls['name'].setValue(this.data.dataKey.name);

  }

  private submitForm() {
    if (this.form.valid) {
      this.riskTypesService.update(this.form.controls['id'].value, this.form.getRawValue()).subscribe((response: Response) => {
        this.dialogRef.close(response);
        this.riskTypesService.onChangeRiskTypes.emit();
      });
    }
  }

  private cancelForm(){

    this.dialogRef.close();
  }

}
