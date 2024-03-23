import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bespoke',
  templateUrl: './bespoke.component.html',
  styleUrls: ['./bespoke.component.scss'],
})
export class BespokeComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  data: any = {
    pageName: '',
    description: '',
  };
  products: any[] = [
    {
      img: '../../../../assets/products/sari/sari1.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari2.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari3.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari4.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari5.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari6.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari7.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari8.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari8.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari9.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari10.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari11.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari12.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari13.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari14.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari15.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari16.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari17.jpeg',
    },
    {
      img: '../../../../assets/products/sari/sari18.jpeg',
    },
  ];
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.data.pageName = params?.id;
    });
  }
}
