export interface RespostaPaginada<T> {
    content: T;
    pageable: {
        sort: {
            sorted: boolean;
            unsorted: boolean;
            empty: boolean
        };
        pageNumber: number;
        pageSize: number;
        offset: number;
        unpaged: boolean;
        paged: boolean
    };
    totalPages: number;
    last: boolean;
    totalElements: number;
    first: boolean;
    sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean
    };
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
}