import { Component, OnInit } from '@angular/core';
import { FamilyService } from '../family.service';

@Component({
  selector: 'app-instructions-form',
  templateUrl: './instructions-form.component.html',
  styleUrls: ['./instructions-form.component.css']
})
export class InstructionsFormComponent implements OnInit {

  constructor(private familyService:FamilyService) { }

  userName:string=this.familyService.currentFamily.firstName!=undefined && this.familyService.currentFamily.lastName!=undefined?
  "Hello "+this.familyService.currentFamily.firstName+" "+this.familyService.currentFamily.lastName:"Hello";
  
  ngOnInit(): void {
  }

}
