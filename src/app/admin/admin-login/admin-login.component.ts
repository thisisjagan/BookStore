import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  constructor(private router: Router) { }

  onClick(): void {
    if (this.userName.toLowerCase() === "admin" && this.password === "admin") {
      this.router.navigate(['/addBooks'])
    }
    else{
      alert('Username or password is incorrect!');
    }
  }

  ngOnInit() {
  }

}
