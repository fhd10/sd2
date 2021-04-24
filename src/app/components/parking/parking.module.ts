import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParkingComponent } from './parking.component';



@NgModule({
  declarations: [
    ParkingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParkingComponent
  ]
})
export class ParkingModule { }
