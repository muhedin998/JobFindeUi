import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobListingComponent } from './add-job-listing.component';

describe('AddJobListingComponent', () => {
  let component: AddJobListingComponent;
  let fixture: ComponentFixture<AddJobListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJobListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
