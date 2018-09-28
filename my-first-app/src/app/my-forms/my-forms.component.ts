import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-my-forms',
  templateUrl: './my-forms.component.html',
  styleUrls: ['./my-forms.component.css']
})
export class MyFormsComponent implements OnInit {

  userList: User[]=[];
  isUserSelected:boolean = false;
  selectedUser: User;
  constructor() {
    console.log("something");
  }

  addUser(form: NgForm){
    var user: User;
    user = form.value;
    this.userList.push(user);
  }
  selectUser(user: User){
    this.isUserSelected = true;
    this.selectedUser = user;
  }
  ngOnInit() {
  }

}
