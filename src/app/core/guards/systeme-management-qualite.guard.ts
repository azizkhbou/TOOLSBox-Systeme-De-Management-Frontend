import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/authentication/auth.service';
import {UserStorageService} from '../services/authentication/user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SystemeManagementQualiteGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private userStorage: UserStorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUserPrivileges = this.userStorage.getPrivilegesToken();
    if (currentUserPrivileges) {
if (currentUserPrivileges.includes('Gestion des utilisateurs')) {
  this.router.navigate(['/admin'] );
  return false;
}
return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login']);
    return false;
  }

}
