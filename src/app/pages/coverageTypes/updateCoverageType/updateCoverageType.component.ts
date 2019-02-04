import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CoverageTypesService } from '../../../services/coverageTypes/coverageTypes.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-update-CoverageType',
  templateUrl: './updateCoverageType.component.html',
  styleUrls: ['./updateCoverageType.component.css']
})
export class UpdateCoverageTypeComponent implements OnInit {

  private options: Array<{ label: string, value: boolean }> = [
    { label: 'fist', value: true },
    { label: 'second', value: true }
  ];
  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateCoverageTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private CoverageTypesService: CoverageTypesService
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
      this.CoverageTypesService.update(this.form.controls['id'].value, body ).subscribe((response: Response) => {
        this.dialogRef.close(response);
        this.CoverageTypesService.onChangeCoverageTypes.emit();
      });
    }
  }

  private cancelForm(){

    this.dialogRef.close();
  }

}
