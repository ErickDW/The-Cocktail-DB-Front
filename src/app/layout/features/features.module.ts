import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    DrinkDetailsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
