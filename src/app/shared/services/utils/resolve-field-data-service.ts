import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ResolveFieldDataService {
    resolveFieldData(data: any, field: string): any {
        if (data && field) {
            if (!field.includes('.')) {
                return data[field];
            } else {
                const fields: string[] = field.split('.');
                let value = data;
                for (let count = 0; count < fields.length; ++count) {
                    if (value !== null) {
                        value = value[fields[count]];
                    }
                }
                return value;
            }
        } else {
            return null;
        }
    }
}