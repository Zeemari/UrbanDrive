import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstantComponent } from './instant.component';

const routes: Routes = [{ path: '', component: InstantComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstantRoutingModule { }
