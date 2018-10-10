import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hex'
})
export class HexPipe implements PipeTransform {
  transform(value: number): any {
    return ('00' + value.toString(16).toUpperCase()).slice(-2);
  }
}
