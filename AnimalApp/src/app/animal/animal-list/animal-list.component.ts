import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AnimalService } from '../animal.service';
import { DogBreed } from '../model/dogBreed';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {

  @Output() dogIdChange = new EventEmitter<number>();

  public dogBreeds: DogBreed[];
  constructor(private animalService: AnimalService) {
    this.dogBreeds = [];
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.animalService.GetAll(10, 1)
    .subscribe((dogBreeds: DogBreed[]) => {
      this.dogBreeds = dogBreeds;
    });
  }

  loadData(id: number): void {
    this.dogIdChange.emit(id);
  }
}
