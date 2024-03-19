import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { ValidationService } from "@core/components";
import { SpinnerService, ToastService } from "@core/services";
import { CategoryService } from "@shared/services/category.service";
import { ProductService } from "@shared/services/product.service";

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
  categoryOptions: any = [];
  autoIncrementNos: any = {};
  file: any = null;
  fileName: any = "";
  url: any = null;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private spinner: SpinnerService,
    private toastService: ToastService,
    private categoryService: CategoryService,
    private domSanitizer: DomSanitizer,
    private validationService: ValidationService
  ) {}

  ngOnInit(): void {
    // this.getAllMasterData();
  }
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
    _id: new FormControl(null),
    code: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    description: new FormControl(null),
    shortDescription: new FormControl(null, [Validators.required]),
    standardRate: new FormControl(null),
    status: new FormControl("active", [Validators.required]),
    gst: new FormControl(3),
  });

  get form() {
    return this.productForm.controls;
  }
  back() {
    this.router.navigate(["default/product/product-list"]);
  }

  onSubmit() {
    this.submitted = true;
    if (
      this.validationService.checkErrors(this.productForm, this.FORM_ERRORS)
    ) {
      return;
    }
    let productData: any = this.productForm.value;

    if (productData._id) {
      this.update(productData._id, productData);
    } else {
      delete productData._id;
      this.create(productData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.productService.createProduct(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/product/product-list"]);
    });
  }

  update(_id, formData) {
    this.spinner.show();
    this.productService
      .updateProductById(_id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["default/product/product-list"]);
      });
  }

  resetForm() {
    this.productForm.reset();
    this.getAllMasterData();
  }
  getById(id: string) {
    this.spinner.show();
    this.productService.getById(id).subscribe((success: any) => {
      this.productForm.patchValue(success);
      this.spinner.hide();
    });
  }
  getProductCode(ev) {
    this.productForm.controls["code"].setValue(
      this.autoIncrementNos[ev.target.value]
    );
  }
  getAllMasterData() {
    this.productService.getAllMasterData({}).subscribe((success: any) => {
      this.autoIncrementNos = success.autoIncrementNos;
      this.categoryOptions = success.categories;
      this.activatedRoute.queryParams.subscribe((params: any) => {
        if (params.id) {
          this.getById(params.id);
        }
      });
    });
  }
}
