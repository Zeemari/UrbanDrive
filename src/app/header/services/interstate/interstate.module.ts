import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterstateRoutingModule } from './interstate-routing.module';
import { InterstateComponent } from './interstate.component';


@NgModule({
  declarations: [
    InterstateComponent
  ],
  imports: [
    CommonModule,
    InterstateRoutingModule
  ]
})
export class InterstateModule { }
