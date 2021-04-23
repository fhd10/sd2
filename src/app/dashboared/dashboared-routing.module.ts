import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboaredComponent } from './dashboared.component';

const routes: Routes = [
  {path:'dashboared', component: DashboaredComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboaredRoutingModule { }
