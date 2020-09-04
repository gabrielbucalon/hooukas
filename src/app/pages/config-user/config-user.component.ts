import { Component, OnInit } from '@angular/core';
import { User } from '../auth/model/User';
import { Card } from '@/shared/card/model/Card';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.scss']
})
export class ConfigUserComponent implements OnInit {

  user: User;
  card: Card;
  form: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.card = this.mountCard();
    this.createForm();
  }

  mountCard(): Card {
    return {
      title: `Configurações de ${this.user.name} =)`,
      style: { backgroundColor: "#FFFFFF", margin: "1em" },
    }
  }

  createForm() {
    // debugger;
    console.log(this.user.name ? this.user.name : '');
    this.form = this.fb.group({
      name: [
        this.user.name ? this.user.name : '',
        Validators.compose([Validators.required, Validators.minLength(12)]),
      ],
      email: [
        this.user.email ? this.user.email : '',
        Validators.compose([Validators.required, Validators.email])],
      zipcode: [
        this.user.address.cep ? this.user.address.cep : '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      address: [
        this.user.address.logradouro ? this.user.address.logradouro : '',
        Validators.required],
      neighborhood: [
        this.user.address.bairro ? this.user.address.bairro : '',
        Validators.required],
      city: [
        this.user.address.localidade ? this.user.address.localidade : '',
        Validators.required],
      number: ['', Validators.required],
      uf: [
        this.user.address.uf ?
          this.user.address.uf : ''],
      street: [this.user.address.logradouro ? this.user.address.logradouro : '']
    });
  }


  get f() {
    return this.form.controls;
  }

  submitFormConfig() {
    console.log("form");
  }

}
