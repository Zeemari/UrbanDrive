import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermanentComponent } from './permanent.component';

const routes: Routes = [{ path: '', component: PermanentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermanentRoutingModule { }
