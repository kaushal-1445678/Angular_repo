import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, NgFor, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:any='Angualt first project';
  name:String='';

  age:Number=22;
  isLoggedIn:boolean=false;
  isDisabled:boolean=true;

  user:any=['kaushal','satyarth','satyam'];

  onClick(){
    alert("Hello ");
  }

  showValue(event:any){
    console.log("this is the value ",event.target.value);
  }
}
