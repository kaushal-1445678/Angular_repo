import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard!</p>
    <button (click)="logout()">Logout</button>
    <button (click)="viewUser()">View User 101</button>
    <a routerLink="/">Home</a>
  `,
  styles: [`
    h1 { color: green; }
    button { padding: 8px 16px; margin: 10px 5px; }
  `]
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/']);
  }

  viewUser() {
    this.router.navigate(['/user/101']);
  }
}