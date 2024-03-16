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
import { ValidationService } from "@core/components";
import { DomSanitizer } from "@angular/platform-browser";
import { TagService } from "@shared/services/tag.service";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: "app-tag-form",
  templateUrl: "./tag-form.component.html",
  styleUrls: ["./tag-form.component.scss"],
})
export class TagFormComponent {
  submitted: boolean = false;
  tagId: string = null;
  fileName: any = "";
  url: any = null;
  file: any = null;

  constructor(
    private router: Router,
    private activated: ActivatedRoute,
    private tagservice: TagService,
    private toastService: ToastService,
    private spinner: SpinnerService,
    private validationService: ValidationService,
    private domSanitizer: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.activated.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.getdataById(params.id);
        this.tagId = params.id;
      }
    });
  }
  FORM_ERRORS = [
    {
      message: "Title is required",
      key: "title",
    },
    {
      message: "Status is required",
      key: "status",
    },
  ];
  tagForm = new FormGroup({
    _id: new FormControl(null),
    title: new FormControl("", [Validators.required]),
    tag: new FormControl(""),
    status: new FormControl("active", [Validators.required]),
  });

  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  reset() {
    this.tagForm.reset();
    if (this.tagId) {
      this.getdataById(this.tagId);
    }
  }

  submit() {
    this.submitted = true;
    if (this.validationService.checkErrors(this.tagForm, this.FORM_ERRORS)) {
      return;
    }
    let tagData: any = this.tagForm.value;
    let formData = new FormData();
    formData.append("key", "tag");
    formData.append("title", tagData.title);
    formData.append("status", tagData.status);
    if (this.file) {
      formData.append("file", this.file);
    }
    if (tagData._id) {
      this.update(tagData._id, formData);
    } else {
      this.create(formData);
    }
  }
  update(_id, formData) {
    this.spinner.show();
    this.tagservice.updateTagById(_id, formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/tag/tag-list"]);
    });
  }

  getdataById(id: any) {
    this.spinner.show();
    this.tagservice.getbyId(id).subscribe((success: any) => {
      this.url = success.image;
      this.tagForm.patchValue(success);
      this.spinner.hide();
    });
  }

  create(formData) {
    this.spinner.show();
    this.tagservice.createTag(formData).subscribe((success: any) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(["default/tag/tag-list"]);
    });
  }
  openUrl(url) {
    window.open(url, "_blank");
  }

  fileChosen(event: any) {
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
    this.router.navigate(["default/tag/tag-list"]);
  }
}
