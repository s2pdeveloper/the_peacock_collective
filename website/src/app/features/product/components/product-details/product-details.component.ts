import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  actRoute = inject(ActivatedRoute);
  constructor(private router: Router, public commonService: CommonService) {}
  qty: number = 1;
  tabActive: String = '';
  products: any = null;
  attrArr: any[] = [];
  currentVariant=null;

  setTabActive(key: any) {
    this.tabActive = key;
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params: any) => {
      console.log(params);
      if (params?.id) {
        this.products = this.commonService.allData.products.find(
          (x) => x.id == params.id
        );
        this.currentVariant=this.products.productWithVariants[0];
        for (const [i,item] of this.products.productWithVariants.entries()) {
          console.log("iiiiii",i);
          
          for (const varMap of item.variantWithAttrVariantMap) {
           let index= this.attrArr.findIndex(x=>x.name==varMap.AttrVariantMapWithAttributes.name);
           console.log("varMap.value",varMap.value);
           
            if(index == -1){
              this.attrArr.push({
                name:varMap.AttrVariantMapWithAttributes.name,
                type:varMap.AttrVariantMapWithAttributes.type,
                value:[varMap.value],
                selectedValue: i==0 ? varMap.value : null
              })
            }else{
              this.attrArr[index].value.push(varMap.value);
              this.attrArr[index].value=[...new Set(this.attrArr[index].value)];
            }
          
          }

          
        }
        console.log('this.products',this.products);
        console.log('this.attrArr',this.attrArr);
        
      }
    });
  }
}
