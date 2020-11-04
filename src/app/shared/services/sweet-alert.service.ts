import { Injectable } from '@angular/core';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

@Injectable({
    providedIn: 'root',
})
export class SweetAlertService {
    private opcoesPadrao = {
        allowEnterKey: false,
        allowEscapeKey: false,
        allowOutsideClick: false,
        reverseButtons: true,
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#dc3545',
        confirmButtonText: 'Confirmar',
        confirmButtonColor: '#218838',
    };

    constructor() {}

    public sucesso(msg: string, titulo: string = 'Sucesso!') {
        return this.executarSwal({
            title: titulo,
            text: msg,
            icon: 'success',
        });
    }

    public sucessoAoDeletar(): void {
        this.sucesso('O registro foi deletado com sucesso', 'Deletado!');
    }

    public erro(msg: string, titulo: string = 'Ooops!') {
        this.executarSwal({
            title: titulo,
            text: msg,
            icon: 'error',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#3085d6'
        });
    }

    public confirmacao(callback: () => void = () => {}) {
        return this.executarSwal({
            title: 'Você tem certeza?',
            text: 'Após confirmar você não poderá reverter esta ação!',
            icon: 'question',
            showCancelButton: true,
        }).then(result => {
            if (result.value) {
                callback();
                Swal.fire('Sucesso!', 'Ação realizada com sucesso', 'success');
            }
            return result;
        });
    }

    public deletarComConfirmacao(callbackAoDeletar: () => void) {
        return this.executarSwal({
            title: 'Você tem certeza?',
            text: 'Após deletar você não poderá reverter esta ação!',
            icon: 'question',
            showCancelButton: true,
        }).then(result => {
            if (result.value) {
                callbackAoDeletar();
            }
        });
    }

    private executarSwal(opcoes: SweetAlertOptions): Promise<SweetAlertResult> {
        const opcoesMescladas = { ...this.opcoesPadrao, ...opcoes };
        return Swal.fire(opcoesMescladas);
    }
}

