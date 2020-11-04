import { SelectItem } from 'primeng/api';
import { CampoValueAccessor, CUSTOM_CONTROL_CONTAINER } from './../campo-value-accessor/campo-value-accessor.component';
import { Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-campo-dropdown',
  templateUrl: './campo-dropdown.component.html',
  styleUrls: ['./campo-dropdown.component.css'],
  viewProviders: [CUSTOM_CONTROL_CONTAINER],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CampoDropdownComponent),
            multi: true,
        },
    ],
    encapsulation: ViewEncapsulation.None,
})
export class CampoDropdownComponent extends CampoValueAccessor {
  @Input() opcoes: SelectItem[] | any[];
  @Input() filtro = false;
  @Input() filtrarPor: string;
  @Input() labelOpcao: string;
  @Input() dataKey: string;
  @Input() placeholder: string;
  @Input() filtroPlaceholder: string;
  @Input() disabled: boolean;
  @Input() readonly: boolean;
}