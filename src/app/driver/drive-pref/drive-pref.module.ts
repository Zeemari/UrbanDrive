import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrivePrefRoutingModule } from './drive-pref-routing.module';
import { DrivePrefComponent } from './drive-pref.component';


@NgModule({
  declarations: [
    DrivePrefComponent
  ],
  imports: [
    CommonModule,
    DrivePrefRoutingModule
  ]
})
export class DrivePrefModule { }
