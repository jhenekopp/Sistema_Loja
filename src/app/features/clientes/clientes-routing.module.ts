import { ClienteCadastroContainerComponent } from './containers/cliente-cadastro-container/cliente-cadastro-container.component';
import { ClienteListaContainerComponent } from './containers/cliente-lista-container/cliente-lista-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ClienteListaContainerComponent,
  },
  {
    path: 'novo',
    component: ClienteCadastroContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
