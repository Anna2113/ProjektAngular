import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country: string;
  capital: string;
  president: string;
  population: number;
  religion: string;
  currency: string;
  mountains: string;
  river: string;
  sea: string;
  attractions: Attraction;
  cities: string[];
  editMode = false;


  constructor() { }

  ngOnInit(): void {
    this.country = 'Włochy';
    this.capital = 'Rzym';
    this.president = 'Sergio Mattarella';
    this.population = 60.36;
    this.religion = 'Chrześcijaństwo';
    this.currency = 'euro';
    this.mountains = 'Alpy';
    this.river = 'Pad';
    this.sea = 'Morze Adriatyckie';
    this.attractions = {
      first: 'Koloseum',
      second: 'Fontanna di Trevi',
      third: 'Schody Hiszpańskie'
    };
    this.cities = ['Rzym', 'Florencja'];

  }

  addCity(city): void {
    this.cities.push(city);
  }

  deleteCity(city): void {
    for (let i = 0; i < this.cities.length; i++) {
      if (this.cities[i] === city) {
        this.cities.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }

}

interface Attraction {
  first: string;
  second: string;
  third: string;
}
