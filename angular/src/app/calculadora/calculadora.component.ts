import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  resultado:string="0";

  constructor() { }

  add(key:string){
    if(this.resultado!='0'){
      this.resultado=this.resultado+key;
    } else{
      this.resultado=key;
    }
  }

  calcular(){
    this.resultado=eval(this.resultado);
  }

  borrar(){
    this.resultado='0';
  }

  borrarUltimo(){
    this.resultado=this.resultado.substr(0,this.resultado.length-1);
  }

  cambio(){
    this.resultado=(parseFloat(this.resultado)*-1).toString();
  }

  ngOnInit(): void {
  }

}
