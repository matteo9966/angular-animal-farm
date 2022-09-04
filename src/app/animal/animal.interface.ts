export interface IAnimal extends IGeneralAnimal,IDetailAnimal{};


export interface IGeneralAnimal{
    id:number;
    name:string;
    birthday:string|Date;
    gender:string; //male || female
}

export interface IDetailAnimal{
    species:string;
    shortDescription:string;
    longDescription:string;
    imageUrl:string;
}