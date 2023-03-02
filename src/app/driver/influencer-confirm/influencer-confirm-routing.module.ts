import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfluencerConfirmComponent } from './influencer-confirm.component';

const routes: Routes = [{ path: '', component: InfluencerConfirmComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerConfirmRoutingModule { }
