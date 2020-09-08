import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {AnimalComponent} from './animal/animal.component';
import {AnimalModule} from './animal/animal.module';

import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: '',  redirectTo: 'login', pathMatch: 'full'},
  {path: 'animal',  component: AnimalComponent, loadChildren: () => AnimalModule},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
