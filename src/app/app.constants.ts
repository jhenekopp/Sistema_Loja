import { LocaleSettings } from 'primeng/calendar';

export const LIMITE_CARACTERES_INPUT = 255;
export const LIMITE_CARACTERES_TEXT_AREA = 500;

export const REGEX_ATE_5_CASAS_DECIMAIS = '^-?[0-9]\\d*(\\.\\d{1,5})?$';

/* CALENDARIO - PRIMENG */
export const CALENDARIO_BR: LocaleSettings = {
    firstDayOfWeek: 0,
    dayNames: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
    dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ],
    monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    today: 'Hoje',
    clear: 'Limpar',
    dateFormat: 'mm/dd/yy'
};

/* MOMENT */
export const FORMATO_DATA = 'DD/MM/YYYY';
export const FORMATO_DATA_HORA = 'DD/MM/YYYY HH:mm:ss';