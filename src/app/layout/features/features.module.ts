import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './home/home.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
    DrinkDetailsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CoreModule,
  ],
  providers: [CoreModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturesModule { }
