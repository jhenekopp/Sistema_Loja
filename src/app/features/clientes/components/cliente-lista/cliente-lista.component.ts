import { TelefoneTransformPipe } from './../../../../shared/pipes/telefone-transform';
import { CpfCnpjTransformPipe } from './../../../../shared/pipes/cpf-cnpj-transform';
import { PessoaJuridica } from './../../models/pessoa-juridica.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PessoaFisica } from '../../models/pessoa-fisica.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'], 
  encapsulation: ViewEncapsulation.None,
  providers: [ CpfCnpjTransformPipe, TelefoneTransformPipe ]
})
export class ClienteListaComponent implements OnInit {
  @Input() clientes: PessoaFisica | PessoaJuridica;
  colunas: any;

  constructor(private cpfCnpjTransform: CpfCnpjTransformPipe, private telefoneTransform: TelefoneTransformPipe) { }

  ngOnInit(): void {
    this.controiColunasDaTabela();
  }

  private controiColunasDaTabela() {
    this.colunas = [
      {field: 'nome', header: 'Cliente'},
      {field: 'cpfCnpj', header: 'CPF / CNPJ', type: this.cpfCnpjTransform},
      {field: 'telefonePrincipal', header: 'Telefone Contato', type: this.telefoneTransform},
      {field: 'estado', header: 'UF'},
      {field: 'cidade', header: 'Cidade'},
    ]
  }
}
