import {
  Directive,
  EventEmitter,
  Input,
  Output,
  QueryList,
} from "@angular/core";

export type SortColumn = any | "";
export type SortDirection = "asc" | "desc" | "";
const rotate: { [key: string]: SortDirection } = {
  asc: "desc",
  desc: "",
  "": "asc",
};

export interface SortEvent {
  column: SortColumn;
  direction: SortDirection;
}

@Directive({
  selector: "th[sortable]",
  host: {
    "[class.asc]": 'direction === "asc"',
    "[class.desc]": 'direction === "desc"',
    "(click)": "rotate()",
  },
})
export class NgbdSortableHeader {
  @Input() sortable: SortColumn = "";
  @Input() direction: SortDirection = "";
  @Output() sort = new EventEmitter<SortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
  static onSort(
    { column, direction }: SortEvent,
    headers: QueryList<NgbdSortableHeader>
  ) {
    // resetting other headers
    headers.forEach((header: any) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    return {
      column: column,
      direction: direction == "asc" ? 1 : -1,
    };
  }
}
