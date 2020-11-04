import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CrudBasicoGraphQLService } from '../crud-basico-graphQL';
import { Observable, of } from 'rxjs';


export class ResolverGenericoGraphQL<T> implements Resolve<T> {
    constructor(protected query: any, protected service: CrudBasicoGraphQLService<T>, protected parametroIdRota: string = 'id') {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T {
        const id = route.params[this.parametroIdRota];
        if (id == null) {
            return of();
        }
        return null;
    }
}

