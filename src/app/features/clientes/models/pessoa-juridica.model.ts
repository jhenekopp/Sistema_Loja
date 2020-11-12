export interface IPessoaJuridica {
    id?: number;
    nome?: string;
    nomeFantasia?: string;
    cpfCnpj?: string;
    rgInscricaoEstadual?: string;
    telefonePrincipal?: string;
    telefoneFax?: string;
    email?: string;
    cep?: string;
    endereco?: string;
    numero?: string;
    bairro?: string;
    complemento?: string;
    estado?: string;
    cidade?: string;
    observacoesGerais?: string;
    tipoPessoa?: string;
}

export class PessoaJuridica implements IPessoaJuridica {
    constructor(
        public id?: number,
        public nome?: string,
        public nomeFantasia?: string,
        public cpfCnpj?: string,
        public rgInscricaoEstadual?: string,
        public telefonePrincipal?: string,
        public telefoneFax?: string,
        public email?: string,
        public cep?: string,
        public endereco?: string,
        public numero?: string,
        public bairro?: string,
        public complemento?: string,
        public estado?: string,
        public cidade?: string,
        public observacoesGerais?: string,
        public tipoPessoa?: string
    ) {}
}