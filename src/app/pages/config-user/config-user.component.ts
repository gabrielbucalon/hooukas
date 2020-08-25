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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.card = this.mountCard();
  }

  mountCard(): Card {
    return {
      title: `Configurações de ${this.user.name} =)`,
      style: { backgroundColor: "#FFFFFF", margin: "1em" },
    }
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

}
