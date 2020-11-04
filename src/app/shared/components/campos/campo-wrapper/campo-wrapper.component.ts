import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-campo-wrapper',
  templateUrl: './campo-wrapper.component.html',
  styleUrls: ['./campo-wrapper.component.css'],
})
export class CampoWrapperComponent {
  @Input() label: string;
  @Input() forId: string;
  @Input() classesCss: string;
  @Input() control: AbstractControl;
  @Input() labelCampoErro: string;

  obterLabelDeErro(): string {
    return this.labelCampoErro = this.labelCampoErro ?? this.label;
  }
}
