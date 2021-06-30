import { Child } from "./child.model";

export enum Kinds{
    male,
    female
}

export class Parent{
    firstName!:string;
    lastName!:string;
    id!:string;
    dateOfBirth!:Date;
    kind!:Kinds;
    Hmo!:string;
    children:Child[]=[];
}