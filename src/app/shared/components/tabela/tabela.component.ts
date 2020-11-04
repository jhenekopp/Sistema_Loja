import { ResolveFieldDataService } from './../../services/utils/resolve-field-data-service';

import { ChangeDetectionStrategy, Component,  EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-tabela',
	templateUrl: './tabela.component.html',
	styleUrls: ['./tabela.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class TabelaComponent {
	@Input() titulo: string;
	@Input() dataKey: any;
	@Input() value: string;
	@Input() filtroGlobal: any[];
	@Input() colunas: any[];
	@Input() navegacaoDetalhe = true;
	@Input() prefixoDetalhe: string;

	@Output() entidadeSelecionada: EventEmitter<any> = new EventEmitter(false);

	constructor(public resolveField: ResolveFieldDataService,
				private router: Router,
				private route: ActivatedRoute) {}

	navegaOuEmit(objeto) {
		if (this.navegacaoDetalhe) {
			this.router.navigate(this.rotaDetalhe(objeto), {relativeTo: this.route});
		} else {
			this.entidadeSelecionada.emit(objeto);
		}
	}

	rotaDetalhe(objeto) {
		if (this.prefixoDetalhe == null) {
			return [objeto.id];
		}
		return [this.prefixoDetalhe, objeto.id];
	}
}