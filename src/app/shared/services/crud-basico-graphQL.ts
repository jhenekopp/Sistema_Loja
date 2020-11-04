import { map, tap } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import { respostaBackendTransform } from './utils/resposta-backend-transform';

export class CrudBasicoGraphQLService<T> {
    constructor(protected apollo: Apollo) { }

    buscarTodos(query: any, entidade: string) {
        return this.apollo.watchQuery({ query: query }).valueChanges.pipe(respostaBackendTransform(entidade));
    }

    criar(query: any, registro: T | any) {
        return this.apollo.mutate({ mutation: query, variables: { data: registro } })
    }

    buscarPorId(query: any, id: number | string) {
        return this.apollo.watchQuery({ query: query }).valueChanges.pipe(
            tap(respota => console.log(respota, 'ooooooooooopa'))
        )
    }

}