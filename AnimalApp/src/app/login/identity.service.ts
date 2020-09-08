import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  public username: string;
  public loggedIn: boolean;

  constructor() {
    this.username = null;
    this.loggedIn = false;
  }
}
