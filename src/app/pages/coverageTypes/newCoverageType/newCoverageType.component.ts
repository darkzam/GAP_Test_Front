import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { CoverageTypesService } from '../../../services/coverageTypes/coverageTypes.service';

@Component({
  selector: 'app-new-CoverageType',
  templateUrl: './newCoverageType.component.html',
  styleUrls: ['./newCoverageType.component.css']
})
export class NewCoverageTypeComponent implements OnInit {

  private options: Array<{ label: string, value: boolean }> = [
    { label: 'fist', value: true },
    { label: 'second', value: true }
  ];
  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewCoverageTypeComponent>,
    private formBuilder: FormBuilder,
    private CoverageTypesService: CoverageTypesService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      coverage: ['', Validators.required]
    });

  }

  private submitForm() {

    var body = this.form.getRawValue();
    body.coverage = body.coverage/100;

    if (this.form.valid) {
      this.CoverageTypesService.post(body).subscribe((response: Response) => {
        this.dialogRef.close(response);
        this.CoverageTypesService.onChangeCoverageTypes.emit();
      });
    }
  }

  private cancelForm(){

    this.dialogRef.close();
  }

}
