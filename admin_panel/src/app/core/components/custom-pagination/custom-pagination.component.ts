import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-custom-pagination",
  templateUrl: "./custom-pagination.component.html",
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, FormsModule],
})
export class CustomPaginationComponent implements OnInit, AfterViewInit {
  @Input() page: number = 1;
  @Output() pageChange = new EventEmitter<number>();
  @Input() pageSize: number = 25;
  @Output() pageSizeChange = new EventEmitter<number>();
  @Input() collection: number = 0;
  @Output() collectionChange = new EventEmitter<number>();

  @Output() myOutput: EventEmitter<any> = new EventEmitter();
  itemsPerPage: number = 25;
  public currentPageLimit: number = 25;
  public pageLimitOptions = [
    { value: 8 },
    { value: 10 },
    { value: 25 },
    { value: 50 },
    { value: 100 },
    { value: 150 },
    { value: 200 },
  ];

  constructor() {}
  ngAfterViewInit(): void {
    // console.log("child", this.pageSize, this.page, this.collection);
  }

  ngOnInit(): void {
    // console.log("child", this.pageSize, this.page, this.collection);
  }

  onChangePage(pageNo) {
    this.pageChange.emit(this.page);
    this.pageSizeChange.emit(this.pageSize);
    this.collectionChange.emit(this.collection);
    this.myOutput.emit(pageNo);
  }
}
