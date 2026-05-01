import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos:string[]=[];
  getTodo(){
    return this.todos;
  }
  addTodo(todo:string){
    this.todos.push(todo);
  }
   
  
}




















































// private todos: string[] = [];

//   getTodos(): string[] {
//     return this.todos;
//   }

//   addTodo(todo: string) {
//     this.todos.push(todo);
//   }
