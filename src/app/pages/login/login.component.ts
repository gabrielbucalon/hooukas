import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {

    this.formLogin = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      type: [null]
    });
  }

  ngOnInit(): void {
  }

}
