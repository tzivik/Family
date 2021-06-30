import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildFormComponent } from './child-form/child-form.component';
import { FormParentComponent } from './form-parent/form-parent.component';
import { InstructionsFormComponent } from './instructions-form/instructions-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {path:"",pathMatch:"full",redirectTo:"instruction"},
    {path:"instruction",component:InstructionsFormComponent},
    {path:"parent",component:FormParentComponent},
    {path:"child",component:ChildFormComponent},
    {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyRoutingModule { }
