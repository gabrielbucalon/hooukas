import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '@/shared/card/model/Card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cupom: boolean;
  @Input() card: Card;
  @Output() cart = new EventEmitter<boolean>();

  constructor() {
    this.cupom = false;
  }

  addToCart(){
    this.cart.emit(true);
  }


  ngOnInit(): void {}

}
