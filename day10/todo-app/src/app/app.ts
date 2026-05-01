import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  newTodo='';
  constructor(private todoService:TodoService){}

  get todos(){
    return this.todoService.getTodo();
  }

  addTodo(){
    const value=this.newTodo.trim();
    if(!value){
      return;
    }
    this.todoService.addTodo(value);
    this.newTodo='';
  }
  
  
}






















































// newTodo = '';

//   constructor(private todoService: TodoService) {}

//   get todos(): string[] {
//     return this.todoService.getTodos();
//   }

//   addTodo() {
//     const value = this.newTodo.trim();
//     if (!value) {
//       return;
//     }

//     this.todoService.addTodo(value);
//     this.newTodo = '';
//   }