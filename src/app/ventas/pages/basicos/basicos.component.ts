import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent {
  nombreLower: string = 'angel';
  nombreUpper: string = 'ANGEL';
  nomcreCompleto: string = 'lUiS ANgEl';

  fecha: Date = new Date(); // el día de hoy
}
