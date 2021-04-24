import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempratureComponent } from './temprature.component';
import { ChartsModule} from 'ng2-charts'


@NgModule({
  declarations: [
    TempratureComponent
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    TempratureComponent
  ]
})
export class TempratureModule { }
