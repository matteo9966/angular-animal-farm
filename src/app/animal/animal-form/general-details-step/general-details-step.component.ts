import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { AnimalService } from '../../animal.service';
import { AnimalGeneralFormControls } from '../constants/animal-form-control-names';

@Component({
  selector: 'app-general-details-step',
  templateUrl: './general-details-step.component.html',
  styleUrls: ['./general-details-step.component.scss'],
})
export class GeneralDetailsStepComponent implements OnInit {
  /*
    id:number;
    name:string;
    birthday:string|Date;
    gender:string;
*/

  constructor(private animalService:AnimalService) {}
  @Input('formGroup') generalDetailsFormGroup!: FormGroup;
  ngOnInit(): void {}

  getControlProperty(controlName: AnimalGeneralFormControls) {
    return this.generalDetailsFormGroup.get(controlName) as FormControl;
  }

  getControlPropertyError(
    controlName: AnimalGeneralFormControls,
    error: string
  ) {
    if(error==='required' && this.generalDetailsFormGroup.get(controlName)?.errors?.[error]){
      return `${controlName} is required`
    }
    return `${controlName} has a field errror`

  }

  get animalSpeciesListOption(){
    return this.animalService.species;
  }

  get selectedSpeciesElement(){
    return this.generalDetailsFormGroup.get('species')?.value || "";
  }
}
