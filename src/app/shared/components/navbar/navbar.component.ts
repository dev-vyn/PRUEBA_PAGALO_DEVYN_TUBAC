import { AuthService } from '../../../../app/features/auth/services/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, Home, Flame, LogOut, Menu } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuAbierto = false;

  constructor(private router: Router, private authService: AuthService) {}

  irInicio() {
    this.router.navigate(['/']);
  }

  irPopulares() {
    this.router.navigate(['/populares']);
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }
}
