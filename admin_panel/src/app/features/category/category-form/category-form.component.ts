import { Component } from "@angular/core";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterOutletContract } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { CategoryService } from "@shared/services/category.service";
import { ValidationService } from "@core/components";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-category-form",
  templateUrl: "./category-form.component.html",
  styleUrls: ["./category-form.component.scss"],
})
export class CategoryFormComponent {
  parentIdArr: any[] = [];
  submitted: boolean = false;
  categoryId: string = null;
  fileName: any = "";
  url: any = null;
  file: any = null;
  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private categoryService: CategoryService,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private domSanitizer: DomSanitizer
  ) { }

  categoryForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    image: new FormControl(null),
    description: new FormControl(null),
    status: new FormControl("active", [Validators.required]),
    parentId: new FormControl(null),

  });
  options = [];
  get f() {
    return this.categoryForm.controls;
  }

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
      if (params?.parendId) {
        this.getAllMasterData(false);
        this.categoryForm.controls.parentId.setValue(params?.parendId);
        console.log("this.categoryForm", this.categoryForm.value);

      }
      if (params.id) {
        this.getAllMasterData(true);
        this.getDataById(params.id);
        this.categoryId = params.id;
      }
    });
  }

  submit() {
    this.submitted = true;
    if (
      this.validationService.checkErrors(this.categoryForm, this.FORM_ERRORS)
    ) {
      return;
    }
    // let categoryData: any = this.categoryForm.value;
    // if (categoryData.parentId == "null") {
    //   categoryData.parentId = null;
    // }
    let formData: FormData = new FormData();
    for (const key in this.categoryForm.value) {
      if (key != 'image') {

        formData.append(key, this.categoryForm.value[key]);
      }
    }
    if (this.file) {
      formData.append('image', this.file, this.file.name);
    }

    if (this.categoryForm.value.id) {
      this.update(this.categoryForm.value.id, formData);
    } else {
      formData.delete('id')
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.categoryService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/category/category-list"]);
    });
  }

  update(id, formData) {
    this.spinner.show();
    this.categoryService
      .update(id, formData)
      .subscribe((success: any) => {
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(["default/category/category-list"]);
      });
  }
  getDataById(id: string) {
    this.spinner.show();
    this.categoryService.getById(id).subscribe((success: any) => {
      this.url = success.image;
      this.categoryForm.patchValue(success);
      this.spinner.hide();
    });
  }

  // getByParentId() {
  //   this.spinner.show();
  //   this.categoryService.getParentId().subscribe((success: any) => {
  //     this.spinner.hide();
  //     this.options = success.map((category) => ({
  //       id: category.id,
  //       name: category.name,
  //     }));
  //     let def = { id: "", name: "Parent" };
  //     this.options.unshift(def);
  //   });
  // }
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
    this.categoryForm.reset();
    if (this.categoryId) {
      this.getDataById(this.categoryId);
    }
  }
  openUrl(url) {
    window.open(url, "_blank");
  }

  getAllMasterData(category) {
    this.categoryService.getAll({ category: category }).subscribe((success: any) => {
      console.log("success", success);
      this.parentIdArr = success.rows
      // if (success?.length) {
      //   this.parentIdArr = success.map((x: any) => {
      //     return {
      //       label: x.name,
      //       value: x.id,
      //     };
      //   });
      // }

    });
  }
  customEventHandler(ev) {
    switch (ev.action) {
      case 'EDIT':
        if (ev.data.image) {
          this.url = ev.data.image;
        }
        this.categoryForm.patchValue(ev.data);
        break;

      default:
        break;
    }

  }
}
