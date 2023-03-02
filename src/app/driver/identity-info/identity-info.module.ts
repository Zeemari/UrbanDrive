import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentityInfoRoutingModule } from './identity-info-routing.module';
import { IdentityInfoComponent } from './identity-info.component';


@NgModule({
  declarations: [
    IdentityInfoComponent
  ],
  imports: [
    CommonModule,
    IdentityInfoRoutingModule
  ]
})
export class IdentityInfoModule { }
