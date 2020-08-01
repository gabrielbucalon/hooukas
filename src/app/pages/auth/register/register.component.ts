import { Component, OnInit } from '@angular/core';
import { Card } from '@/shared/card/model/Card';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '@/pages/auth/services/auth.service';
import { Address, User } from '@/pages/auth/model/User';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends MessageComponent {
  card: Card;
  form: FormGroup;
  textField: string;
  loading: boolean;
  user: User;


  ngOnInit() {
    this.createForm();
    this.f.zipcode.valueChanges.subscribe(async (zipcode: string) => {
      if (zipcode.length >= 8) {
        this.loading = true;
        this.validateZipCode(zipcode);
        this.loading = false;
      }
    });
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    _snackBar: MatSnackBar) {
    super(_snackBar);
    this.card = this.initializeCard();
    this.loading = false;
  }

  validateZipCode(zipcode: string) {
    const zipCode = zipcode;

    this.authService.getAddress(zipCode).subscribe(async (address: Address) => {
      if (!address.erro && address) {
        this.f.address.patchValue(address.logradouro);
        this.f.neighborhood.patchValue(address.bairro);
        this.f.city.patchValue(address.localidade);
        this.f.uf.patchValue(address.uf);
        await this.openSnackBar("Ao colocar seu CEP, encontramos seu bairro, cidade etc. \n Apenas coloque informações que faltam no endereço :)", "OK", 10000);
      } else {
        this.openSnackBar("Não encontramos o CEP. Tente novamente!", "OK", 2000);
      }
    });
  }

  initializeCard(): Card {
    return {
      style: {
        backgroundColor: '#f0ad4e',
      },
      title: 'Registra-se',
    };
  }

  getFields(text: string) {
    return this.form.get(text);
  }

  submitForm() {

    // const result = this.afAuth.auth.signInWithEmailAndPassword(this.form.get('email').value, this.form.get('password').value);
    // if (result) {
    //   this.openSnackBar("bom dia corno ", "BLZ", 5000);
    //   // this.navCtrl.setRoot('HomePage');
    // }

    // try {
    //   this.user = {
    //     name: this.f.name.value,
    //     address: {
    //       bairro: this.f.neighborhood.value,
    //       cep: this.f.zipcode.value,
    //       complemento: this.f.complement.value,
    //       localidade: this.f.city.value,
    //       logradouro: this.f.address.value,
    //       uf: this.f.uf.value
    //     },
    //     email: this.f.email.value,
    //     uid: ""
    //   };
    //   this.authService.signupUser(this.user, this.f.email.value, this.f.password.value).then(async () => {
    //     this.loading = true;
    //     this.openSnackBar(`Usuário criado com sucesso \nSeja bem-vindo(a) :D`, "OK", 5000);
    //     this.loading = false;
    //   });
    // } catch (e) {
    //   console.error(e);
    // }

  }

  createForm() {
    this.form = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(12)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      zipcode: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      address: ['', Validators.required],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      number: ['', Validators.required],
      complement: ['', Validators.required],
      uf: [''],
    });
  }

  get f() {
    return this.form.controls;
  }

  backPage() {
    this.openSnackBar('bom dia corno ', 'BLZ', 5000);
  }
}
