import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card/model/Card';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditComponent } from '../../products/create-edit/create-edit.component';
import { RecoverPasswordComponent } from '../dialogs/recover-password/recover-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  emailForm: FormGroup;
  card: Card;
  loading: boolean;
  isEmail = false;

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

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public dialog: MatDialog
  ) {
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
    } catch (error) { }
  }

  createForm() {
    this.form = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.required, Validators.email]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
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

  validate(type: string) {
    this.authService.loginPlatforms(type);
  }

  get f() {
    return this.form.controls;
  }

  forget() {
    const dialogRef = this.dialog.open(RecoverPasswordComponent, {
      width: '300px',
      height: 'auto',
    });
  }
}
