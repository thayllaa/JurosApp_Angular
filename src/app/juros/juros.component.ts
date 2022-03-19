import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css']
})
export class JurosComponent implements OnInit {
  vp: number; 
  vf: number;
  j: number; 
  n: number;

  constructor() {
    this.vp = 100;
    this.vf = 100;
    this.j = 2.5;
    this.n = 3;
  }

  ngOnInit() {
  }

  getJuros() {
    return this.vp * (1 + this.j/100 * this.n);
  }

  getJuroComp() {
    return this.vf = this.vp + this.j(Math.pow(this.n));
  }

}