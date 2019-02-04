import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { ClientsService } from '../../../services/clients/clients.service';

@Component({
  selector: 'app-new-Client',
  templateUrl: './newClient.component.html',
  styleUrls: ['./newClient.component.css']
})
export class NewClientComponent implements OnInit {

  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewClientComponent>,
    private formBuilder: FormBuilder,
    private clientsService: ClientsService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required]
    });

  }

  private submitForm() {

    if (this.form.valid) {
      this.clientsService.post(this.form.getRawValue()).subscribe((response: Response) => {
        this.dialogRef.close(response);
        this.clientsService.onChangeClients.emit();
      });
    }
  }

  private cancelForm(){

    this.dialogRef.close();
  }

}
