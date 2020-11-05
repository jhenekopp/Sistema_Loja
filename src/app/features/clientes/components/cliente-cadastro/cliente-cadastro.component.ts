import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClienteCadastroComponent implements OnInit {
  checked = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
