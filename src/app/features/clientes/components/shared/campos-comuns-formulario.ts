import { Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

export abstract class CamposComunsFormulario {
    @Input() formulario: FormGroup;

    constructor() {}

    obterControleDoCampo(campo: string): FormControl {
        return this.formulario.controls[campo] as FormControl;
    }
}