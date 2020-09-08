import { Component } from '@angular/core';
import { IdentityService } from './login/identity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AnimalApp';

  constructor(public identitySvc: IdentityService){}
}
