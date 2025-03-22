import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
user: any = null;
error = '';

  constructor(
    private authService: AuthService, 
    private router: Router,
    private http: HttpClient
    ) {}

    ngOnInit(): void {
      const token = localStorage.getItem('token');

      if(token) {

        this.http.get<any[]>('http://localhost:4000/users').subscribe({
          
          next: (users) => {
            this.user = users.find( u => u.token === token);

            if(!this.user){
              this.error = 'Usuario no encontrado';
            }
          },

          error: () => {
            this.error = 'Error al obtener datos del usuario';
          }

        });
      }else {
        this.error = 'No estás autenticado';
      }
    }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirige tras cerrar sesión
  }
}

