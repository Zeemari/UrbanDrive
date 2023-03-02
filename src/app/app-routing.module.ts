import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: 'partner',
    loadChildren: () =>
      import('./driver/partner/partner.module').then((m) => m.PartnerModule),
  },
  {
    path: 'personal-info',
    loadChildren: () =>
      import('./driver/personal-info/personal-info.module').then(
        (m) => m.PersonalInfoModule
      ),
  },
  {
    path: 'driving-preference',
    loadChildren: () =>
      import('./driver/drive-pref/drive-pref.module').then(
        (m) => m.DrivePrefModule
      ),
  },
  {
    path: 'identity-information',
    loadChildren: () =>
      import('./driver/identity-info/identity-info.module').then(
        (m) => m.IdentityInfoModule
      ),
  },
  {
    path: 'confirmation',
    loadChildren: () =>
      import('./driver/confirmation/confirmation.module').then(
        (m) => m.ConfirmationModule
      ),
  },
  {
    path: 'influencers',
    loadChildren: () =>
      import('./driver/influencers/influencers.module').then(
        (m) => m.InfluencersModule
      ),
  },
  {
    path: 'influencer-confirm',
    loadChildren: () =>
      import('./driver/influencer-confirm/influencer-confirm.module').then(
        (m) => m.InfluencerConfirmModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
