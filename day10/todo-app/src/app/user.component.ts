import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <h1>User Details</h1>
    <p>User ID: {{ userId }}</p>
    <a routerLink="/">Back to Home</a>
  `,
  styles: [`
    h1 { color: purple; }
  `]
})
export class UserComponent implements OnInit {
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}