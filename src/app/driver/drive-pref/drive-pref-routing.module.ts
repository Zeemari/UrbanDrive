import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivePrefComponent } from './drive-pref.component';

const routes: Routes = [{ path: '', component: DrivePrefComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrivePrefRoutingModule { }
