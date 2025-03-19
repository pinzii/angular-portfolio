import { HttpInterceptorFn } from '@angular/common/http';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  const token = localStorage.getItem('token');

  if (token) {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(clonedRequest);
  }

  return next(req);
};
