import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfluencersRoutingModule } from './influencers-routing.module';
import { InfluencersComponent } from './influencers.component';


@NgModule({
  declarations: [
    InfluencersComponent
  ],
  imports: [
    CommonModule,
    InfluencersRoutingModule
  ]
})
export class InfluencersModule { }
