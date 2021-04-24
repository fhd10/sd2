import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const redirectauthorizedTodashboared =() => redirectLoggedInTo(['dashboared']);

const routes: Routes = [
  {path: 'login', component:LoginComponent , canActivate:[AngularFireAuthGuard], data: {authGuardPipe: redirectauthorizedTodashboared}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
