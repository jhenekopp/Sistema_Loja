export class API {
    static readonly FAKE_BACKEND_URL = 'http://localhost:3000';

    static readonly URL = 'http://localhost:5000';

    static readonly ENDPOINT_APURACAO = `${API.FAKE_BACKEND_URL}/apuracoes`;
    static readonly ENDPOINT_APURACAO_DIMENSAO = `${API.FAKE_BACKEND_URL}/apuracao-dimensao`;
    static readonly ENDPOINT_DIMENSAO = `${API.FAKE_BACKEND_URL}/dimensoes`;
    static readonly ENDPOINT_DIMENSAO_DO_DW = `${API.FAKE_BACKEND_URL}/dimensoes-do-DW`;
    static readonly ENDPOINT_INDICADOR = `${API.FAKE_BACKEND_URL}/indicadores`;
    static readonly ENDPOINT_INDICADOR_NOVO = `${API.FAKE_BACKEND_URL}/indicadores-novo`;
    static readonly ENDPOINT_PERIODO = `${API.FAKE_BACKEND_URL}/periodos`;


    static readonly ENDPOINT_TABELAS_DW = `${API.URL}/tabelas-dw`;

}