import { Component, OnInit } from '@angular/core';
import { User } from '../auth/model/User';
import { Card } from '@/shared/card/model/Card';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.scss']
})
export class ConfigUserComponent implements OnInit {

  user: User;
  card: Card;

  constructor() { }

  ngOnInit(): void {
    // debugger;
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.card = this.mountCard();
  }

  mountCard(): Card {
    return {
      title: `Configurações de ${this.user.name} =)`,
      style: { backgroundColor: "#FFFFFF", margin: "1em" },
    }
  }

}
