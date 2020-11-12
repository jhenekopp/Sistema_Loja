import { ClienteService } from '../services/cliente.service';
import { ResolverEntidadeGenerico } from '../../../shared/services/resolver-entidade-generico';
import { PessoaJuridica } from '../models/pessoa-juridica.model';
import { Injectable } from '@angular/core';
import { PessoaFisica } from '../models/pessoa-fisica.model';

@Injectable({
	providedIn: 'root'
})
export class ClienteResolver extends ResolverEntidadeGenerico<PessoaFisica | PessoaJuridica> {
	constructor(protected clienteService: ClienteService) {
		super(clienteService, 'idCliente');
	 }
}
