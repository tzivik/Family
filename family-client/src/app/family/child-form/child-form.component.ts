import { Component, OnInit,EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FamilyService } from '../family.service';
import { Child } from '../models/child.model';
import { Parent } from '../models/parent.model';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit {

  constructor(private familyService:FamilyService,private router:Router) { }
  childForm!:FormGroup;
  childToAdd!:Child;
  //שמירת הילד להורה וחזרה לטופס ההורה
  SaveChild(){
    if(this.familyService.currentFamily.children==undefined)
      this.familyService.currentFamily.children=[];
    this.childToAdd=new Child();
    this.childToAdd=this.childForm.value; 
    this.familyService.currentFamily.children.push(this.childToAdd);
    this.router.navigate(["/parent"]);
  }
  //מעבר לטופס ההורה
  GoToParent(){
    this.router.navigate(["/parent"]);
  }
  flag:boolean=false;
  //חיסוב נכונות התאריך בטופס
  correctDate(){
    const date=new Date(Date.now());
    const choose:Date=new Date(this.childForm.controls.dateOfBorn.value);
    if(date.getFullYear()-120>choose.getFullYear() || date.getDate()<choose.getDate())
      this.flag=true;
    else
      this.flag=false;
    console.log(this.flag);
  }
  ngOnInit(): void {
    //טופס הילד:
    this.childForm=new FormGroup({
      "id":new FormControl('',[Validators.required,Validators.pattern('[0-9]{8,9}')]),
      "name":new FormControl('',[Validators.required,Validators.pattern('[A-Za-z ]{2,10}')]),
      "dateOfBorn":new FormControl('',[Validators.required])
    })
  }

}
