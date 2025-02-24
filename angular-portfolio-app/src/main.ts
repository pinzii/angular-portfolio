import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
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
