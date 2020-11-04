import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormValidations } from '../FormValidation';

@Component({
  selector: 'app-mensagem-erro',
  templateUrl: './mensagem-erro.component.html',
  styleUrls: ['./mensagem-erro.component.css']
})
export class MensagemErroComponent  {
  @Input() labelCampo: string;
  @Input() control: AbstractControl;

  get errorMessage() {
      if (this.control != null) {
          for (const propertyName in this.control.errors) {
              if (this.control.errors.hasOwnProperty(propertyName) && this.control.dirty) {
                  return FormValidations.getErrorMsg(this.labelCampo, propertyName, this.control.errors[propertyName]);
              }
          }
      }
      return null;
  }

}
