import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (_route, state) => {

  const authService = inject( AuthService );
  const router      = inject( Router );

  console.log(`IsAuthenticated guard${authService.authStatus()}`);

  if ( authService.authStatus() === AuthStatus.authenticated ) {
    return true;
  }

  router.navigateByUrl('/auth/login');
  return false;
};
