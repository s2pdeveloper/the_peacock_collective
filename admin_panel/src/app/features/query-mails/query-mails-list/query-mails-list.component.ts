import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QueryMailService } from '@shared/services/queryMail.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-query-mails-list',
  templateUrl: './query-mails-list.component.html',
  styleUrls: ['./query-mails-list.component.scss']
})
export class QueryMailsListComponent {
  private modalService = inject(NgbModal);
  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastService: ToastrService,
    private qMService: QueryMailService
  ) {}
  page: number = 1;
  pageSize: number = 25;
  collection: number = 0;
  column: string = "createdAt";
  direction: number = -1;
  search: any = "";
  selectedRow: any;
  queryMails:any;
  ngOnInit(): void {
    this.getAll();
  }

  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
    this.getAll();
  }
  open(s: any, content: any) {
    this.selectedRow = s;
    this.modalService.open(content, { centered: true });
  }
  searchFn() {
    this.search.toString().length >= 3 || this.search.toString().length == 0
      ? this.getAll()
      : null;
  }

  getAll() {
    this.spinner.show();
    let obj = {
      page: this.page,
      pageSize: this.pageSize,
      search: this.search,
    };
    this.qMService.getAll(obj).subscribe((success: any) => {
      console.log('success',success);
      this.spinner.hide();
      this.queryMails = success;
      this.collection = success.length;
    });
  }
  navigateTo(path:any){
    this.router.navigate([path]);
  }
}
