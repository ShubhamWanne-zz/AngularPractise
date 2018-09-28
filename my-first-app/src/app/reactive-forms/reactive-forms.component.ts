import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  userList: User[] = [];
  form : FormGroup;
  constructor() { }
  addUser(){
    this.userList.push(this.form.value);
  }
  ngOnInit() {
    this.form = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPass: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

}
