import { GET_DIMENSAO } from './../../features/cadastros/dimensoes/services/query-list';
import { respostaBackendTransform } from 'src/app/shared/services/utils/resposta-backend-transform';
import { Apollo } from 'apollo-angular';
import { Observable, pipe } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { RespostaPaginada } from '../models/backend/resposta-paginada';
import { DocumentNode } from '@apollo/client/core';

export class CrudBasicoService<T> {
    constructor(protected http: HttpClient, protected RESOURCE_URL, protected apollo: Apollo) {
    }

    buscarTodosGraphQL(query: DocumentNode, entidade: string) {
        return this.apollo.watchQuery({ query: query })
            .valueChanges.pipe(respostaBackendTransform(entidade));
    }

    criarGraphQL(query: DocumentNode, registro: T | any) {
        return this.apollo.mutate({ mutation: query, variables: { data: registro } })
    }

    buscarPorIdGraphQL(query: DocumentNode, id: number | string, data: string): Observable<T> {
        return this.apollo.query({ query: query, variables: { id: id } }).pipe(
                map(resposta => resposta.data ),
                map((resposta: any) => resposta[`${data}`])
            )
    }

    atualizarPorIdGraphQL(query: DocumentNode, registo: T | any) {
        return this.apollo.mutate({ mutation: query, variables: { data: registo } })
    }

    deletarGraphQL(query: DocumentNode, registro: T | any) {
        return this.apollo.mutate( {mutation: query, variables: { data: registro} })
    }


    salvar(registro: T | any): Observable<T> {
        return registro.id ? this.atualizarPorId(registro) : this.criar(registro);
    }

    buscarPorId(id: number | string): Observable<T> {
        return this.http.get<T>(`${this.RESOURCE_URL}/${id}`, { observe: 'response' })
            .pipe(
                mapRespostaBackend()
            );
    }

    buscarTodosSemPaginacao(filtro?: any): Observable<T[]> {
        const options = criarParametrosRequisicao(filtro);
        return this.http.get<T[]>(this.RESOURCE_URL, { params: options, observe: 'response' })
            .pipe(
                mapRespostaBackend()
            );
    }

    buscarTodos(filtro?: any): Observable<RespostaPaginada<T[]>> {
        const options = criarParametrosRequisicao(filtro);
        return this.http.get<T[]>(this.RESOURCE_URL, { params: options, observe: 'response' })
            .pipe(
                mapRespostaBackend()
            );
    }

    deletar(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.RESOURCE_URL}/${id}`, { observe: 'response' });
    }

    private atualizarPorId(registo: T | any): Observable<T> {
        return this.http.put<T>(`${this.RESOURCE_URL}/${registo.id}`, registo, { observe: 'response' })
            .pipe(
                mapRespostaBackend()
            );
    }

    private criar(registro: T): Observable<T> {
        return this.http.post<T>(this.RESOURCE_URL, registro, { observe: 'response' })
            .pipe(
                mapRespostaBackend()
            );
    }
}

function mapRespostaBackend<T>() {
    return pipe(
        filter((resposta: HttpResponse<T>) => resposta.ok),
        map((resposta: HttpResponse<T>) => resposta.body),
        map((bodyResposta: any) => {
            if (bodyResposta.data != null) {
                return bodyResposta.data
            } else {
                return bodyResposta
            };
        })
    );
}

const criarParametrosRequisicao = (filtro?: any): HttpParams => {
    let parametros: HttpParams = new HttpParams();
    if (filtro) {
        Object.keys(filtro).forEach(chave => {
            if (chave !== 'sort') {
                parametros = parametros.set(chave, filtro[chave]);
            }
        });
        if (filtro.sort) {
            filtro.sort.forEach((valor: string) => {
                parametros = parametros.append('sort', valor);
            });
        }
    }
    return parametros;
};