import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent} from '@angular/common/http';



export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return next(clonedRequest);
};

// Función para obtener el token
function getToken(): string {
  return localStorage.getItem('token') || '';
}
 
