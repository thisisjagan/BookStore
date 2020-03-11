import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/user';

@Component({
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  admin: IUser;
  constructor(private router: Router) { }

  onClick(): void {
    this.admin = JSON.parse(sessionStorage.getItem("admin"));
    if (this.userName.toLowerCase() === this.admin.userName && this.password === this.admin.password) {
      sessionStorage.setItem("isLoggedIn","true");
      this.router.navigate(['/addBooks']);
    }
    else{
      alert('Username or password is incorrect!');
    }
  }

  ngOnInit() {
    if(sessionStorage.getItem("adminDetails") == undefined){
      let user: IUser ={
        "userName": "admin",
        "password": "admin"
      }
      sessionStorage.setItem("admin",JSON.stringify(user));
    }
  }
}