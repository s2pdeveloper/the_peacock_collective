import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
})
export class BrandListComponent {
  constructor(private router: Router) {
    this.serials = this.brands.map((x) => x.serial);
  }
  serials:any;
  brands: any[] = [
    {
      serial: '0-9',
      brandNameCol1: { name: ['321'] },
      brandNameCol2: { name: ['43242'] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'A',
      brandNameCol1: { name: ['Ankos', 'Ankos'] },
      brandNameCol2: { name: ['Antara', 'Apple'] },
      brandNameCol3: { name: ['Apple', 'Apple'] },
      brandNameCol4: { name: ['Appolo', 'Apson'] },
    },
    {
      serial: 'B',
      brandNameCol1: { name: ['Bower'] },
      brandNameCol2: { name: ['Bowy'] },
      brandNameCol3: { name: ['Breed'] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'C',
      brandNameCol1: { name: ['Cuter'] },
      brandNameCol2: { name: [] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'D',
      brandNameCol1: { name: ['Dester'] },
      brandNameCol2: { name: ['Drawback'] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'F',
      brandNameCol1: { name: ['Flek'] },
      brandNameCol2: { name: ['Flyer'] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'G',
      brandNameCol1: { name: ['Garden'] },
      brandNameCol2: { name: ['Gitter'] },
      brandNameCol3: { name: ['Glek'] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'H',
      brandNameCol1: { name: ['Hamak'] },
      brandNameCol2: { name: ['Hoho'] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'M',
      brandNameCol1: { name: ['Master'] },
      brandNameCol2: { name: [] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'P',
      brandNameCol1: { name: ['Pre'] },
      brandNameCol2: { name: [] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'S',
      brandNameCol1: { name: ['Sample'] },
      brandNameCol2: { name: ['Sonda'] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'T',
      brandNameCol1: { name: ['Tools'] },
      brandNameCol2: { name: [] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'Y',
      brandNameCol1: { name: ['Yetu'] },
      brandNameCol2: { name: ['Ymlal'] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
    {
      serial: 'Z',
      brandNameCol1: { name: ['Zeto'] },
      brandNameCol2: { name: [] },
      brandNameCol3: { name: [] },
      brandNameCol4: { name: [] },
    },
  ];

  navigateTo(path: any,brand:any) {
    this.router.navigate([path],{queryParams:{brand:brand}});
  }
  scrollTo(item:any){
    let ele = document.getElementById(item);
    ele?.scrollIntoView({
      behavior:'smooth',
      inline:'nearest',
      block:'start'
    })
  }
}
