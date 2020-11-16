import { SelectItem } from 'primeng/api';
import { Genero } from './../../models/genero';
import { CamposComunsFormulario } from './../shared/campos-comuns-formulario';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-fisica',
  templateUrl: './pessoa-fisica.component.html',
  styleUrls: ['./pessoa-fisica.component.css']
})
export class PessoaFisicaComponent extends CamposComunsFormulario {
  @Input() genero: SelectItem[];
  
  constructor() {
    super()
  }
}
