export interface IPessoaFisica {
    id?: number;
    nome?: string;
    dataNascimento?: Date;
    cpfCnpj?: string;
    rgInscricaoEstadual?: string;
    telefonePrincipal?: string;
    telefoneResidencial?: string;
    telefoneComercial?: string;
    sexo?: string;
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

export class PessoaFisica implements IPessoaFisica {
    constructor(
        public id?: number,
        public nome?: string,
        public dataNascimento?: Date,
        public cpfCnpj?: string,
        public rgInscricaoEstadual?: string,
        public telefonePrincipal?: string,
        public telefoneResidencial?: string,
        public telefoneComercial?: string,
        public sexo?: string,
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