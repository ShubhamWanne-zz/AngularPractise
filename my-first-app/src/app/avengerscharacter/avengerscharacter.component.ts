import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avengerscharacter',
  templateUrl: './avengerscharacter.component.html',
  styleUrls: ['./avengerscharacter.component.css']
})
export class AVENGERSCHARACTERComponent implements OnInit {
  avengersName: string[];
  avengersFirstName: string[] = ['Iron Man','Black Widow', 'Captain America', 'Spider Man'];
  avengersLastName: string[] = ['Tony Stark', 'Natasha', 'Steve Rogers', 'Peter Parker'];
  i=0;
  startStopIndex: any;
  startStopFlag:boolean = true;
  heroName:string = "Hero Name";

  @Input() img:string;

  startChange(){
    this.startStopFlag = false;
    this.startStopIndex = setInterval(()=>{
      if(this.i%2==0)
        this.avengersName = this.avengersFirstName;
      else
        this.avengersName = this.avengersLastName;
      this.i++;
    },2000)

  }
  stopChange(){
    this.startStopFlag = true;
    clearInterval(this.startStopIndex);
  }
  constructor() {
  }

  ngOnInit() {
    this.avengersName = this.avengersLastName;
  }

}
