import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/interceptors/auth.interceptor';
import { errorInterceptor } from './app/interceptors/error.interceptor';
import { authGuard } from './app/services/auth.guard';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptor, errorInterceptor]) // Registrando los interceptores
    ),
    provideRouter([
      {
        path: '',
        loadComponent: () =>
          import('./app/home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./app/about/about.component').then((m) => m.AboutComponent)
      },
      {
        path: 'dashboard', // 🔥 Ruta protegida
        loadComponent: () =>
          import('./app/dashboard/dashboard.component').then((m) => m.DashboardComponent),
        canActivate: [authGuard] // ✅ Aplica el guard aquí
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./app/login/login.component').then((m) => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./app/register/register.component').then((m) => m.RegisterComponent)
      }

      // Agrega más rutas según lo necesites
    ])
  ]
}).catch((err) => console.error(err));
