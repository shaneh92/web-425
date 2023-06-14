/*
    ========================================================================================================================
    ; Title: composer-service.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/12/23
    ; Description: The purpose of this assignment is to create angular component, practice routing and passing data through routes, control and dependency injection
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 4.2 - Inversion of Control and Dependency Injection
    Instructions - Assignment 4.4 Async Pipe
    ========================================================================================================================
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComposerService {
  composers: Array<IComposer>;

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

  // this allows us to filter our search bar by name and in return the table will only show with what we have searched
  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map((composers) =>
        composers.filter(
          (composer) => composer.fullName.toLocaleLowerCase().indexOf(name) > -1
        )
      )
    );
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
