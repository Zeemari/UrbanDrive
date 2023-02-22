import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstantRoutingModule } from './instant-routing.module';
import { InstantComponent } from './instant.component';


@NgModule({
  declarations: [
    InstantComponent
  ],
  imports: [
    CommonModule,
    InstantRoutingModule
  ]
})
export class InstantModule { }
