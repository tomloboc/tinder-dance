import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private AuthServices: AuthService) { }

  ngOnInit() {
  }
  onSumbit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.email;
    this.AuthServices.signUp(email, password);
  }
}
