import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  numbers:number[]=[1,2,3]


  addNumber(){
    this.numbers.push(this.numbers.length+1)
    console.log("Yeni sayı eklendi", this.numbers);
  }


}

