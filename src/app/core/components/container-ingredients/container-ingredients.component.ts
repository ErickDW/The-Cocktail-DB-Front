import { Component } from '@angular/core';

@Component({
  selector: 'app-container-ingredients',
  templateUrl: './container-ingredients.component.html',
  styleUrls: ['./container-ingredients.component.scss'],
})
export class ContainerIngredientsComponent {
  DerOrIzq: boolean = false;
  dataInstructions = [
    'In a small mixer bowl beat egg yolks till blended.',
    'Gradually add 1/4 cup sugar, beating at high speed till thick and lemon colored.',
    'Stir in milk, stir in rum, bourbon, vanilla, and salt.',
    'Chill thoroughly Whip cream. Wash beaters well.',
    'In a large mixer bowl beat egg whites till soft peaks form.',
    'Gradually add remaining 1/4 cup sugar, beating to stiff peaks. Fold yolk mixture and whipped cream into egg whites Serve immediately.',
    'Sprinkle nutmeg over each serving.',
    'Serve in a punch bowl or another big bowl.'
  ]
  note? = 'For a nonalcoholic eggnog, prepare Eggnog as above, except omit the bourbon and rum and increase the milk to 3 cups';
}
