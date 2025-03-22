import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  email = '';
  password = '';
  error = '';
  success = '';

  constructor( private http: HttpClient, private router: Router) {}
    register() {
      const newUser = { 
        email: this.email,
        password: this.password, 
        token: 'fake-jwt-token' 
     };
      this.http.post('http://localhost:4000/users', newUser).subscribe( {
        next: () => {
          this.success = 'User created successfully';
          this.error = '';
          setTimeout(() => this.router.navigate(['/login']), 2000);
        },
        error: () => {
          this.error= 'Error creating user';
          this.success= '';
        }
    });
  }
}
