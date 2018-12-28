import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "binary"
})
export class BinaryPipe implements PipeTransform {
  transform(value: number): any {
    return ("00000000" + value.toString(2)).slice(-8);
  }
}
