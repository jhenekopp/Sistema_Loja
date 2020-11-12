import { map } from 'rxjs/operators';
import { ClienteService } from './../../services/cliente.service';
import { PessoaJuridica } from './../../models/pessoa-juridica.model';
import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from '../../models/pessoa-fisica.model';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-cliente-lista-container',
	templateUrl: './cliente-lista-container.component.html',
	styleUrls: ['./cliente-lista-container.component.css']
})
export class ClienteListaContainerComponent implements OnInit {
	clientes$: Observable<(PessoaFisica | PessoaJuridica)[]>

	constructor(private clienteService: ClienteService) { }

	ngOnInit(): void {
		this.carregarClientes();
	}

	private carregarClientes() {
		this.clientes$ = this.clienteService.buscarTodosSemPaginacao().pipe(
			map(resposta => resposta),
		);
	}
}
