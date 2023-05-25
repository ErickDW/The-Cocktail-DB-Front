import { Component } from '@angular/core';

@Component({
  selector: 'app-search-by-letter',
  templateUrl: './search-by-letter.component.html',
  styleUrls: ['./search-by-letter.component.scss'],
})
export class SearchByLetterComponent{
  alphabet: string[] = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i).toUpperCase()
  );
}
