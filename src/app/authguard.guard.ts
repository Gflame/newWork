import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';

import { UserService } from './user.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private user: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    //this.router.navigate(['']);
    return this.user.getUserLoggedIn();
  }
}
