import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card/model/Card';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Address } from '../model/User';
import { MessageComponent } from 'src/app/shared/message/message.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends MessageComponent {

  card: Card;
  form: FormGroup;
  textField: string;
  loading: boolean;



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

  constructor(private fb: FormBuilder, private authService: AuthService, _snackBar: MatSnackBar) {
    super(_snackBar);
    this.card = this.initializeCard();
    this.loading = false;
  }


  validateZipCode(zipcode: string) {
    const zipCode = zipcode;

    this.authService.getAddress(zipCode).subscribe(async (address: Address) => {
      debugger;
      if (!address.erro && address) {
        this.f.address.patchValue(address.logradouro);
        this.f.neighborhood.patchValue(address.bairro);
        this.f.city.patchValue(address.localidade);
        this.f.uf.patchValue(address.uf);
        await  this.openSnackBar("Ao colocar seu CEP, encontramos seu bairro, cidade etc. \n Apenas coloque informações que faltam no endereço :)", "OK", 10000);
      } else {
        // debugger;
        this.openSnackBar("Não encontramos o CEP. Tente novamente!", "OK", 2000);
      }
    });
  }

  initializeCard(): Card {
    return {
      style: {
        backgroundColor: "#f0ad4e",
      },
      title: 'Registra-se'
    }
  }


  getFields(text: string) {
    return this.form.get(text);
  }


  submitForm() {
    debugger;
    this.form;
    try {

    } catch (error) {

    }
  }

  createForm() {
    this.form = this.fb.group({
      name: ["", Validators.compose([Validators.required, Validators.minLength(12)])],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      zipcode: ["", Validators.compose([Validators.required, Validators.minLength(8)])],
      address: ["", Validators.required],
      neighborhood: ["", Validators.required],
      city: ["", Validators.required],
      number: ["", Validators.required],
      complement: ["", Validators.required],
      uf: [""]
    });
  }


  get f() {
    return this.form.controls;
  }

  backPage() {
    this.openSnackBar("bom dia corno ", "BLZ", 5000);
  }

}
