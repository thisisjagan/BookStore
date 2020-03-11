import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bodhidharma Heritage Book Store';
  isLoggedIn: boolean = false;
  ngOnInit(){
    if(sessionStorage.getItem("isLoggedIn") != undefined){
      if(sessionStorage.getItem("isLoggedIn") === "true"){
        this.isLoggedIn = true;
      }
    }
  }
}
