import { camposPessoaJuridica } from './campos-pessoa-juridica';
import { camposPessoaFisica } from './campos-pesso-fisica';
import { PessoaFisica } from './../../models/pessoa-fisica.model';
import { PessoaJuridica } from './../../models/pessoa-juridica.model';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation,  Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { NgxViacepService } from '@brunoc/ngx-viacep';

@Component({
	selector: 'app-cliente-cadastro',
	templateUrl: './cliente-cadastro.component.html',
	styleUrls: ['./cliente-cadastro.component.css'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClienteCadastroComponent implements OnInit {
	formulario: FormGroup
	checked: boolean = true;

	@Input() cliente: PessoaFisica | PessoaJuridica;

	get editando(): Boolean {
		return Boolean(this.cliente && this.cliente.id)
	}

	@Output() salvar = new EventEmitter();
	@Output() deletar = new EventEmitter();

	constructor(protected formBuilder: FormBuilder,
				private viacep: NgxViacepService) {
	}
	
	ngOnInit() {
		this.configuraFormularioPessoaFisica();
        if (this.cliente) {
			this.verificaTipoDePessoaCadastrada(this.cliente.tipoPessoa);
		} 
	}

	alteraTipoDePessoa(valor: boolean) {
		this.checked = valor;
		this.checked ? this.configuraFormularioPessoaFisica() : this.configuraFormularioPessoaJuridica();
	}

	onSubmit() {
		this.salvar.emit(this.formulario.value);
	}

	aoDeletar() {
		this.deletar.emit(this.formulario.value);
	}

	obterControleDoCampo(campo: string): FormControl {
		return this.formulario.controls[campo] as FormControl;
	}

	buscaEnderecoPeloCep() {
		let cep = this.formulario.get('cep').value
		this.viacep.buscarPorCep(cep).then(endereco => {
			this.formulario.patchValue({
				endereco: endereco.logradouro,
				bairro: endereco.bairro,
				complemento: endereco.complemento,
				estado: endereco.uf,
				cidade: endereco.localidade
			})
		})
	}

	private configuraFormularioPessoaFisica() {
		this.formulario = camposPessoaFisica(this.formBuilder);
	}

	private configuraFormularioPessoaJuridica() {
		this.formulario = camposPessoaJuridica(this.formBuilder);
	}

	private verificaTipoDePessoaCadastrada(tipoDePessoa: string) {
		if (tipoDePessoa === 'FISICA') {
			this.checked = true;
			this.configuraFormularioPessoaFisica();
		} else {
			this.checked = false;
			this.configuraFormularioPessoaJuridica();
		}
		this.formulario.patchValue(this.cliente)
	}
}
