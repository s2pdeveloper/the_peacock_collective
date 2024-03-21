import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SpinnerService, ToastService } from "@core/services";
import { AttributeService } from "@shared/services/attribute.service";

@Component({
  selector: "app-attibute-form",
  templateUrl: "./attibute-form.component.html",
  styleUrls: ["./attibute-form.component.scss"],
})
export class AttibuteFormComponent implements OnInit {
  attributeForm = this.fb.group({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required]),
    value: this.fb.array([]),
    status: new FormControl("active", [Validators.required]),
  });
  options = [];
  attributeId: number = null;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private attributeService: AttributeService,
    private fb: FormBuilder
  ) {}
  get f() {
    return this.attributeForm.controls;
  }
  // Helper method to get the 'items' FormArray

  get attributeValues(): FormArray {
    return this.attributeForm.get("value") as FormArray;
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
    // this.getAllMasterData();
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getDataById(params.id);
        this.attributeId = params.id;
      } else {
        this.addValue();
      }
    });
  }
  newValue(value = ""): FormGroup {
    return this.fb.group({
      value: ["", Validators.required],
    });
  }
  addValue(value = "") {
    // Add the new form group to the FormArray
    this.attributeValues.push(this.newValue(value));
  }

  removeValue(i: number) {
    this.attributeValues.removeAt(i);
  }

  submit() {
    console.log(this.attributeForm.value);

    // this.submitted = true;
    // if (
    //   this.validationService.checkErrors(this.categoryForm, this.FORM_ERRORS)
    // ) {
    //   return;
    // }

    let formData = this.attributeForm.value;

    if (this.attributeForm.value.id) {
      this.update(this.attributeForm.value.id, formData);
    } else {
      // formData.delete('id')
      delete formData.id;
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.attributeService.create(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/attribute/attribute-list"]);
    });
  }

  update(id, formData) {
    this.spinner.show();
    this.attributeService.update(id, formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/attribute/attribute-list"]);
    });
  }
  getDataById(id) {
    this.spinner.show();
    this.attributeService.getById(id).subscribe((success: any) => {
      if (success.value) {
        for (const item of success?.value) {
          this.addValue(item.value);
        }
      }else{
        this.addValue();
      }
      this.attributeForm.patchValue(success);
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

  back() {
    this.router.navigate(["default/attribute/attribute-list"]);
  }
  reset() {
    this.attributeForm.reset();
    if (this.attributeId) {
      this.getDataById(this.attributeId);
    }
  }
  openUrl(url) {
    window.open(url, "_blank");
  }

  // getAllMasterData() {
  //   this.categoryService.getAll({ catagory: true }).subscribe((success: any) => {
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
