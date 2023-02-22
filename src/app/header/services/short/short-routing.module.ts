import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortComponent } from './short.component';

const routes: Routes = [{ path: '', component: ShortComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortRoutingModule { }
