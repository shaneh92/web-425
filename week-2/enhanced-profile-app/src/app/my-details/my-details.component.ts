/*
    ========================================================================================================================
    ; Title: app.component.html
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 5/30/23
    ; Description: The purpose of this assignment is to create angular component
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 1.5 - Components
    Instructions - Exercise 2.3 – Data Binding
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2020', '#CodingWithAngular', '#ngOmaha'];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(
      `\n  Full Name: ${this.fullName}\n  Favorite Food: ${this.favoriteFood}\n  Favorite Color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person('Shane Hingtgen', 'Prime Rib', 'Red');
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}
