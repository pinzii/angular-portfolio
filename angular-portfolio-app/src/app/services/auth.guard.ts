import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAuthenticated().pipe(
    map(isAuth => {
      if (!isAuth) {
        router.navigate(['/login']); // Redirigir al login si el usuario no está autenticado
        return false;
      }
      return true;
    })
  );
};
