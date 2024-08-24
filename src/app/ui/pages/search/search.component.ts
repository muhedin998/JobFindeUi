import { Component, inject, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import {
  combineLatest,
  debounceTime,
  filter,
  fromEvent,
  map,
  Observable,
  of,
  switchMap,
  tap,
} from "rxjs";
import { JobModel } from "src/app/models/job.model";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  names: Observable<string[]> = of([
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Grabe",
    "Henry",
    "Ivy",
    "Jack",
    "Katherine",
    "Leo",
    "Mia",
    "Nathan",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Samuel",
    "Taylor",
  ]);

  search: HTMLElement = document.getElementById("exampleInputusername")!;
  fb = inject(FormBuilder);
  searchResult?: Observable<JobModel[]>;
  form = this.fb.nonNullable.group({
    search: [""],
  });

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.searchResult = fromEvent(
      document.getElementById("exampleInputusername")!,
      "input",
    ).pipe(
      debounceTime(700),
      switchMap(() =>
        this.appService.getJobByTitle(this.form.getRawValue().search),
      ),
      //map(namesArray => namesArray.filter(name => name.includes(this.form.getRawValue().search))),
    );
  }
}
