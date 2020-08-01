import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card/model/Card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  card: Card;
  loading: boolean;

  loginType: any[] = [
    {
      type: 'google',
      logo: 'assets/logo/google.png',
    },
    {
      type: 'facebook',
      logo: 'assets/logo/face.png',
    },

    {
      type: 'email',
      logo: 'assets/logo/email.png',
    },
  ];

  constructor(private fb: FormBuilder, public authService: AuthService) {
    this.card = this.initializeCard();
    this.loading = false;
  }

  ngOnInit(): void {
    this.createForm();
  }

  submitForm() {
    debugger;
    this.form;
    try {
    } catch (error) {}
  }

  createForm() {
    this.form = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
    });
  }

  initializeCard(): Card {
    return {
      style: {
        backgroundColor: '#f0ad4e',
      },
      title: 'Login',
    };
  }
}
