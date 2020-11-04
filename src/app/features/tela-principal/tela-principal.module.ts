import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';

import { TelaPrincipalRoutingModule } from './tela-principal-routing.module';
import { TelaPrincipalContainerComponent } from './containers/tela-principal-container/tela-principal-container.component';


@NgModule({
  declarations: [
    TelaPrincipalContainerComponent
  ],
  imports: [
    SharedModule,
    TelaPrincipalRoutingModule
  ]
})
export class TelaPrincipalModule { }
