import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagProduct',
  // standalone: true
})
export class TagProductPipe implements PipeTransform {
  transform(products: any[] = [], tagId: number = null, activeCategoryId: number = null): any {
    try {

      if (products.length && tagId && activeCategoryId) {
        return products.filter(x => {
          if (x.productWithCategory.id == activeCategoryId && x.productWithTagMap.some(y => y.tagId == tagId)) {
            return x;
          }
        })
      } else {
        return [];
      }

    } catch (error) {
      console.log('error', error);
      return [];
    }
  }
}
