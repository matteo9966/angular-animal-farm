import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { GeneralDetailsStepComponent } from './animal-form/general-details-step/general-details-step.component';
import { ProfileDetailsStepComponent } from './animal-form/profile-details-step/profile-details-step.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AnimalFormComponent,
    AnimalsComponent,
    GeneralDetailsStepComponent,
    ProfileDetailsStepComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule

  ],
  exports:[AnimalFormComponent]

})
export class AnimalModule { }
