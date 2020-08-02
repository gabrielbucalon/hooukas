import { Component, OnInit, Input } from '@angular/core';
import { Card } from '@/shared/card/model/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cupom: boolean;
  @Input() card: Card;

  constructor() {
    this.cupom = false;
   }

  ngOnInit(): void {}

}
