import { Component } from "@angular/core";
import {
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { CategoryService } from "@shared/services/category.service";
import { ValidationService } from "@core/components";
import { DomSanitizer } from "@angular/platform-browser";
import { ProductImageService } from "@shared/services/productImage.service";

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent {
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
  ) { }

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
        this.getDataById(params.id);
        this.productId = params.id;
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
    if (
      this.validationService.checkErrors(this.imageForm, this.FORM_ERRORS)
    ) {
      return;
    }
    // let categoryData: any = this.imageForm.value;
    // if (categoryData.parentId == "null") {
    //   categoryData.parentId = null;
    // }
    let formData: FormData = new FormData();
    for (const key in this.imageForm.value) {
      if (key != 'image') {

        formData.append(key, this.imageForm.value[key]);
      }
    }
    if (this.file) {
      formData.append('image', this.file, this.file.name);
    }

    if (this.imageForm.value.id) {
      this.update(this.imageForm.value.id, formData);
    } else {
      formData.delete('id')
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.productImageService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/category/category-list"]);
    });
  }

  update(id, formData) {
    this.spinner.show();
    this.productImageService
      .update(id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["default/category/category-list"]);
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

  fileChosen(event: any) {
    console.log('event.target.files', event);

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
    this.router.navigate(["default/category/category-list"]);
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
