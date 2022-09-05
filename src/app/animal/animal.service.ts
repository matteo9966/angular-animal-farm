import { Injectable } from '@angular/core';
import { IAnimal } from './animal.interface';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private _species = ['cow', 'dog', 'fish', 'cat', 'rhino', 'koala', 'duck'];
  private _mockAnimals: IAnimal[] = [
    {
      birthday: new Date().toString(),
      gender: 'M',
      id: 2,
      imageUrl: '',
      longDescription: 'animale1 desc',
      name: 'Mucca',
      shortDescription: 'short description of animale1',
      species: 'cow',
    },
    {
      birthday: new Date().toString(),
      gender: 'M',
      id: 3,
      imageUrl: '',
      longDescription: 'animale2 desc',
      name: 'Fishy',
      shortDescription: 'short description of animale1',
      species: 'fish',
    },
    {
      birthday: new Date().toString(),
      gender: 'F',
      id: 4,
      imageUrl: '',
      longDescription: 'animale3 desc',
      name: 'Mou',
      shortDescription: 'short description of animale1',
      species: 'cow',
    },
    {
      birthday: new Date().toString(),
      gender: 'M',
      id: 5,
      imageUrl: '',
      longDescription: 'animale4 desc',
      name: 'catty',
      shortDescription: 'short description of animale1',
      species: 'cat',
    },

  ];
  constructor() {}

  get species() {
    return this._species;
  }

  get animalList(){
    return this._mockAnimals
  }
}
