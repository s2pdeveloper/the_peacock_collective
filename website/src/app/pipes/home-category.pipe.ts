import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeCategory',
  standalone: true
})
export class HomeCategoryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
