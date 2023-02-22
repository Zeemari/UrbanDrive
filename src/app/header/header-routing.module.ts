import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./index/index.module').then((m) => m.IndexModule),
      },
      {
        path: 'company',
        loadChildren: () =>
          import('./company/company.module').then((m) => m.CompanyModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./company/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'career',
        loadChildren: () =>
          import('./company/careers/careers.module').then(
            (m) => m.CareersModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./company/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'terms-of-service',
        loadChildren: () =>
          import('./company/tos/tos.module').then((m) => m.TosModule),
      },
      {
        path: 'privacy-policy',
        loadChildren: () =>
          import('./company/privacy/privacy.module').then(
            (m) => m.PrivacyModule
          ),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then((m) => m.ServicesModule),
      },
      {
        path: 'instant-hire',
        loadChildren: () =>
          import('./services/instant/instant.module').then(
            (m) => m.InstantModule
          ),
      },
      {
        path: 'short-hire',
        loadChildren: () =>
          import('./services/short/short.module').then((m) => m.ShortModule),
      },
      {
        path: 'permanent-hire',
        loadChildren: () =>
          import('./services/permanent/permanent.module').then(
            (m) => m.PermanentModule
          ),
      },
      {
        path: 'interstate-travel',
        loadChildren: () =>
          import('./services/interstate/interstate.module').then(
            (m) => m.InterstateModule
          ),
      },
      {
        path: 'driver-check',
        loadChildren: () =>
          import('./services/driver/driver.module').then((m) => m.DriverModule),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./support/support.module').then((m) => m.SupportModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
