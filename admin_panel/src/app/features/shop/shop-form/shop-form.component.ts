import { Component } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { ValidationService } from "@core/components";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ShopService } from "@shared/services/shop.service";
import { Location } from "@angular/common";
import { AutoIncrementService } from "@shared/services/autoIncrement.service";
import {
  NgxFileDropEntry,
  FileSystemFileEntry,
  FileSystemDirectoryEntry,
} from "ngx-file-drop";
@Component({
  selector: "app-shop-form",
  templateUrl: "./shop-form.component.html",
  styleUrls: ["./shop-form.component.scss"],
})
export class ShopFormComponent {
  submitted: boolean = false;
  userId: string = null;
  allData: any = [];
  fileContentImage: string | ArrayBuffer;
  document: any;
  files: NgxFileDropEntry[];

  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private shopService: ShopService,
    private autoIncrementService: AutoIncrementService,
    private toastService: ToastService,
    public modelService: NgbModal,
    private location: Location
  ) {}

  shopForm = new FormGroup({
    _id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    shopName: new FormControl(null, [Validators.required]),
    mobile: new FormControl(null),
    whatsUp: new FormControl(null),
    email: new FormControl(null),
    workingDays: new FormControl(null),
    time: new FormControl(null),
    logo: new FormControl(null),
    address: new FormGroup({
      line1: new FormControl(null),
      line2: new FormControl(null),
      city: new FormControl(null),
      state: new FormControl(null),
      country: new FormControl("India"),
      pinCode: new FormControl(null),
    }),
  });
  get f() {
    return this.shopForm.controls;
  }
  FORM_ERRORS = [
    {
      message: "Name is Required",
      key: "name",
    },
    {
      message: "Shop name is Required",
      key: "shopName",
    },
  ];

  ngOnInit(): void {
    this.getDataById(); // shop detail
    this.getAll(); // auto increment
  }

  // submit() {
  //   this.submitted = true;
  //   if (this.validationService.checkErrors(this.shopForm, this.FORM_ERRORS)) {
  //     return;
  //   }
  //   let formData: any = this.shopForm.value;
  //   this.shopService.createOrUpdate(formData).subscribe((success: any) => {
  //     this.spinner.hide();
  //     this.toastService.success(success.message);
  //     this.back();
  //   });
  // }

  submit() {
    if (this.validationService.checkErrors(this.shopForm, this.FORM_ERRORS)) {
      return;
    } else {
      this.spinner.show();
      let formData = new FormData();
      let formValue = this.shopForm.value;

      for (let i = 0; i < Object.keys(formValue).length; i++) {
        const key = Object.keys(formValue)[i];
        if (formValue[key] && typeof formValue[key] == "object") {
          if (formValue[key]) {
            formData.append(key, JSON.stringify(formValue[key]));
          }
        } else {
          if (formValue[key] || formValue[key] == false) {
            formData.append(key, formValue[key]);
          }
        }
      }
      if (this.document) {
        formData.append("logo", this.document, this.document.name);
      }

      this.spinner.show();
      this.shopService.createOrUpdate(formData).subscribe({
        next: (success) => {
          this.spinner.hide();
          this.toastService.success(success.message);
          this.back();
        },
        error: (error) => {
          console.error(error);
          this.spinner.hide();
        },
      });
    }
  }

  getDataById() {
    this.spinner.show();
    this.shopService.getById().subscribe((success: any) => {
      this.userId = success._id;
      this.fileContentImage = success.logo;
      this.shopForm.patchValue(success);
      this.spinner.hide();
    });
  }

  reset() {
    this.shopForm.reset();
    if (this.userId) {
      this.getDataById();
    }
  }

  back() {
    this.location.back();
  }
  //  auto increment part goes here
  getAll() {
    this.spinner.show();
    this.autoIncrementService.getAll({}).subscribe((success: any) => {
      this.spinner.hide();
      this.allData = success.rows;
    });
  }

  update(item) {
    this.spinner.show();
    this.autoIncrementService
      .update(item._id, item)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.getAll();
      });
  }

  public dropped(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      // this.document = droppedFile
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          if (file.size <= 1000000) {
            this.document = file;
            // if (edu === 'profile') {
            // this.document = <File>file;
            // }
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              // if (edu === 'profile') {
              this.fileContentImage = reader.result;
              // }
            };
            reader.onerror = (error) => {
              console.error(error);
              // handle errors
              this.toastService.error(
                "Unable to upload image of size more than 1mb"
              );
            };
          } else {
            this.toastService.error(
              "Unable to upload image of size more than 1mb"
            );
          }
        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        // console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
  public fileOver(event) {
    console.log(event);
  }
  public fileLeave(event) {
    console.log(event);
  }
}
