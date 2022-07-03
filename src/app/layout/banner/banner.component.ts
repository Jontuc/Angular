import { Component, OnInit } from '@angular/core';
import { PHRASES } from './mock-phrases';
import { Phrases } from './phrases';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  phrases: Phrases[] = PHRASES;

  texto: string = `" ${this.phrases[0].text} "...`

  autor: string = this.phrases[0].author

  i: number = 0

  automatico: any = setInterval(() => { 
    if (this.i < this.phrases.length - 1) {
      this.i++
    } else {
      this.i = 0
    }
    this.texto = `" ${this.phrases[this.i].text} "...`
    this.autor = this.phrases[this.i].author
  }, 10000)

  constructor() { }

  ngOnInit(): void {
    
  }

}
