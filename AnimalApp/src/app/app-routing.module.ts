import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import {AnimalComponent} from './animal/animal.component';
import {AnimalModule} from './animal/animal.module';

const routes: Routes = [
  {path: '',  redirectTo: 'animal', pathMatch: 'full'},
  {path: 'animal',  component: AnimalComponent, loadChildren: () => AnimalModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
