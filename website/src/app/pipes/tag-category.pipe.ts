import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagCategory',
  // standalone: true,
})
export class TagCategoryPipe implements PipeTransform {
  transform(products: any[]=[], tagId: number=null): any {
    try {
      let categoryArr = [];
      if (products.length && tagId) {
        for (const item of products) {
          if (item.productWithTagMap.some((y) => y.tagId == tagId)) {
            if (!categoryArr.some((y) => y.id == item.categoryId)) {
              categoryArr.push(item.productWithCategory);
            }
          }
        }
      }
      return categoryArr;
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }
}
