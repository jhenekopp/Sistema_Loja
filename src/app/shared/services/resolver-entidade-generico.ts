import { filter, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CrudBasicoService } from './crud-basico';

export class ResolverEntidadeGenerico<T> implements Resolve<T> {
    constructor(protected service: CrudBasicoService<T>,
                protected parametroIdRota: string = 'id') { }
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> | Promise<T> | T {
        const id = route.params[this.parametroIdRota];
       
        if(id == null){
            return of();
        } 
        return this.service.buscarPorId(id);
    }
}

