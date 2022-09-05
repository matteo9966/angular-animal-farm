import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent implements OnInit {

  /* 
  export interface IAnimal { 
    id:number;
    name:string;
    birthday:string|Date;
    gender:string;

    species:string;
    shortDescription:string;
    longDescription:string;
    imageUrl:string;

  
    
}
  
  */

  animalForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  submittedForm!:{[key:string]:string|number};

  ngOnInit(): void {
    this.createForm(); //creo il form
  }
  
  createForm(){
    this.animalForm = this.fb.group({
     generalDetails:this.fb.group({
      id:this.fb.control('',{validators:Validators.required}),
      name:this.fb.control('',{validators:Validators.required}),
      birthday:this.fb.control('',{validators:Validators.required}),
      species:this.fb.control('',{validators:Validators.required}),
      gender:this.fb.control('M',{validators:Validators.required}),
    }),
     profileDetails:this.fb.group({
      shortDescription:this.fb.control('',{validators:Validators.required}),
      longDescription:this.fb.control('',{validators:Validators.required}),
      imageUrl:this.fb.control('',{validators:Validators.required}),
     })
    })
  }

  get generalDetailsFormGroup(){
    return this.animalForm.get('generalDetails') as FormGroup;
  }
  get profileDetailsFormGroup(){
    return this.animalForm.get('profileDetails') as FormGroup;
  }

  submitForm(){
    // if(this.animalForm.invalid){
    //   return;
    // }

    console.log(this.animalForm)
    this.submittedForm = this.animalForm.value;
    
  }


}
