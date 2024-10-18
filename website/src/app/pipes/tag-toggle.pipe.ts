import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagToggle',
  standalone: true
})
export class TagTogglePipe implements PipeTransform {

  transform(isVisible: boolean, action: 'show' | 'hide'): boolean {
    if (action === 'show') {
      return true;
    } else if (action === 'hide') {
      return false;
    }
    return isVisible;
  }

}
