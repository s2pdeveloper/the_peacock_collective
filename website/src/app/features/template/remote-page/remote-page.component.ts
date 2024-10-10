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
  categoryId: number = null;
  category: any = {};
  products: any[] = [];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.categoryId = Number(params.id)
      this.category = this.commonService.allData.categories.find((x) => x.id == this.categoryId);
      this.products = this.commonService.allData.products.filter((x) => x.categoryId == this.categoryId)
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
