import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AnimalService } from '../animal.service';
import { DogImage } from '../model/dogImage';

@Component({
  selector: 'app-animal-image',
  templateUrl: './animal-image.component.html',
  styleUrls: ['./animal-image.component.scss']
})
export class AnimalImageComponent implements OnInit, OnChanges {

  @Input() dogId: string;
  public imageUrl = '';
  constructor(private animalService: AnimalService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dogId && changes.dogId.previousValue !== changes.dogId.currentValue){
      this.setImage();
    }
  }

  ngOnInit(): void {
  }

  setImage(): void {
    this.animalService.GetImage()
    .subscribe((dogImages: DogImage[]) => {
      if(dogImages && dogImages.length > 0){
        this.imageUrl = dogImages[0].url;
      }
    });
  }
}
