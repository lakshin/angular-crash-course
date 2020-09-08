import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalHomeComponent } from './animal-home/animal-home.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalImageComponent } from './animal-image/animal-image.component';


@NgModule({
  declarations: [AnimalHomeComponent, AnimalListComponent, AnimalDetailComponent, AnimalImageComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule
  ]
})
export class AnimalModule { }
