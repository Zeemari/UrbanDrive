import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentityInfoComponent } from './identity-info.component';

const routes: Routes = [{ path: '', component: IdentityInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdentityInfoRoutingModule { }
