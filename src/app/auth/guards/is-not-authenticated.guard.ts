import { CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';
import { inject } from '@angular/core';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authSvc = inject( AuthService );
  const router      = inject( Router );
  
  console.log(`IsNotAuthenticated guard ${authSvc.authStatus()}`);

  if ( authSvc.authStatus() === AuthStatus.authenticated ) {
    router.navigateByUrl('/dashboard');
    return false;
  }

  return true;
};
