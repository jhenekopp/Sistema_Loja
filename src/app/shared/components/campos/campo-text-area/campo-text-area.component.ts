import { LIMITE_CARACTERES_TEXT_AREA } from 'src/app/app.constants';

import { CampoValueAccessor, CUSTOM_CONTROL_CONTAINER } from './../campo-value-accessor/campo-value-accessor.component';
import { ChangeDetectionStrategy, Component, forwardRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-campo-text-area',
  templateUrl: './campo-text-area.component.html',
  styleUrls: ['./campo-text-area.component.css'],
  viewProviders: [CUSTOM_CONTROL_CONTAINER],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CampoTextAreaComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class CampoTextAreaComponent extends CampoValueAccessor {
  @Input() limiteCaracteres: number = LIMITE_CARACTERES_TEXT_AREA;
  @Input() autoResize = true;

  excedeuOLimiteMaximo(valor) {
      if (valor == null) {
          return false;
      }
      return valor > this.limiteCaracteres;
  }

  classeCssLimiteCaracteresExcedido(input: any) {
      const tamanhoCampo = input.value.length;
      return this.excedeuOLimiteMaximo(tamanhoCampo) ? 'text-danger font-weight-bold' : '';
  }

}
