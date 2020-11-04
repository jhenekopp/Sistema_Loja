import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CampoValueAccessor, CUSTOM_CONTROL_CONTAINER } from './../campo-value-accessor/campo-value-accessor.component';
import { CALENDARIO_BR } from './../../../../app.constants';
import { LocaleSettings } from 'primeng/calendar';
import { Component, Input, forwardRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-campo-calendario',
  templateUrl: './campo-calendario.component.html',
  styleUrls: ['./campo-calendario.component.css'],
  viewProviders: [CUSTOM_CONTROL_CONTAINER],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CampoCalendarioComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CampoCalendarioComponent extends CampoValueAccessor {
    @Input() configLocale: LocaleSettings = CALENDARIO_BR;
    @Input() formatoData = 'dd/mm/yy';
    @Input() formatoHora = '24';
    @Input() exibirBarraBotao = true;
    @Input() showIcon = true;
    @Input() exibirHorario = true;
    @Input() readonlyInput = false;
    @Input() disabled = false;
    @Input() inputStyle: {};
    @Input() dataType = "date";
}