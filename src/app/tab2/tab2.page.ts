import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  
  constructor() {}
  betul : boolean
  inp : number
  vari = Math.floor(Math.random() * 10)
  tebak(){
    if(this.inp == this.vari){
      this.betul = true
    }
    else{
      this.betul = false
    }
  }
}
