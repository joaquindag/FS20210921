import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  // templateUrl: './form-buttons.component.html',
  // styleUrls: ['./form-buttons.component.scss']

  template: `
    <div>
      <input type="button" value="send" (click)="enviar()" [disabled]="deshabilitado">
      <input type="button" value="cancel" (click)="cancelar()">
    </div>
  `,
})
export class FormButtonsComponent {
  @Output() send: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  @Input() deshabilitado:boolean | null=true;

  enviar() {
    this.send.emit();
  }

  cancelar(){
    this.cancel.emit();
  }
}
