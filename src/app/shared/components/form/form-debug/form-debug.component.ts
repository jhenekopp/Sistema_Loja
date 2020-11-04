import { Component, Input, isDevMode } from '@angular/core';

@Component({
  selector: 'app-form-debug',
  templateUrl: './form-debug.component.html',
  styleUrls: ['./form-debug.component.css']
})
export class FormDebugComponent {
  @Input() form;

  get exibirDebug() {
    return isDevMode();
  }
}
