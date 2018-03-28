import { Component } from '@angular/core';


@Component({
  templateUrl: 'pos.component.html'
})
export class PosComponent {

  manualBtn = false;
  constructor( ) { }


  onPress() {
    this.manualBtn = true;
    console.log(this.manualBtn);
  }
}
