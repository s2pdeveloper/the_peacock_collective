import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationService } from '@core/components';
import { SpinnerService, ToastService } from '@core/services';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.scss']
})
export class ProductImagesComponent {
  Show: string;
  page: any = 1;
  pageSize: any = 10;
  search: any = "";
  productId : any;
  categoryOptions: any = [];
  autoIncrementNos: any = {};
  file: any = null;
  fileName: any = "";
  url: any = null;
  submitted: boolean = false;
  prodImages = [];

  productImage: any = null;
  productImageName: any = "";
  productImageUrl: any = null;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private spinner: SpinnerService,
    private toastService: ToastService,
    private domSanitizer: DomSanitizer,
    private validationService: ValidationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        // this.getById(params.id);
        this.productId = params.id;
      }
    });
  }
  FORM_ERRORS = [
    {
      message: "Product Image is Required",
      key: "productImage",
    },
  ];
  imageForm = new FormGroup({
    id: new FormControl(null),
    productImage: new FormControl(null),
  });

  get form() {
    return this.imageForm.controls;
  }
  navigateTo() {
    this.router.navigate(["default/product/product-list"]);
  }

  onSubmit() {
    this.submitted = true;
    if (
      this.validationService.checkErrors(this.imageForm, this.FORM_ERRORS)
    ) {
      return;
    }

    // let formData: FormData = new FormData();
    // for (const key in this.imageForm.value) {
    //   if (key != "image") {
    //     console.log("key=====", key);

    //     formData.append(key, this.imageForm.value[key]);
    //   }
    // }
    // if (this.file) {
    //   // formData.append('key', 'category');
    //   formData.append("image", this.file, this.file.name);
    // }
    let formData: FormData = new FormData();
    for (const key in this.imageForm.value) {
      if (key != 'productImage') {

        formData.append(key, this.imageForm.value[key]);
      }
    }
    if (this.file) {
      formData.append('image', this.file, this.file.name);
    }

    formData.delete("id");
    this.create(formData);
  }

  create(formData) {
    // this.spinner.show();
    // this.productService.create(formData).subscribe((success: any) => {
    //   this.spinner.hide();
    //   this.toastService.success(success.message);
    //   this.router.navigate(["default/product/product-list"]);
    // });
  }
  removeImg(){}

  fileChosen(event: any, key) {
    console.log("event.target.files", event);

    if (event.target.files.length) {
      if (event.target.files[0].size > 2000000) {
        this.toastService.warning(
          "Unable to upload file of size more than 1MB"
        );
        return;
      }
      let file = <File>event.target.files[0];

      // const type = this.file.type;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        let base64: any = reader.result;
        if (key == "productImage") {
          this.file = file;
          this.fileName = file.name;
          this.url = this.domSanitizer.bypassSecurityTrustUrl(base64);
        } else {
          this.productImage = file;
          this.productImageName = file.name;
          this.productImageUrl =
            this.domSanitizer.bypassSecurityTrustUrl(base64);
        }
      };
      reader.onerror = (error) => {
        console.error(error);
      };
    }
  }
}
