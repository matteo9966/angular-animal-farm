import { IDetailAnimal, IGeneralAnimal } from "../../animal.interface";


export type AnimalGeneralFormControls = keyof IGeneralAnimal;
export type AnimalDetailFormControls = keyof IDetailAnimal;