import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { ValidationService } from "@core/components";
import { SpinnerService, ToastService } from "@core/services";
import { AttributeService } from "@shared/services/attribute.service";
import { CategoryService } from "@shared/services/category.service";
import { ProductService } from "@shared/services/product.service";
import { TagsService } from "@shared/services/tags.service";

@Component({
  selector: "app-product-info-form",
  templateUrl: "./product-info-form.component.html",
  styleUrls: ["./product-info-form.component.scss"],
})
export class ProductInfoFormComponent {
  Show: string;
  page: any = 1;
  pageSize: any = 10;
  search: any = "";
  productId: any;
  categoryOptions: any = [];
  autoIncrementNos: any = {};
  file: any = null;
  fileName: any = "";
  url: any = null;
  submitted: boolean = false;
  categoryArr = [];
  attributeArr = [];
  attributes = [];
  tags = [];
  productImage: any = null;
  productImageName: any = "";
  productImageUrl: any = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private attributeService: AttributeService,
    private tagsService: TagsService,
    private spinner: SpinnerService,
    private toastService: ToastService,
    private domSanitizer: DomSanitizer,
    private validationService: ValidationService
  ) {}

  FORM_ERRORS = [
    {
      message: "Category is Required",
      key: "category",
    },
    {
      message: "Product Name is Required",
      key: "name",
    },

    {
      message: "Short Description is Required",
      key: "shortDescription",
    },
    {
      message: "Status is Required",
      key: "status",
    },
  ];
  productForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    categoryId: new FormControl(null, [Validators.required]),
    description: new FormControl(null),
    hsn: new FormControl(null),
    gst: new FormControl(null),
    inStock: new FormControl(false),
    isTrending: new FormControl(false),
    cod: new FormControl(false),
    inSale: new FormControl(false),
    salePrice: new FormControl(null),
    returnableDays: new FormControl(null),
    soldIndividually: new FormControl(false),
    bannerImage: new FormControl(null),
    tagId: new FormControl([]),
    status: new FormControl("active"),
  });
  get form() {
    return this.productForm.controls;
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllAttribute();
    this.getAllTags();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getById(params.id);
        this.productId = params.id;
      }
    });
  }

  navigateTo() {
    this.router.navigate(["default/product/product-list"]);
  }

  getAllCategory() {
    this.categoryService.getAll({ category: true }).subscribe((success) => {
      this.categoryArr = success.rows;
    });
  }
  getAllTags() {
    this.tagsService.getAll({}).subscribe((success) => {
      this.tags = success.rows;
    });
  }
  getAllAttribute() {
    this.attributeService.getAll({}).subscribe((success) => {
      this.attributes = success.rows;
      console.log("attributeArr", this.attributes);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (
      this.validationService.checkErrors(this.productForm, this.FORM_ERRORS)
    ) {
      return;
    }

    // let formData: FormData = new FormData();
    // for (const key in this.productForm.value) {
    //   if (key != "image") {
    //     console.log("key=====", key);

    //     formData.append(key, this.productForm.value[key]);
    //   }
    // }
    // if (this.file) {
    //   // formData.append('key', 'category');
    //   formData.append("image", this.file, this.file.name);
    // }
    let formData: FormData = new FormData();
    for (const key in this.productForm.value) {
      if (key == "tagId") {
        formData.append(
          key,
          JSON.stringify(this.productForm.value[key])
        );
        continue;
      }
      if (key != "bannerImage") {
        formData.append(key, this.productForm.value[key]);
      }
    }
    if (this.file) {
      formData.append("image", this.file, this.file.name);
    }
    if (this.attributeArr.length) {
      let attr = this.attributes
        .filter((x) => this.attributeArr.includes(x.id))
        .map((y) => {
          return {
            id: y.id,
            name: y.name,
          };
        });
      formData.append("attributeArr", JSON.stringify(attr));
    }

    if (this.productForm.value.id) {
      this.update(this.productForm.value.id, formData);
    } else {
      formData.delete("id");
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.productService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/product/product-list"]);
    });
  }

  update(id, formData) {
    this.spinner.show();
    this.productService.update(id, formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/product/product-list"]);
    });
  }
  deleteImg() {
    this.url = null;
  }
  resetForm() {
    this.productForm.reset();
    // this.getAllMasterData();
  }
  getById(id: string) {
    this.spinner.show();
    this.productService.getById(id).subscribe((success: any) => {
      console.log("success", success);

      if (success.bannerImage) {
        this.url = success.bannerImage;
      }
      if (
        success?.productWithProdAttributeMap &&
        success?.productWithProdAttributeMap.length
      ) {
        this.attributeArr = success?.productWithProdAttributeMap.map(
          (x) => x.attributeId
        );
      }
      if(success?.productWithTagMap.length){
        success.tagId=success?.productWithTagMap.map(x=>x.tagId);
      }

      this.productForm.patchValue(success);
      this.spinner.hide();
    });
  }
  getProductCode(ev) {
    // this.productForm.controls["code"].setValue(
    //   this.autoIncrementNos[ev.target.value]
    // );
  }
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
        if (key == "bannerImage") {
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
  onAttrChange(ev: any) {
    this.attributeArr = [];
    console.log("ev", ev);
    for (const item of ev) {
      this.attributeArr.push(item.id);
    }
    this.attributeArr = [...this.attributeArr];

    console.log("attr333333333333333333", this.attributeArr);
  }
  // getAllMasterData() {
  //   this.productService.getAllMasterData({}).subscribe((success: any) => {
  //     this.autoIncrementNos = success.autoIncrementNos;
  //     this.categoryOptions = success.categories;
  //     this.activatedRoute.queryParams.subscribe((params: any) => {
  //       if (params.id) {
  //         this.getById(params.id);
  //       }
  //     });
  //   });
  // }
}
