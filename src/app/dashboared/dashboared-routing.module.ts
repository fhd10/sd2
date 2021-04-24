import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboaredComponent } from './dashboared.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard'

const redirectUnauthorizedToLogin =() => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {path:'dashboared', component: DashboaredComponent, canActivate:[AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboaredRoutingModule { }
