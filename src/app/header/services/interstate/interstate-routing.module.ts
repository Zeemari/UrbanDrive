import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterstateComponent } from './interstate.component';

const routes: Routes = [{ path: '', component: InterstateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterstateRoutingModule { }
