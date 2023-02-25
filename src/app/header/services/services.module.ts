import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

import { LayoutModule } from 'src/app/layout/layout.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [ServicesComponent, NavbarComponent],
  imports: [CommonModule, ServicesRoutingModule, LayoutModule],
})
export class ServicesModule {}
