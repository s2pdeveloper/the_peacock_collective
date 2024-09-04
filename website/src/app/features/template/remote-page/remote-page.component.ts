import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-remote-page',
  templateUrl: './remote-page.component.html',
  styleUrls: ['./remote-page.component.scss'],
})
export class RemotePageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute,private commonService : CommonService,private router : Router) {}
  id: number = null;
  initialData: any = {};
  products: any[] = [
    // {
    //   img: '../../../../assets/products/sari/sari1.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari2.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari3.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari4.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari5.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari6.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari7.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari8.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari8.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari9.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari10.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari11.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari12.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari13.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari14.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari15.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari16.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari17.jpeg',
    // },
    // {
    //   img: '../../../../assets/products/sari/sari18.jpeg',
    // },
  ];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = Number(params.id)
      this.initialData = this.commonService.allData.categories.find((x) => x.id == this.id);
      this.products = this.commonService.allData.products.filter((x) => x.categoryId == this.id)
      console.log("products",this.initialData);
      
    });
  }
  navigateTo(path: any,id:any) {
    this.router.navigate([path],{queryParams : {id:id}});
  }
  navigateToProdDetails(id: number) {
    let path = `/product/product-details/${id}`;
    this.router.navigate([path]);
  }
}
