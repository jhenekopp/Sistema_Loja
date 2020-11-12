import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CampoValueAccessor, CUSTOM_CONTROL_CONTAINER } from './../campo-value-accessor/campo-value-accessor.component';
import { Component, OnInit, forwardRef, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-campo-input-mask',
  templateUrl: './campo-input-mask.component.html',
  styleUrls: ['./campo-input-mask.component.css'],
  viewProviders: [CUSTOM_CONTROL_CONTAINER],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CampoInputMaskComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class CampoInputMaskComponent extends CampoValueAccessor {
  @Input() mascara: string;
  @Input() tamanho: string;
  @Input() unmask: boolean = true;
 }
