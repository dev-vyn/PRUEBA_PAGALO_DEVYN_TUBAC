import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  iniciarSesion() {
    if (this.auth.login(this.usuario, this.password)) {
      this.router.navigate(['peliculas']);
    } else {
      this.error = 'Usuario o contraseña incorrectos.';
    }
  }
}
