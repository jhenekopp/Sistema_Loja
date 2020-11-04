import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  @Input() titulo: string;
  @Input() voltar = false;
  @Input() semCabecalho = false;

  constructor(private _location: Location) {}

  voltarPagina() {
      this._location.back();
  }
}
