/*
    ========================================================================================================================
    ; Title: composer-list.component.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 5/31/23
    ; Description: The purpose of this assignment is to create angular component and practice routing
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 2.4 – Routing in Action
    ========================================================================================================================
 */
import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer('Hans Zimmer', 'Film Composer'),
      new Composer('Jason Hayes', 'Video Game Composer'),
      new Composer('Klaus Badelt', 'Modern Composer'),
      new Composer('Ryuichi Sakamoto', 'Film Composer'),
      new Composer('Alexandre Desplat', 'Modern Composer'),
    ];
  }

  ngOnInit(): void {}
}
