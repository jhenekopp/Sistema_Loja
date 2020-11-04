import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "simOuNao"
})
export class SimOuNaoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value ? "SIM" : "NÃO";
  }
}