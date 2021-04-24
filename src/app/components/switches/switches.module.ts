import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchesComponent } from './switches.component';
import { MatCardModule} from '@angular/material/card'
import { MatSlideToggleModule} from '@angular/material/slide-toggle'

@NgModule({
  declarations: [
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  exports:[
    SwitchesComponent
  ]
})
export class SwitchesModule { }
