import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private routes: Array<string> = [
    'policies',
    'riskTypes',
    'coverageTypes',
    'about'
  ];

  constructor () { }

}
