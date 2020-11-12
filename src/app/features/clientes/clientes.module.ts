import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteListaContainerComponent } from './containers/cliente-lista-container/cliente-lista-container.component';
import { ClienteCadastroContainerComponent } from './containers/cliente-cadastro-container/cliente-cadastro-container.component';
import { ClienteCadastroComponent } from './components/cliente-cadastro/cliente-cadastro.component';
import { ClienteListaComponent } from './components/cliente-lista/cliente-lista.component';
import { PessoaFisicaComponent } from './components/pessoa-fisica/pessoa-fisica.component';
import { PessoaJuridicaComponent } from './components/pessoa-juridica/pessoa-juridica.component';


@NgModule({
  declarations: [
    ClienteListaContainerComponent,
    ClienteCadastroContainerComponent,
    ClienteCadastroComponent,
    ClienteListaComponent,
    PessoaFisicaComponent,
    PessoaJuridicaComponent
  ],
  imports: [
    SharedModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
