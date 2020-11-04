import { TelaPrincipalContainerComponent } from './containers/tela-principal-container/tela-principal-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
  {
    path: '',
    component: TelaPrincipalContainerComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TelaPrincipalRoutingModule { }
