import { Validators } from '@angular/forms';

export const camposPessoaFisica = formBuilder => {
    return formBuilder.group({
        id: [null],
        nome: [null, Validators.required],
        dataNascimento: [null, Validators.required],
        cpfCnpj: [null, Validators.required],
        rgInscricaoEstadual: [null, Validators.required],
        telefonePrincipal: [null, Validators.required],
        telefoneResidencial: [null],
        telefoneComercial: [null],
        sexo: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        cep: [null, Validators.required],
        endereco: [null, Validators.required],
        numero: [null, Validators.required],
        bairro: [null, Validators.required],
        complemento: [null],
        estado: [null, Validators.required],
        cidade: [null, Validators.required],
        observacoesGerais: [null],
        tipoPessoa: ['FISICA']
    })
};