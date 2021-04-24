import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

const redirectUnauthorizedToLogin =() => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {path: 'settings' , component:SettingsComponent,  canActivate:[AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}}
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
