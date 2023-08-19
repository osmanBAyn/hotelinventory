import { Inject, inject } from '@angular/core';
import { CanActivateFn, CanLoadFn, CanMatchFn, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

export const loginGuardCanActivate: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  console.log('loginGuard', loginService.isLoggedIn);
  return loginService.isLoggedIn?true:router.navigate(['/login']);
};

export const loginGuardCanMatch: CanMatchFn = (route, segments) => {
  const loginService = inject(LoginService);
  return loginService.isLoggedIn;
};