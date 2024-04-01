import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService, ToastService } from '@core/services';
import { VariantImageService } from '@shared/services/variantImage.service';

@Component({
  selector: 'app-variant-images',
  templateUrl: './variant-images.component.html',
  styleUrls: ['./variant-images.component.scss']
})
export class VariantImagesComponent {
  fileName: any = "";
  url: any = null;
  file: any = null;
  variantId: any;
  options = [];
  imageArr = [];
  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private variantImageService: VariantImageService,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private domSanitizer: DomSanitizer
  ) {}

  imageForm = new FormGroup({
    id: new FormControl(null),
    image: new FormControl(null),
    variantId: new FormControl(null),
  });

  get f() {
    return this.imageForm.controls;
  }


  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getByProductId(params.id);
        this.variantId = params.id;
        this.f["variantId"].setValue(params.id);
      }
    });
  }
  getByProductId(id) {
    this.spinner.show();
    this.variantImageService.getByVariantId(id).subscribe((success: any) => {
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
    this.variantImageService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.url = null;
      this.getByProductId(this.variantId);
    });
  }

  update(id, formData) {
    this.spinner.show();
    this.variantImageService.update(id, formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      // this.router.navigate(["default/category/category-list"]);
    });
  }
  getDataById(id: string) {
    this.spinner.show();
    this.variantImageService.getById(id).subscribe((success: any) => {
      this.url = success.image;
      this.imageForm.patchValue(success);
      this.spinner.hide();
    });
  }
  deleteImg(id: string) {
    this.spinner.show();
    this.variantImageService.delete(id).subscribe((success: any) => {
      this.spinner.hide();
      this.getByProductId(this.variantId);
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
  navigateTo() {
    this.router.navigate(["default/product/product-list"]);
  }
  reset() {
    this.imageForm.reset();
    if (this.variantId) {
      this.getDataById(this.variantId);
    }
  }
  openUrl(url) {
    window.open(url, "_blank");
  }
}
