import { Component, ElementRef, EventEmitter, OnInit, Output, output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Subject, switchMap } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'search-dropdown',
  templateUrl: './custom-search-dropdown.component.html',
  styleUrl: './custom-search-dropdown.component.scss'
})
export class CustomSearchDropdownComponent implements OnInit {
  @ViewChild("input", { static: false }) input: ElementRef;
  @Output() dismissModal = new EventEmitter<boolean>();
  items = [];
  searchTerm$ = new Subject<string>();
  searchTerm = '';
  shown = false;
  constructor(private ele: ElementRef, private router: Router, private commonService: CommonService) {
    this.searchTerm$.pipe(
      debounceTime(300),
      switchMap((searchTerm: string) => this.commonService.getAllProducts(searchTerm))
    ).subscribe((results: any) => {
      this.items = results?.result
    });

  }
  select(item) {
    const path: String = `pages/${item.categoryId}`;
    this.router.navigate([path]);
    let ele: any = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    this.shown = false;
    this.dismissModal.emit(true)
  }
  show() {
    this.shown = this.shown ? false : true;
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 200);
  }
  ngOnInit(): void {
    // this.search('Hand')
  }
  search(ev) {
    const value = ev.target.value;
    if (value.length > 2) {
      this.searchTerm$.next(value);
    } else {
      this.items = [];
    }
  }

}
