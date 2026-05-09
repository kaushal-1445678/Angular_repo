import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <h1>Login Page</h1>
    <form (ngSubmit)="onLogin()">
      <input type="text" placeholder="Username" [(ngModel)]="username" name="username">
      <input type="password" placeholder="Password" [(ngModel)]="password" name="password">
      <button type="submit">Login</button>
    </form>
    <a routerLink="/">Back to Home</a>
  `,
  styles: [`
    form { display: flex; flex-direction: column; max-width: 300px; }
    input { margin: 5px 0; padding: 8px; }
    button { margin: 10px 0; padding: 8px; }
  `]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    // Simple login logic for demo
    if (this.username && this.password) {
      this.router.navigate(['/dashboard']);
    }
  }
}