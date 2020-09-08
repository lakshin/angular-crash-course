import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DogBreed } from '../model/dogBreed';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit, OnChanges {

  @Input() dogId: number;
  public dog: DogBreed;

  constructor(private animalService: AnimalService) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.dogId && changes.dogId.previousValue !== changes.dogId.currentValue){
      this.getDogDetails(changes.dogId.currentValue);
    }
  }

  ngOnInit(): void {
  }

  getDogDetails(id: number): void {
    this.animalService.Get(id)
    .subscribe((dog: DogBreed) => {
      this.dog = dog;
    });
  }

}
