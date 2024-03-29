import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mainProduct',
  // standalone: true
})
export class MainProductPipe implements PipeTransform {
  transform(products: any[], category: any): any {
    try {
      if(products.length && category){
        return products.filter(x=>x.categoryId == category.id)
      }else{
        return [];
      }
    
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }
}
