import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dcheroes',
  templateUrl: './dcheroes.component.html',
  styleUrls: ['./dcheroes.component.css']
})
export class DCHEROESComponent implements OnInit {
  dcHeroes: string[] = ['Batman', 'SuperMan', 'Wonder women', 'Flash']
  selectedHero:string="";
  selectedHeroRealName:string="";
  selectedHeroPlace:string="";
  selectedHeroImg:string="";
  selectedHeroStyle:string="";
  dcHeroPlace:string[] = ['Gotham', 'Krypton', 'Themyscira', 'USA'];
  dcHeroRealName:string[] = ['Bruce Wayne', 'Clarke Kent', 'Princess Diana' ,'Barry Allen'];
  dcHeroImg:string[] = ['batman.jpg', 'superman.jpg', 'wonderwomen.jpg', 'flash.jpg'];
  dcHeroStyle:string[] =['batman', 'superman', 'wonderwomen', 'flash'];

  selectHero(hero:string){
    this.selectedHero = hero;
    this.selectedHeroImg = "../../../assets/"+this.dcHeroImg[this.dcHeroes.indexOf(hero)];
    this.selectedHeroRealName = this.dcHeroRealName[this.dcHeroes.indexOf(hero)];
    this.selectedHeroPlace = this.dcHeroPlace[this.dcHeroes.indexOf(hero)];
    this.selectedHeroStyle = this.dcHeroStyle[this.dcHeroes.indexOf(hero)];
  }
  isHeroSelected(){
    return this.selectedHero != "";
  }

  constructor() { }

  ngOnInit() {
  }

}
