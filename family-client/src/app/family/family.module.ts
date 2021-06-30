import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildFormComponent } from './child-form/child-form.component';
import { FormParentComponent } from './form-parent/form-parent.component';
import { InstructionsFormComponent } from './instructions-form/instructions-form.component';
import { FamilyRoutingModule } from './family-routing.module';
import { FamilyService } from './family.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [ChildFormComponent,FormParentComponent,InstructionsFormComponent,PageNotFoundComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    FamilyRoutingModule,CommonModule,HttpClientModule,
  ],
  providers:[FamilyService]
})
export class FamilyModule { }
