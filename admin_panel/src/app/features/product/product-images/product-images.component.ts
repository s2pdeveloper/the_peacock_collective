import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { ValidationService } from "@core/components";
import { SpinnerService, ToastService } from "@core/services";
import { ProductService } from "@shared/services/product.service";
import { ProductImageService } from "@shared/services/productImage.service";

@Component({
  selector: "app-product-images",
  templateUrl: "./product-images.component.html",
  styleUrls: ["./product-images.component.scss"],
})
export class ProductImagesComponent {
  fileName: any = "";
  url: any = null;
  file: any = null;
  productId: any;
  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private productImageService: ProductImageService,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private domSanitizer: DomSanitizer
  ) {}

  imageForm = new FormGroup({
    id: new FormControl(null),
    image: new FormControl(null),
    productId: new FormControl(null),
  });
  options = [];
  get f() {
    return this.imageForm.controls;
  }
  imageArr = [];

  FORM_ERRORS = [
    {
      message: "Name is required",
      key: "name",
    },
    {
      message: "Slug is required",
      key: "slug",
    },
    {
      message: "Status is required",
      key: "status",
    },
  ];

  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getByProductId(params.id);
        this.productId = params.id;
        this.f["productId"].setValue(params.id);
      }
    });
  }
  getByProductId(id) {
    this.spinner.show();
    this.productImageService.getByProductId(id).subscribe((success: any) => {
      this.imageArr = success;
      this.spinner.hide();
    });
  }

  submit() {
    // this.submitted = true;
    // let categoryData: any = this.imageForm.value;
    // if (categoryData.parentId == "null") {
    //   categoryData.parentId = null;
    // }
    let formData: FormData = new FormData();
    for (const key in this.imageForm.value) {
      if (key != "image") {
        formData.append(key, this.imageForm.value[key]);
      }
    }
    if (this.file) {
      formData.append("image", this.file, this.file.name);
    }

    if (this.imageForm.value.id) {
      this.update(this.imageForm.value.id, formData);
    } else {
      formData.delete("id");
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.productImageService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.url = null;
      this.getByProductId(this.productId);
    });
  }

  update(id, formData) {
    this.spinner.show();
    this.productImageService.update(id, formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      // this.router.navigate(["default/category/category-list"]);
    });
  }
  getDataById(id: string) {
    this.spinner.show();
    this.productImageService.getById(id).subscribe((success: any) => {
      this.url = success.image;
      this.imageForm.patchValue(success);
      this.spinner.hide();
    });
  }
  deleteImg(id: string) {
    this.spinner.show();
    this.productImageService.delete(id).subscribe((success: any) => {
      this.spinner.hide();
      this.getByProductId(this.productId);
    });
  }

  fileChosen(event: any) {
    console.log("event.target.files", event);

    if (event.target.files.length) {
      if (event.target.files[0].size > 2000000) {
        this.toastService.warning(
          "Unable to upload file of size more than 1MB"
        );
        return;
      }
      this.file = <File>event.target.files[0];
      this.fileName = this.file.name;
      const type = this.file.type;
      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = () => {
        let base64: any = reader.result;
        this.url = this.domSanitizer.bypassSecurityTrustUrl(base64);
      };
      reader.onerror = (error) => {
        console.error(error);
      };
    }
  }
  back() {
    this.router.navigate(["default/product/product-list"]);
  }
  reset() {
    this.imageForm.reset();
    if (this.productId) {
      this.getDataById(this.productId);
    }
  }
  openUrl(url) {
    window.open(url, "_blank");
  }

  // getAllMasterData() {
  //   this.productImageService.getAll({ catagory: true }).subscribe((success: any) => {
  //     console.log("success", success);
  //     this.parentIdArr = success.rows
  //     // if (success?.length) {
  //     //   this.parentIdArr = success.map((x: any) => {
  //     //     return {
  //     //       label: x.name,
  //     //       value: x.id,
  //     //     };
  //     //   });
  //     // }

  //   });
  // }
}
