import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermanentRoutingModule } from './permanent-routing.module';
import { PermanentComponent } from './permanent.component';


@NgModule({
  declarations: [
    PermanentComponent
  ],
  imports: [
    CommonModule,
    PermanentRoutingModule
  ]
})
export class PermanentModule { }
