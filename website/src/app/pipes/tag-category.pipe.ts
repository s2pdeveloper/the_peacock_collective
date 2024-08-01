import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagCategory',
  // standalone: true,
})
export class TagCategoryPipe implements PipeTransform {
  transform(categories: any[] = [], tagId: number = null): any {
    try {
      // let categoryArr = [];
      if (categories.length && tagId) {
        return categories.filter(x => x?.categoryWithtags?.some(y => y.tagId == tagId));
      }
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }
}
