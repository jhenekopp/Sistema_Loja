import { Component, OnInit } from '@angular/core';
import { CamposComunsFormulario } from '../shared/campos-comuns-formulario';

@Component({
  selector: 'app-pessoa-juridica',
  templateUrl: './pessoa-juridica.component.html',
  styleUrls: ['./pessoa-juridica.component.css']
})
export class PessoaJuridicaComponent extends CamposComunsFormulario {
  constructor() {
    super()
  }
}
