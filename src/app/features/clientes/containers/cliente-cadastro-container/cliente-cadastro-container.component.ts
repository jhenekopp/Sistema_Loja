import { SweetAlertService } from './../../../../shared/services/sweet-alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../../services/cliente.service';
import { PessoaJuridica } from './../../models/pessoa-juridica.model';
import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from '../../models/pessoa-fisica.model';

@Component({
  selector: 'app-cliente-cadastro-container',
  templateUrl: './cliente-cadastro-container.component.html',
  styleUrls: ['./cliente-cadastro-container.component.css']
})
export class ClienteCadastroContainerComponent implements OnInit {
  cliente: PessoaFisica | PessoaJuridica;

	get editando(): Boolean {
		return Boolean(this.cliente && this.cliente.id)
	}

  constructor(private clienteService: ClienteService, 
              private router: Router, 
              private route: ActivatedRoute,
              private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    const idCliente = this.route.snapshot.params['idCliente'];
    if (idCliente) 
      this.cliente = this.route.snapshot.data.cliente;
  }

  aoSalvar(cliente: PessoaFisica | PessoaJuridica) {
    this.clienteService.salvar(cliente).subscribe(() => {
      this.sweetAlertService.sucesso('Cliente salvo com sucesso!');
      this.voltarParaListagem();
    });
  }

  deletarCliente(cliente) {
    this.sweetAlertService.deletarComConfirmacao(() => {
      this.deletar(cliente);
      this.sweetAlertService.sucessoAoDeletar();
    })
  }

  private deletar(cliente: PessoaFisica | PessoaJuridica) {
    this.clienteService.deletar(cliente.id).subscribe();
    this.voltarParaListagem();
  }

  private voltarParaListagem() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
