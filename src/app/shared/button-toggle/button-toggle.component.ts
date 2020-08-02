import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Output() quantity;
  constructor() { }

  ngOnInit(): void {
  }

  oneMoreSnack(){
    console.log('+1');
  }

  lessSnack(){
    console.log('-1');
  }
}
