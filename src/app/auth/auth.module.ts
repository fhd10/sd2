import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

import {MatCardModule} from "@angular/material/card"
import { MatFormFieldModule } from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import { MatIconModule} from "@angular/material/icon"
import {MatButtonModule } from "@angular/material/button"
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class AuthModule { }
