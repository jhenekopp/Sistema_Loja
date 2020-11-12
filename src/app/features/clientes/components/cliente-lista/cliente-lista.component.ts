import { PessoaJuridica } from './../../models/pessoa-juridica.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { PessoaFisica } from '../../models/pessoa-fisica.model';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class ClienteListaComponent implements OnInit {
  @Input() clientes: PessoaFisica | PessoaJuridica;
  colunas: any;

  constructor() { }

  ngOnInit(): void {
    this.controiColunasDaTabela();
  }

  private controiColunasDaTabela() {
    this.colunas = [
      {field: 'nome', header: 'Cliente'},
      {field: 'cpfCnpj', header: 'CPF / CNPJ'},
      {field: 'telefonePrincipal', header: 'Telefone Contato'},
      {field: 'estado', header: 'UF'},
      {field: 'cidade', header: 'Cidade'},
    ]
  }
}
