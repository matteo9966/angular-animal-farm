import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDetailsStepComponent } from './general-details-step.component';

describe('GeneralDetailsStepComponent', () => {
  let component: GeneralDetailsStepComponent;
  let fixture: ComponentFixture<GeneralDetailsStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralDetailsStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDetailsStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
