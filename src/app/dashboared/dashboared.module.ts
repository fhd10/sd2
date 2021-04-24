import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboaredRoutingModule } from './dashboared-routing.module';
import { DashboaredComponent } from './dashboared.component';
import { ShellModule } from '../shell/shell.module';
import { TempratureModule } from '../components/temprature/temprature.module';
import { ParkingModule } from '../components/parking/parking.module';



@NgModule({
  declarations: [
    DashboaredComponent
  ],
  imports: [
    CommonModule,
    DashboaredRoutingModule,
    ShellModule,
    TempratureModule,
    ParkingModule
  ]
})
export class DashboaredModule { }
