/*
    ========================================================================================================================
    ; Title: composer-class.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 6/6/23
    ; Description: The purpose of this assignment is to create angular component, practice routing and passing data through routes
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 2.4 – Routing in Action
    Instructions - Exercise 3.2 - Passing Data to Routes - Part 1
    ========================================================================================================================
 */

import { Icomposer } from './Icomposer.interface';

export class Composer {
  composers: Array<Icomposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100,
        fullName: 'Hans Zimmer',
        genre: 'Film Composer',
      },
      {
        composerId: 101,
        fullName: 'Jason Hayes',
        genre: 'Video Game Composer',
      },
      {
        composerId: 102,
        fullName: 'Klaus Badelt',
        genre: 'Modern Composer',
      },
      {
        composerId: 103,
        fullName: 'Ryuichi Sakamoto',
        genre: 'Film Composer',
      },
      {
        composerId: 104,
        fullName: 'Alexandre Desplat',
        genre: 'Modern Composer',
      },
    ];
  }
  getComposers() {
    return this.composers;
  }
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
