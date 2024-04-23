import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagProduct',
  // standalone: true
})
export class TagProductPipe implements PipeTransform {
  transform(products: any[]=[], tagId: number=null): any {
    try {

      if(products.length && tagId){
        return products.filter(x=>{
          if(x.productWithTagMap.some(y=>y.tagId==tagId)){
            return x;
          }
        })
      }
    
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }
}
