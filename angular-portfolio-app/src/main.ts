import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/interceptors/auth.service';
import { errorInterceptor } from './app/interceptors/error.interceptor';


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
      }
      // Agrega más rutas según lo necesites
    ])
  ]
}).catch((err) => console.error(err));
