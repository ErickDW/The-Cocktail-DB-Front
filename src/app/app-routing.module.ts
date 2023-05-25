import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cocktail',
    loadChildren: () =>
      import('./layout/features/features.module').then(
        (m) => m.FeaturesModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./layout/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path:'**',
    redirectTo: 'cocktail',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
