import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillcard',
  templateUrl: './skillcard.component.html',
  styleUrls: ['./skillcard.component.css']
})
export class SkillcardComponent implements OnInit {
  
  @Input() text : string = "JavaScript";
  @Input() percent : number = 0;
  @Input() color : string = "#1976d2";
  perc : number = 0;  

  incperc : number = 0;

  res : number = 0;

  incstop : any;
  
  get numberp(){
    return this.percent
  }
  
  get colorc(){
    return this.color
  }

  constructor() { }

  ngOnInit(): void {
    this.perc = 440 - (this.percent/100 * 440);
    this.res = 2000 / this.percent;

    this.incstop = setInterval(()=>{
      this.incperc++;
      if (this.incperc == this.percent){
        clearInterval(this.incstop)
      }
    },this.res);
  }

}
