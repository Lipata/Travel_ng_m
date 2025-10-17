import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public value?: string;
  public value1?: string;
  public value2?: string;
  public checked: boolean = true;
}
