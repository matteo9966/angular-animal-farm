import { Component, OnInit } from '@angular/core';
import { IAnimal } from '../animal.interface';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-data-table',
  templateUrl: './animal-data-table.component.html',
  styleUrls: ['./animal-data-table.component.scss']
})
export class AnimalDataTableComponent implements OnInit {

  constructor(private animalService:AnimalService) { }

  ngOnInit(): void {
  }

  get animalsList(){
    return this.animalService.animalList;
  }

  get displayedColumns(){
    let animalProps:(keyof IAnimal)[]=[];
    animalProps.push('name')
    animalProps.push('gender');
    animalProps.push('birthday');
    animalProps.push('species');
    return animalProps;
  }

}
