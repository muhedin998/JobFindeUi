import { Component, OnInit, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Grad } from "src/app/models/grad.model";
import { GRADOVI } from "src/app/core/constants/gradovi";
import { JobModel } from "src/app/models/job.model";
import { JoblistingService } from "src/app/services/joblisting.service";

@Component({
  selector: "app-add-job-listing",
  templateUrl: "./add-job-listing.component.html",
  styleUrls: ["./add-job-listing.component.scss"],
})
export class AddJobListingComponent implements OnInit {
  gradovi: Grad[] = GRADOVI;
  fb = inject(FormBuilder);
  form = this.fb.nonNullable.group({
    titel: ["", Validators.required],
    description: ["", Validators.required],
    location: ["", Validators.required],
    salary: ["", Validators.required],
    requirmnets: ["", Validators.required],
    datePosted: ["", Validators.required],
  });

  ngOnInit(): void {}
  constructor(private joblistingService: JoblistingService) {}

  onSubmit() {
    this.form.markAllAsTouched();
    console.log(this.form.getRawValue());
    if (!this.form.valid) {
      console.error("***ERROR FORM NOT VALID***");
    } else {
      this.joblistingService.createJobListing(
        this.form.getRawValue() as unknown as JobModel,
      );
      console.log("***GREAT FORM IS VALID***");
    }
  }

  isFieldInvalid(fieldName: string) {
    const control = this.form.get(fieldName);
    return control?.invalid && (control?.dirty || control?.touched);
  }
}
