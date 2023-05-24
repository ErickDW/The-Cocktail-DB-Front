import { Component } from '@angular/core';
import { StyleCircle, circleComponentDefault } from 'src/app/interfaces/style-circle.interface';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent {
  optiopnImg1 = '../../../../assets/icons/plus.png';
  optiopnImg2 = '../../../../assets/icons/Vector 1.png';

  styleInput : StyleCircle = circleComponentDefault;

  optionImg(): string {
    this.styleInput.tam
    const defaultText = 'Add to my list';
    return (defaultText !== this.styleInput.action.text) ? this.optiopnImg2 : this.optiopnImg1;
  }
}
