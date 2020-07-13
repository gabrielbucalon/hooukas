import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { Card } from 'src/app/shared/card/model/Card';
import { FormGroup, Validators, FormBuilder, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  card: Card;
  form: FormGroup;
  textField: string ;

  constructor(private fb: FormBuilder) {
    this.card = this.initializeCard();
  }

  ngOnInit(): void {
    this.createForm();
  }

  initializeCard(): Card {
    return {
      style: {
        backgroundColor: "#f0ad4e",
      },
      title: 'Registra-se'
    }
  }


  getFields(text: string){
    return this.form.get(text);
  }


  submitForm(){
    debugger;
    this.form;
    try {

    } catch (error) {

    }
  }

  createForm(){
    this.form = this.fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      zipcode: ["" ,Validators.compose([Validators.required, Validators.minLength(8)])],
      address: ["", Validators.required],
      neighborhood: ["", Validators.required],
      city: ["", Validators.required],
      number: ["", Validators.required],
      complement: ["", Validators.required]
    });
  }


  get f(){
    return this.form.controls;
  }

}
