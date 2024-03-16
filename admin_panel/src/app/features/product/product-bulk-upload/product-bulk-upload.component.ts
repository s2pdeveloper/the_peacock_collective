import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { saveAs } from "file-saver";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { UploadService } from "@shared/services/upload.service";

@Component({
  selector: "app-product-bulk-upload",
  templateUrl: "./product-bulk-upload.component.html",
  styleUrls: ["./product-bulk-upload.component.scss"],
})
export class ProductBulkUploadComponent implements OnInit {
  displayMessage: string = null;
  filePath: string = "";
  fileUploaded: boolean = false;
  uploadForm = new FormGroup({
    uploadedFile: new FormControl(null),
  });

  removeImageForm = new FormGroup({
    path: new FormControl(null),
  });

  formData = new FormData();

  constructor(
    public modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private router: Router,
    private uploadService: UploadService,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    if (this.uploadForm.value?.uploadedFile) {
      this.filePath = this.uploadForm.value?.uploadedFile;
      this.fileUploaded = this.uploadForm.value?.uploadedFile ? true : false;
    }
  }

  /**
   * to upload products in bulk using excel file
   */
  bulkUploadProduct() {
    if (this.displayMessage) {
      return;
    }
    this.spinner.show();
    this.uploadService.uploadBulkProduct(this.formData).subscribe({
      next: (data: any) => {
        // this.excelShopList = data;
        this.dismissModal();
        // this.openBulkUploadData(data);
        this.spinner.hide();
      },
      error: (error: any) => {
        this.toastService.error(error);
        this.spinner.hide();
      },
    });
  }

  // openBulkUploadData(data) {
  // const modalRef = this.modalService.open(OnboardShopDataComponent, {
  //   centered: true, size: 'lg'
  // });
  // modalRef.componentInstance.productData = data;
  // modalRef.result.then((result) => {
  // }, (dismiss) => {
  // })
  // }

  /**
   * to upload file to database
   */
  uploadFile(file: File) {
    this.spinner.show();
    this.displayMessage = null;
    if (
      this.uploadService.checkFileType(file) &&
      this.uploadService.checkFileSize(file)
    ) {
      this.formData.append("key", "excel");
      // this.formData.append('file', file);
      this.formData.append("uploadFile", file);
      this.fileUploaded = true;
      this.spinner.hide();
    } else {
      if (!this.uploadService.checkFileType(file)) {
        this.displayMessage = "Please upload the file in .csv format";
        this.spinner.hide();
        return;
      }
      if (!this.uploadService.checkFileSize(file)) {
        this.displayMessage = "Please upload the file that is less then 5mb";
        this.spinner.hide();
        return;
      }
    }
  }

  /**
   * remove uploaded file
   */
  removeUploadedFile() {
    this.formData.delete("file");
    this.filePath = null;
    this.files = [];
    this.fileUploaded = false;
  }

  get form() {
    return this.uploadForm.controls;
  }
  /**
   * download bulk upload template
   */
  downloadTemplate() {
    saveAs(`assets/documents/product-template.csv`, "product-template.csv");
  }
  /**
   * drag and drop file functionality
   */
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler($event) {
    this.prepareFilesList($event.target.files);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      this.uploadFile(files[0]);
    }
    this.fileDropEl.nativeElement.value = "";
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  dismissModal() {
    this.modalService.dismissAll("dismiss with cross click");
  }

  closeModal() {
    this.activeModal.close("close with cancel button");
  }
}
