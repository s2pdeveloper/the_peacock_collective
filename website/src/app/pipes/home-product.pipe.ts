import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homeProduct',
  standalone:true
})
export class HomeProductPipe implements PipeTransform {

  transform(products: any[]=[], category: any=null): any {
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
