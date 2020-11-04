import { FORMATO_DATA_HORA } from './../../../app.constants';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

class FormValidationsUtil {
    static isNullThrow(obj: any, msg = 'É necessário informar um campo.') {
        if (obj == null) {
            throw new Error(msg);
        }
    }
}
export class FormValidations {
    static requiredMinCheckbox(min = 1) {
        const validator = (formArray: FormArray) => {
            const totalChecked = formArray.controls.map(v => v.value).reduce((total, current) => (current ? total + current : total), 0);
            return totalChecked >= min ? null : { required: true };
        };
        return validator;
    }

    static equalsTo(otherField: string) {
        const validator = (formControl: FormControl) => {
            FormValidationsUtil.isNullThrow(otherField);
            if (!formControl.root || !(formControl.root as FormGroup).controls) {
                return null;
            }
            const field = (formControl.root as FormGroup).get(otherField);
            FormValidationsUtil.isNullThrow(field, 'É necessário informar um campo válido.');
            if (field.value !== formControl.value) {
                return { equalsTo: otherField };
            }
            return null;
        };
        return validator;
    }

    static lessThanTo(otherFieldName: string) {
        return (control: FormControl) => {
            FormValidationsUtil.isNullThrow(otherFieldName);
            if (!control.root || !(control.root as FormGroup).controls) {
                return null;
            }
            const otherField = (control.root as FormGroup).get(otherFieldName);
            FormValidationsUtil.isNullThrow(otherField, 'É necessário informar um campo válido.');
            if (typeof control.value !== 'number' || typeof otherField.value !== 'number') {
                return null;
            }
            if (control.value < otherField.value) {
                return { lessThanTo: otherField.value };
            }
            return null;
        };
    }

    static lessThanToInFormArray(otherFieldName: string) {
        return (control: FormControl) => {
            FormValidationsUtil.isNullThrow(otherFieldName);
            if (!control.parent || !(control.parent as FormGroup).controls) {
                return null;
            }
            const otherField = (control.parent as FormGroup).get(otherFieldName);
            FormValidationsUtil.isNullThrow(otherField, 'É necessário informar um campo válido.');
            if (typeof control.value !== 'number' || typeof otherField.value !== 'number') {
                return null;
            }
            if (control.value < otherField.value) {
                return { lessThanTo: otherField.value };
            }
            return null;
        };
    }

    static greaterThanTo(otherFieldName: string) {
        return (control: FormControl) => {
            FormValidationsUtil.isNullThrow(otherFieldName);
            if (!control.root || !(control.root as FormGroup).controls) {
                return null;
            }
            const otherField = (control.root as FormGroup).get(otherFieldName);
            FormValidationsUtil.isNullThrow(otherField, 'É necessário informar um campo válido.');
            if (typeof control.value !== 'number' || typeof otherField.value !== 'number') {
                return null;
            }
            if (control.value > otherField.value) {
                return { greaterThanTo: otherField.value };
            }
            return null;
        };
    }

    static greaterThanToInFormArray(otherFieldName: string) {
        return (control: FormControl) => {
            FormValidationsUtil.isNullThrow(otherFieldName);
            if (!control.parent || !(control.parent as FormGroup).controls) {
                return null;
            }
            const otherField = (control.parent as FormGroup).get(otherFieldName);
            FormValidationsUtil.isNullThrow(otherField, 'É necessário informar um campo válido.');
            if (typeof control.value !== 'number' || typeof otherField.value !== 'number') {
                return null;
            }
            if (control.value > otherField.value) {
                return { greaterThanTo: otherField.value };
            }
            return null;
        };
    }

    static dateLessThanTo(otherDateFieldName: string) {
        return (control: FormControl) => {
            FormValidationsUtil.isNullThrow(otherDateFieldName, 'É necessário informar um campo de data para comparação.');
            if (!control.root || !(control.root as FormGroup).controls) {
                return null;
            }
            const otherFieldControl = (control.root as FormGroup).get(otherDateFieldName);
            FormValidationsUtil.isNullThrow(otherFieldControl, 'É necessário informar um campo válido.');
            const date = moment(control.value, FORMATO_DATA_HORA);
            const otherDate = moment(otherFieldControl.value, FORMATO_DATA_HORA);
            if (date.isBefore(otherDate)) {
                return { dateLessThanTo: otherDate.format(FORMATO_DATA_HORA) };
            }
            return null;
        };
    }

    static dateGreaterThanTo(otherDateFieldName: string) {
        return (control: FormControl) => {
            FormValidationsUtil.isNullThrow(otherDateFieldName, 'É necessário informar um campo de data para comparação.');
            if (!control.root || !(control.root as FormGroup).controls) {
                return null;
            }
            const otherFieldControl = (control.root as FormGroup).get(otherDateFieldName);
            FormValidationsUtil.isNullThrow(otherFieldControl, 'É necessário informar um campo válido.');
            const date = moment(control.value, FORMATO_DATA_HORA);
            const otherDate = moment(otherFieldControl.value, FORMATO_DATA_HORA);
            if (date.isAfter(otherDate)) {
                return { dateGreaterThanTo: otherDate.format(FORMATO_DATA_HORA) };
            }
            return null;
        };
    }

    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
        const config = {
            required: `O campo ${fieldName || ''} é obrigatório.`,
            minlength: `O campo ${fieldName || ''} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
            maxlength: `O campo ${fieldName || ''} pode ter no máximo ${validatorValue.requiredLength} caracteres.`,
            cepInvalido: 'CEP inválido.',
            emailInvalido: 'Email já cadastrado!',
            email: 'Formato de e-mail inválido',
            equalsTo: 'Campo de confirmação está diferente',
            pattern: 'Campo inválido',
            cpfNotValid: 'CPF inválido',
            minDate: 'Data não pode ser inferior a 95 anos',
            maxDate: `Data não pode ser superior a data atual`,
            dateInvalidFormat: 'Informe uma data válida',
            celularInvalido: 'Celular inválido',
            cpfExistente: 'CPF já cadastrado',
            dateLessThanTo: `A data informada não pode ser inferior à ${validatorValue}`,
            dateGreaterThanTo: `A data informada não pode ser superior à ${validatorValue}`,
            lessThanTo: `O valor não pode ser inferior à ${validatorValue}`,
            greaterThanTo: `O valor não pode ser superior à ${validatorValue}`,
        };

        return config[validatorName];
    }
}
