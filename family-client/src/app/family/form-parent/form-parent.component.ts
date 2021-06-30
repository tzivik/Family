import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChildrenOutletContexts, Router } from '@angular/router';
import { FamilyService } from '../family.service';
import {  Kinds, Parent } from '../models/parent.model';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.css']
})
export class FormParentComponent implements OnInit {

  constructor(private serviceFamily:FamilyService,private _router:Router) { }
   _currentParent!:Parent;
  hmo:string[]=["clalit","mehuchedet","leumit","macabi"];
  kind!:Kinds;
  parentForm!:FormGroup;
  //ניווט לדף הסבר על הטופס לפני כן שמירת המשפחה הנוכחית
  toInstruction(){
    this.serviceFamily.currentFamily=this.parentForm.value;
    this.serviceFamily.currentFamily.children=this._currentParent.children;
    this._router.navigate(["/instruction"]);
  }
  //מחיקת ילד 
  deleteChild(id:string){
    const index=this._currentParent.children.findIndex(c=>c.id==id);
    this._currentParent.children.splice(index);
    console.log(this._currentParent.children)
  }
  //הוספת ילד לפני כן עדכון הנתונים 
  addChild(){
    this.serviceFamily.currentFamily=this.parentForm.value;
    this.serviceFamily.currentFamily.children=this._currentParent.children;
    this._router.navigate(["/child"]);
  }
  //שמירת המשתמש- המשפחה הנוכחית , הורדת הנתונים לקובץ אקסל , והתחלת משפחה-משתמש חדש
  saveFamily(){
    this.serviceFamily.currentFamily=this.parentForm.value;
    this.serviceFamily.currentFamily.children=this._currentParent.children;
    this.serviceFamily.saveFamily().subscribe(()=>{
      alert('family saved successful');
      this.exportToCsv();
      this.serviceFamily.currentFamily=new Parent();
      this._currentParent=new Parent();
      this.ngOnInit();
    },
    err=>alert("family did'nt saved"));

  }
  //הורדת נתוני הטופס לקובץ אקסל
  exportToCsv (){
    var CsvString = "";
    CsvString+= "Id"+',';
    CsvString+= "firstName"+',';
    CsvString+= "lastName"+',';
    CsvString+= "dateOfBirth"+',';
    CsvString+= "kind"+',';
    CsvString+= "Hmo"+',';
    CsvString += "\n";
    CsvString+= this.serviceFamily.currentFamily.id  + ',';;
    CsvString+= this.serviceFamily.currentFamily.firstName + ',';
    CsvString+= this.serviceFamily.currentFamily.lastName + ',';
    CsvString+= this.serviceFamily.currentFamily.dateOfBirth + ',';
    CsvString+= this.serviceFamily.currentFamily.kind + ',';
    CsvString+= this.serviceFamily.currentFamily.Hmo + ','+"\n";
    CsvString+= "Children"+',';
    CsvString += "\n";
    CsvString+= "Id"+',';
    CsvString+= "Name"+',';
    CsvString+= "dateOfBirth"+',';
    CsvString += "\n";
    this.serviceFamily.currentFamily.children.forEach(c=>{
      CsvString+= c.id+',';
      CsvString+= c.name+',';
      CsvString+= c.dateOfBorn+',';
      CsvString += "\n";
    })
    CsvString = "data:application/csv," + encodeURIComponent(CsvString);
    var anchor = document.createElement("A");
    anchor.setAttribute("href", CsvString);
    anchor.setAttribute("download", "family.csv");
    document.body.append(anchor);
    anchor.click();
}
  flag:boolean=false;
  //פונקציה הבודקת תקינות של תאריך של הטופס
  correctDate(){
    const date=new Date(Date.now());
    const choose:Date=new Date(this.parentForm.controls.dateOfBirth.value);
    if(date.getFullYear()-18<choose.getFullYear() || date.getFullYear()-120>choose.getFullYear())
      this.flag=true;
    else
      this.flag=false;
    console.log(this.flag);
  }

  ngOnInit(): void {
    this._currentParent=this.serviceFamily.currentFamily;
    //נטופס:
    this.parentForm=new FormGroup({
      "id":new FormControl(this._currentParent.id,[Validators.required,Validators.pattern('[0-9]{8,9}')]),
      "firstName":new  FormControl(this._currentParent.firstName,[Validators.required,Validators.pattern('[A-Za-z ]{2,10}')]),
      "lastName":new FormControl(this._currentParent.lastName,[Validators.required,Validators.pattern('[A-Za-z ]{2,13}')]),
      "dateOfBirth":new FormControl(this._currentParent.dateOfBirth,[Validators.required]),
      "kind":new FormControl(this._currentParent.kind,[Validators.required]),
      "Hmo":new FormControl(this._currentParent.Hmo,[Validators.required]),
    })
    
  }
  
}
