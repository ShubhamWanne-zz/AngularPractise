import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ramayana';
  greeting:string = "Hello, World";
  imgURL:string = "../../assets/logo.png";
  valueToggle:boolean = true;
  helloButtonValue:string = "Login Developer";
  sayHello(){
    return this.greeting;
  }
  changeValue(){
    if(this.valueToggle){
      this.greeting = "Hello, Developer";
      this.helloButtonValue = "Login World";
    }
    else{
      this.greeting = "Hello, World";
      this.helloButtonValue = "Login Developer";
    }
    this.valueToggle = !this.valueToggle;
  }
}
