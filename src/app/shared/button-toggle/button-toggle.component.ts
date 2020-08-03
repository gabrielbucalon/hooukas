import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Output() quantity = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void { }

  oneMoreSnack() {
    this.quantity.emit('+1');
  }

  lessSnack() {
    this.quantity.emit('-1');
  }
}
