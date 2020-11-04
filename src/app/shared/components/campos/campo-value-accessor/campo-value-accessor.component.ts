import { FormGroupDirective, ControlValueAccessor, ControlContainer, AbstractControl, FormControl } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';

export function CUSTOM_CONTROL_CONTAINER_FACTORY(formGroup: FormGroupDirective){
  return (formGroup.form == null) ? null : formGroup;
}

export const CUSTOM_CONTROL_CONTAINER: any = {
  provide: ControlContainer,
  useFactory: CUSTOM_CONTROL_CONTAINER_FACTORY,
  deps: [FormGroupDirective],
};

export class CampoValueAccessor implements ControlValueAccessor {
  classeDefault = 'ui-g-12 d-flex mb-2 w-100';

  @Input() label: string;
  @Input() id: string;
  @Input() name: string;
  @Input() classesCss: string;
  @Input() control: AbstractControl = new FormControl();
  @Input() formControlName: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() labelCampoErro: string;

  @Output() aoMudar = new EventEmitter(false);

  _valorDoCampo: any;
  _valorAntigoDoCampo: any;

  get valorDoCampo() {
    return this._valorDoCampo;
  }

  set valorDoCampo(valor: any) {
    if (valor !== this._valorDoCampo) {
      if (!this._valorAntigoDoCampo) {
        this._valorAntigoDoCampo = valor;
      }
      this._valorDoCampo = valor;
      this.registerOnChange(this._valorDoCampo);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};
  
  writeValue(valor: any): void {
    this.valorDoCampo = valor;
  }

  registerOnChange(fn: any): void {
    if ('function' === typeof fn) {
      this.onChangeCb = fn;
    } else {
      this.onChangeCb = fn;
      this.aoMudar.emit(fn);
    }
  }

  registerOnTouched(fn: any): void {
    if ('function' === typeof fn) {
      this.onTouchedCb = fn;
    } else {
      this.onTouchedCb(fn);
    }
  }
}
