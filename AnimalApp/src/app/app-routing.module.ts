import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//modules
import {AnimalModule} from './animal/animal.module';

// components
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: '',  redirectTo: 'login', pathMatch: 'full'},
  {path: 'animal', loadChildren: () => AnimalModule},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
