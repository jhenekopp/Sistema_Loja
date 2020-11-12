import { CrudBasicoService } from '../../../shared/services/crud-basico';
import { PessoaJuridica } from '../models/pessoa-juridica.model';
import { PessoaFisica } from '../models/pessoa-fisica.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/shared/api.constants';

@Injectable({
    providedIn: 'root'
})
export class ClienteService extends CrudBasicoService<PessoaFisica | PessoaJuridica>{
    constructor(protected http: HttpClient) {
        super(http, API.ENDPOINT_CLIENTE);
    }
}