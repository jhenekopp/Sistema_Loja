import { Observable, pipe } from 'rxjs';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { RespostaPaginada } from '../models/backend/resposta-paginada';

export class CrudBasicoService<T> {
    constructor(protected http: HttpClient, protected RESOURCE_URL) {
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