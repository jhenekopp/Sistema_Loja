import { TelefoneTransformPipe } from './pipes/telefone-transform';
import { CpfCnpjTransformPipe } from './pipes/cpf-cnpj-transform';
import { CampoInputMaskComponent } from './components/campos/campo-input-mask/campo-input-mask.component';
import { SimOuNaoPipe } from './pipes/sim-ou-nao';
import { DateFormatDiaMesAno } from './pipes/dia-mes-ano';
import { FormDebugComponent } from './components/form/form-debug/form-debug.component';
import { CampoDropdownComponent } from './components/campos/campo-dropdown/campo-dropdown.component';
import { CampoTextAreaComponent } from './components/campos/campo-text-area/campo-text-area.component';
import { CampoWrapperComponent } from './components/campos/campo-wrapper/campo-wrapper.component';
import { CampoInputComponent } from './components/campos/campo-input/campo-input.component';
import { SharedPrimengModule } from './shared-primeng.module';
import { NgModule } from '@angular/core';
import { SharedLibsModule } from './shared-libs.module';
import { ContainerComponent } from './components/container/container.component';
import { CampoCalendarioComponent } from './components/campos/campo-calendario/campo-calendario.component';
import { TabelaComponent } from './components/tabela/tabela.component';
import { MensagemErroComponent } from './components/form/mensagem-erro/mensagem-erro.component';

@NgModule({
  declarations: [
    CampoInputComponent,
    CampoWrapperComponent,
    CampoTextAreaComponent,
    CampoDropdownComponent,
    FormDebugComponent,
    ContainerComponent,
    CampoCalendarioComponent,
    TabelaComponent,
    MensagemErroComponent,
    DateFormatDiaMesAno,
    SimOuNaoPipe,
    CampoInputMaskComponent,
    CpfCnpjTransformPipe,
    TelefoneTransformPipe,
  ],
  imports: [
    SharedLibsModule,
    SharedPrimengModule
  ],
  exports: [
    SharedLibsModule,
    SharedPrimengModule,
    CampoInputComponent,
    CampoWrapperComponent,
    CampoTextAreaComponent,
    CampoDropdownComponent,
    FormDebugComponent,
    ContainerComponent,
    CampoCalendarioComponent,
    TabelaComponent,
    MensagemErroComponent,
    DateFormatDiaMesAno,
    SimOuNaoPipe,
    CampoInputMaskComponent,
    CpfCnpjTransformPipe,
    TelefoneTransformPipe,
  ]
})
export class SharedCommonModule { }
