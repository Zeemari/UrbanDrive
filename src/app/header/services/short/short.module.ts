import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShortRoutingModule } from './short-routing.module';
import { ShortComponent } from './short.component';


@NgModule({
  declarations: [
    ShortComponent
  ],
  imports: [
    CommonModule,
    ShortRoutingModule
  ]
})
export class ShortModule { }
