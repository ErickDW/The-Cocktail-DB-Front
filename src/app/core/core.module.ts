import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { CardOptionCircleComponent } from './components/card-option-circle/card-option-circle.component';
import { CardCircleComponent } from './components/card-circle/card-circle.component';
import { CircleComponent } from './components/circle/circle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerListComponent } from './components/container-list/container-list.component';
import { ContainerIngredientsComponent } from './components/container-ingredients/container-ingredients.component';

@NgModule({
  declarations: [
    FooterComponent,
    CardOptionCircleComponent,
    CardCircleComponent,
    CircleComponent,
    NavbarComponent,
    ContainerListComponent,
    ContainerIngredientsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
		FooterComponent,
    CardOptionCircleComponent,
    CardCircleComponent,
    CircleComponent,
    NavbarComponent,
    ContainerListComponent,
    ContainerIngredientsComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoreModule {}
