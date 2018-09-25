import { Pipe } from '@angular/core';

@Pipe({
  name: 'hex'
})
export class HexPipe extends Pipe {
  transform(value: number): any {
    let val = value.toString(16).toUpperCase();
    val = val.length === 1 ? '0' + val : val;
    return val;
  }
}