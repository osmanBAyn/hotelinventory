import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

export const roomGuard: CanActivateChildFn = (childRoute, state) => {
  const isAdmin = inject(LoginService).isAdmin;
  if (isAdmin) {
    return true;
  }
  else{
    return false;
  }
};
