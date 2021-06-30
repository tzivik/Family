import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionsFormComponent } from './family/instructions-form/instructions-form.component';

const routes: Routes = [
  {path:"",component:InstructionsFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
