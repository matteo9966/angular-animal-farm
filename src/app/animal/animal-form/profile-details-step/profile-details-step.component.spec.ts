import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsStepComponent } from './profile-details-step.component';

describe('ProfileDetailsStepComponent', () => {
  let component: ProfileDetailsStepComponent;
  let fixture: ComponentFixture<ProfileDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDetailsStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
