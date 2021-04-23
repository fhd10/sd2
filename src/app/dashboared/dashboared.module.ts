import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboaredRoutingModule } from './dashboared-routing.module';
import { DashboaredComponent } from './dashboared.component';
import { ShellModule } from '../shell/shell.module';


@NgModule({
  declarations: [
    DashboaredComponent
  ],
  imports: [
    CommonModule,
    DashboaredRoutingModule,
    ShellModule
  ]
})
export class DashboaredModule { }
