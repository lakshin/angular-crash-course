import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-home',
  templateUrl: './animal-home.component.html',
  styleUrls: ['./animal-home.component.scss']
})
export class AnimalHomeComponent implements OnInit {

  public dogId: number;
  constructor() {
  }

  ngOnInit(): void {
  }

  DogIdChange(dogId: number): void {
    this.dogId = dogId;
  }
}
