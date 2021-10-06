import { Component, OnDestroy, OnInit } from '@angular/core';
import { Unsubscribable } from 'rxjs';
import { LoggerService } from 'src/lib/my-core';
import { NotificationService, NotificationType } from '../common-services';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})

export class DemosComponent implements OnInit, OnDestroy {

private suscriptor: Unsubscribable | undefined;

private nombre:string="mundo";

listado=[
  {id:1,nombre:"Madrid"},
  {id:2,nombre:"Málaga"},
  {id:1,nombre:"Sevilla"},
  {id:1,nombre:"Ciudad Real"},
]
idProvincia=1;

resultado:string | null=null;
visible=true;
estetica={ importante: true, error: false, urgente: true };
fontSize=14;

  constructor(private log:LoggerService, public vm:NotificationService) {

  }
  ngOnDestroy(): void {
    if(this.suscriptor){
      this.suscriptor.unsubscribe();
    }
  }

  public get Nombre():string{
    return this.nombre;
  }
  public set Nombre(value:string){
    if(this.nombre===value) return;
    this.nombre=value;
  }

  public saluda():void{
    this.resultado=`Hola ${this.nombre}`;
  }

  public despide():void{
    this.resultado=`Adios ${this.nombre}`;
  }

  public di(algo:string):void{
    this.resultado=`Dice ${algo}`;
  }

  cambia():void{
    this.visible=!this.visible;
    this.estetica.importante=!this.estetica.importante;
    this.estetica.error=!this.estetica.error;
  }

  calcula(a:number,b:number):number{
    return a+b;
  }

  add(provincia:string):void{
    const id=this.listado.length===0 ? 1 : this.listado[this.listado.length-1].id+1;
    this.listado.push({id,nombre:provincia});
    this.idProvincia=id;
  }

  ngOnInit(): void {
    this.suscriptor=this.vm.Notification.subscribe(n=>{
      if(n.Type !== NotificationType.error){
        return;
      }
      window.alert(`Suscripcion: ${n.Message}`);
      this.vm.remove(this.vm.Listado.length-1);
    })
  }

}
