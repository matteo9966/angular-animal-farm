import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-details-step',
  templateUrl: './profile-details-step.component.html',
  styleUrls: ['./profile-details-step.component.scss']
})
export class ProfileDetailsStepComponent implements OnInit {

  constructor() { }
  @Input('formGroup') profileDetailsFormGroup!:FormGroup; 
  ngOnInit(): void {
  }

}
