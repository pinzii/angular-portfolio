import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authUrl = 'http://localhost:4000/users'; // ✅ json-server solo acepta GET aquí
  private authStatus = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  // ✅ Método corregido para usar GET en lugar de POST
  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.get<any[]>(this.authUrl).pipe(
      map(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          console.log('✅ Usuario encontrado:', user);
          localStorage.setItem('token', user.token);
          this.authStatus.next(true);
          return { token: user.token };
        }
        throw new Error('Credenciales incorrectas');
      }),
      catchError(error => {
        console.error('❌ Error en login:', error.message);
        return throwError(() => new Error(error.message));
      })
    );
  }

  logout(): void {
    console.log('🚪 Cerrando sesión...');
    localStorage.removeItem('token');
    this.authStatus.next(false);
  }

  isAuthenticated(): Observable<boolean> {
    return this.authStatus.asObservable();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
