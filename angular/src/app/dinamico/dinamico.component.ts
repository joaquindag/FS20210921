import { Component, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClientesFormularioComponent } from '../clientes-formulario/clientes-formulario.component';
import { ContactosComponent } from '../contactos/componente.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
menu=[
  {texto:"Contacto", icono:"",componente:ContactosComponent},
  {texto:"Clientes",icono:"",componente:ClientesFormularioComponent},
  {texto:"formulario",icono:"",componente:FormularioComponent},
  {texto:"inicio",icono:"", componente:HomeComponent },
  {texto:"demos",icono:"", componente:DemosComponent },
  {texto:"calculadora",icono:"", componente:CalculadoraComponent },

]

actual=this.menu[0].componente;

  constructor() { }

  seleccionar(indice:number):void {
    this.actual=this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}
