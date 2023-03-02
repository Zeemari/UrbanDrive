import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluencerConfirmRoutingModule } from './influencer-confirm-routing.module';
import { InfluencerConfirmComponent } from './influencer-confirm.component';


@NgModule({
  declarations: [
    InfluencerConfirmComponent
  ],
  imports: [
    CommonModule,
    InfluencerConfirmRoutingModule
  ]
})
export class InfluencerConfirmModule { }
