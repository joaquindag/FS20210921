import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';

export interface Persona {
  customer_id: number | null;
  store_id: number | null;
  first_name: string;
  last_name: string;
  email: string | null;
  adress: string | null;
  active: boolean;
  date: Date |null;
  update: Date | null;
}

@Injectable({providedIn: 'root'})



export class PersonasViewModel {
  Listado: Array<Persona> = [
    { customer_id: 1, store_id: 1,first_name: 'Pepito', last_name: 'Grillo', email: 'pepito@grillo',
     adress: null, active: true, date:null, update:null }
  ]
  Elemento: Persona = { customer_id: null, store_id: null,first_name: '', last_name: '', email: '',
  adress: null, active: true, date:null, update:null  };
  IsAdd = true;

  constructor(private notify: NotificationService) {

  }

  public list() {

  }

  public add() {
    this.Elemento = { customer_id: null, store_id: null,first_name: '', last_name: '', email: '',
    adress: null, active: true, date:null, update:null  }
    this.IsAdd = true;
  }

  public edit() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public view() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public delete() {

    if(!window.confirm('¿Seguro?')) return;
    this.notify.add('Borrado');
  }

  public cancel() {

  }

  public send() {
    this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ') + JSON.stringify(this.Elemento), NotificationType.info);
  }
}

@Component({
  selector: 'app-clientes-formulario',
  templateUrl: './clientes-formulario.component.html',
  styleUrls: ['./clientes-formulario.component.scss']
})
export class ClientesFormularioComponent implements OnInit {

  errorObligatorio:string="Es obligatorio."
  errorCorreo:string="No es un correo electrónico valido."
  errorMinMax:string="Debe tener entre 2 y 10 letras."

  constructor(public vm: PersonasViewModel) { }

  ngOnInit(): void {
  }

}
