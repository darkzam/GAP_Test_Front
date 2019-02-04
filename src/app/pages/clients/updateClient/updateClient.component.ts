import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ClientsService } from '../../../services/clients/clients.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-update-Client',
  templateUrl: './updateClient.component.html',
  styleUrls: ['./updateClient.component.css']
})
export class UpdateClientComponent implements OnInit {

  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private clientsService: ClientsService
  ) { }

  ngOnInit() {

      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        id: ['', Validators.required],
        lastname: ['', Validators.required]
      });

      this.form.controls['id'].disable();

      this.form.controls['id'].setValue(this.data.dataKey.id);
      this.form.controls['name'].setValue(this.data.dataKey.name);
      this.form.controls['lastname'].setValue(this.data.dataKey.lastName);

  }

  private submitForm() {

    if (this.form.valid) {
      this.clientsService.update(this.form.controls['id'].value, this.form.getRawValue() ).subscribe((response: Response) => {
        this.dialogRef.close(response);
        this.clientsService.onChangeClients.emit();
      });
    }
  }

  private cancelForm(){

    this.dialogRef.close();
  }

}
