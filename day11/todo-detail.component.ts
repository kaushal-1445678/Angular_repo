import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  template: `<h2>Todo Detail</h2><p>Todo ID: {{ todoId }}</p>`
})
export class TodoDetailComponent implements OnInit {
  todoId: string | null = null;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.todoId = this.route.snapshot.paramMap.get('id');
  }
}
