import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from './auth.service';
@Injectable ()
export class AuthGuardService implements CanActivate {
    constructor(public auth: AuthService, public routeur: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated ()) {
      this.routeur.navigate(['/login']);
      return false;
    }
    return true;
  }
}
