import { Component } from '@angular/core';

@Component({
  selector: 'app-in-app',
  standalone: false,
  templateUrl: './in-app.component.html',
  styleUrls: ['./in-app.component.scss']
})
export class InAppComponent {

  public stringToNumber(value: string): number {
    return parseFloat(value);
  }
}
