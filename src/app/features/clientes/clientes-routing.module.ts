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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
