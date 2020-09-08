import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { IdentityService } from '../identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  get username(): AbstractControl { return this.loginForm.get('username'); }

  get password(): AbstractControl { return this.loginForm.get('password'); }

  /*set usernameString(val: string){
    this.loginForm.patchValue({
      username: val
    });
  }*/

  constructor(public identitySvc: IdentityService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.createLoginForm();
  }

  createLoginForm(): FormGroup{
    return this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onLogin(): void{
    this.identitySvc.loggedIn = true;
    this.identitySvc.username = this.username.value;

    this.routeToAnimal();
  }

  logout(): void{
    this.identitySvc.loggedIn = false;
    this.identitySvc.username = null;
  }

  private routeToAnimal(): void{
    this.router.navigate(['/animal']);
  }
}
