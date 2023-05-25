import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent},
  {
    path: 'drink',
    component: DrinkDetailsComponent,
  },
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
