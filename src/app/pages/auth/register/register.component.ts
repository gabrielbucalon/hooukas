import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/card/model/Card';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  card: Card;
  constructor() {
    this.card = {
      style: {
        backgroundColor: "#f0ad4e"
      },
      title: 'Registra-se'
    }
  }

  ngOnInit(): void {}

}
