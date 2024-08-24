import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-landing-search",
  templateUrl: "./landing-search.component.html",
  styleUrls: ["./landing-search.component.scss"],
})
export class LandingSearchComponent implements OnInit {
  jobSearchForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.jobSearchForm = this.fb.group({
      category: ["", Validators.required],
      location: ["", Validators.required],
      employmentType: [""], // Optional field
      experienceLevel: [""], // Optional field
      keywords: [""], // Optional field
    });
  }
}
