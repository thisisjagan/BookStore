import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminEditBookGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (sessionStorage.getItem("isLoggedIn") != undefined) {
      if (sessionStorage.getItem("isLoggedIn") === "true") {
        let id = +next.url[1].path;
        if (isNaN(id) || id < 1) {
          alert('Unable to locate a book with ID: ' + id);
          this.router.navigate(['/books']);
          return false;
        }else{
          return true;  
        }
      }
    }
    alert('You must be admin to add books. Please Login.')
    this.router.navigate(['/adminLogin']);
    return false;
  }

}
