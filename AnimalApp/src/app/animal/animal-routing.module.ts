import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {AnimalHomeComponent} from './animal-home/animal-home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AnimalHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
