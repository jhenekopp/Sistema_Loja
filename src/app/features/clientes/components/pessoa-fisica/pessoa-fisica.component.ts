import { CamposComunsFormulario } from './../shared/campos-comuns-formulario';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent extends CamposComunsFormulario {
  constructor() {
    super()
  }
}
