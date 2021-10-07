import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  // templateUrl: './form-buttons.component.html',
  // styleUrls: ['./form-buttons.component.scss']

  template: `
    <div>
      <input type="button" value="send" (click)="enviar()" />
      <input type="button" value="cancel" (click)="cancelar()">
    </div>
  `,
})
export class FormButtonsComponent {
  @Output() send: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  enviar() {
    this.send.emit();
  }

  cancelar(){
    this.cancel.emit();
  }
}
