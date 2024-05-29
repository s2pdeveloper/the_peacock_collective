import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexToColorName'
})
export class HexToColorNamePipe implements PipeTransform {

  transform(value: string) {
    // const result = ntc.name(value);
    // return result[1]; // result[1] contains the color name
  }

}
