import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  public pageTitle = 'Welcome';
  isLoggedIn: boolean = false;
  ngOnInit() {
    if (localStorage.getItem("isLoggedIn") != undefined) {
      if (localStorage.getItem("isLoggedIn") === "true") {
        this.isLoggedIn = true;
      }
    }
  }
}
