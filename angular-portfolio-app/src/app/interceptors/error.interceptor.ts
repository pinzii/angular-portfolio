import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


export const errorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<any> => {
    return next(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error detectado:', error);
  
        let errorMessage = 'Ocurrió un error inesperado';
        if (error.status === 401) {
          errorMessage = 'No estás autorizado. Inicia sesión.';
        } else if (error.status === 404) {
          errorMessage = 'Recurso no encontrado.';
        } else if (error.status === 500) {
          errorMessage = 'Error interno del servidor.';
        }
  
        alert(errorMessage);
        return throwError(() => new Error(errorMessage));
      })
    );
  };
