import { Observable, of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CrudBasicoService } from './crud-basico';
import { DocumentNode } from '@apollo/client/core';

export class ResolverEntidadeGenerico<T> implements Resolve<T> {
    constructor(protected service: CrudBasicoService<T>, 
                protected parametroIdRota: string = 'id', 
                protected data: string,
                protected query: DocumentNode) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T {
        const id = route.params[this.parametroIdRota];
        if (id == null) {
            return of();
        }
        return this.service.buscarPorIdGraphQL(this.query, id, this.data);
    }
}

