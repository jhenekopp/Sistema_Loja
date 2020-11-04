import { SelectItem } from 'primeng/api';

export function converteEnumEmSelectItem(Enum): SelectItem[] {
    return Object.keys(Enum).map(key => ({ 
        label: Enum[key],
        value: key
    }));
}