import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/authentication/auth.service';
import {UserStorageService} from '../services/authentication/user-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userStorage: UserStorageService
  ) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUserPrivileges = this.userStorage.getPrivilegesToken();
    if (currentUserPrivileges) {

      // check if route is restricted by role
      for (const privilege of currentUserPrivileges) {
        if (route.data.privileges && route.data.privileges.includes(privilege)) {
          return true;
        }
      }
      this.router.navigate(['/SMQ']);
      return false;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }

}
