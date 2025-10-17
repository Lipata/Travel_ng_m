import { Component } from '@angular/core';

@Component({
  selector: 'app-set-new-password',
  standalone: false,
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.scss']
})
export class SetNewPasswordComponent {
  public value?: string;
  public value1?: string;
}
