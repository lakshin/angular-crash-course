import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalHomeComponent } from './animal-home/animal-home.component';
import { AnimalRoutingModule } from './animal-routing.module';


@NgModule({
  declarations: [AnimalHomeComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule
  ]
})
export class AnimalModule { }
