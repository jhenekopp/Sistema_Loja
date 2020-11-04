import { CampoValueAccessor, CUSTOM_CONTROL_CONTAINER } from './../campo-value-accessor/campo-value-accessor.component';
import { Component, forwardRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-campo-input',
    templateUrl: './campo-input.component.html',
    styleUrls: ['./campo-input.component.css'],
    viewProviders: [CUSTOM_CONTROL_CONTAINER],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CampoInputComponent),
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})

export class CampoInputComponent extends CampoValueAccessor { }

