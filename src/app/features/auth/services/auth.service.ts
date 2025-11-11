import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly key = 'userSession';

  constructor(private router: Router) {}

  login(usuario: string, password: string): boolean {
    if (usuario === 'admin' && password === '1234') {
      localStorage.setItem(this.key, JSON.stringify({ usuario }));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.key);
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.key) !== null;
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.key) || '{}');
  }
}
