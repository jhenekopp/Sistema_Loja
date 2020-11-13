import { ClienteCadastroContainerComponent } from './containers/cliente-cadastro-container/cliente-cadastro-container.component';
import { ClienteListaContainerComponent } from './containers/cliente-lista-container/cliente-lista-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteResolver } from './resolvers/cliente.resolver';

const routes: Routes = [
  {
    path: '',
    component: ClienteListaContainerComponent,
  },
  {
    path: 'novo',
    component: ClienteCadastroContainerComponent
  },
  {
    path: ':idCliente',
    component: ClienteCadastroContainerComponent,
    resolve: {
      cliente: ClienteResolver
    }
  }

  /**
   * www.izzymakers.com.br/clientes
   * www.izzymakers.com.br/clientes/novo
   * www.izzymakers.com.br/clientes/1 [..2, ...3, zas]
  */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
