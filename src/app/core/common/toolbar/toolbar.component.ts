import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  private url: Array<string>;

  constructor(
    private router: Router
  ) {
    this.actualUrl ();
  }

  ngOnInit() { }

  private actualUrl () {
    this.router.events.subscribe((value: Event) => {
      const navigationEnd = value instanceof NavigationEnd;
      if (navigationEnd) {
        let fragmentedURL = this.router.url.split('/');
        fragmentedURL.splice(0,1);
        if (fragmentedURL.length > 0) {
          this.url = fragmentedURL;
          console.log(this.url);
        }
      }
    });
  }

}
