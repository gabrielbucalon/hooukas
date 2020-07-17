import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '@/pages/auth/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authenticationService: AuthService
  ) { }

  canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this._authenticationService.currentUserValue;
    if (currentUser) {
      return true;
    }

    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
