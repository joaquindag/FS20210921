import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-error-messages',
  templateUrl: './show-error-messages.component.html',
  styleUrls: ['./show-error-messages.component.scss']
})
export class ShowErrorMessagesComponent implements OnChanges  {
  @Input() errors: any;

  mensaje = '';
  hidden = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.errors) {
      this.hidden = true;
      return;
    }
    let msg = '';
    for (let err in this.errors) {
      switch (err) {
        case 'required':
          msg += 'Es obligatorio. ';
          break;
        case 'minlength':
          msg += `Como mínimo debe tener ${this.errors[err].requiredLength} caracteres. `;
          break;
        case 'maxlength':
          msg += `Como máximo debe tener ${this.errors[err].requiredLength} caracteres. `;
          break;
        case 'pattern':
        case 'email':
          msg += 'El formato no es correcto. ';
          break;
        case 'min':
          msg += `El valor debe ser mayor o igual a ${this.errors[err].min}. `;
          break;
        case 'max':
          msg += `El valor debe ser inferior o igual a ${this.errors[err].max}. `;
          break;
        default:
          if (typeof this.errors[err] === 'string')
            msg += `${this.errors[err]}. `;
          else if (typeof this.errors[err]?.message === 'string')
            msg += `${this.errors[err].message}. `;
          break;
      }
    }
    this.mensaje = msg.trim();
    this.hidden = this.mensaje === '';
  }

}
