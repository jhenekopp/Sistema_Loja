import { RespostaGraphQL } from 'src/app/shared/models/backend/resposta-graphQL';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

export function respostaBackendTransform(entidade: string) {
    return pipe(
        map((resposta: any) => resposta.data[`${entidade}`]),
        map((resposta: any) => resposta.edges),
        map((dados: RespostaGraphQL[]) => dados.map(el => el.node)),
    );
}