import { Validators } from '@angular/forms';

export const camposPessoaJuridica = formBuilder => {
    return formBuilder.group({
        id: [null],
        nome: [null, Validators.required],
        nomeFantasia: [null, Validators.required],
        cpfCnpj: [null, Validators.required],
        rgInscricaoEstadual: [null, Validators.required],
        telefonePrincipal: [null, Validators.required],
        telefoneFax: [null],
        email: [null, [Validators.required, Validators.email]],
        cep: [null, Validators.required],
        endereco: [null, Validators.required],
        numero: [null, Validators.required],
        bairro: [null, Validators.required],
        complemento: [null],
        estado: [null, Validators.required],
        cidade: [null, Validators.required],
        observacoesGerais: [null],
        tipoPessoa: ['JURIDICA']
    })
};