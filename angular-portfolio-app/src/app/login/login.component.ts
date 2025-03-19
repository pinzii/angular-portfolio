import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Agregar FormsModule para manejar formularios
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = ''; // ✅ Variables para capturar los datos del usuario
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']), // 🔥 Redirigir al Dashboard tras login exitoso
      error: () => alert('Credenciales incorrectas') // ⚠️ Manejar error de login
    });
  }
}

