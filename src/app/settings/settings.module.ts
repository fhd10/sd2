import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { ShellModule } from '../shell/shell.module';
import { SwitchesModule } from '../components/switches/switches.module';


@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    ShellModule,
    SwitchesModule
  ]
})
export class SettingsModule { }
