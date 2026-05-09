import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Welcome to Home Page</h1>
    <p>This is the home page of our Angular app.</p>
    <a routerLink="/login">Go to Login</a> |
    <a routerLink="/dashboard">Go to Dashboard</a> |
    <a routerLink="/user/101">View User 101</a> |
    <a routerLink="/user/202">View User 202</a>
  `,
  styles: [`
    h1 { color: blue; }
  `]
})
export class HomeComponent {

}