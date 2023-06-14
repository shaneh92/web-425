/*
    ========================================================================================================================
    ; Title: composer-list.component.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/6/23
    ; Description: The purpose of this assignment is to create angular component, practice routing and passing data through routes
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 2.4 – Routing in Action
    Instructions - Exercise 3.2 - Passing Data to Routes - Part 1
    Instructions - Exercise 4.2 - Inversion of Control and Dependency Injection
    Instructions - Assignment 4.4 Async Pipe
    https://www.learnrxjs.io/learn-rxjs/operators/filtering/debouncetime
    https://www.learnrxjs.io/learn-rxjs/operators/transformation/map
    https://www.learnrxjs.io/learn-rxjs/concepts/rxjs-primer#pipe
    https://www.learnrxjs.io/learn-rxjs/operators/filtering/filter
    ========================================================================================================================
 */
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((val) => this.filterComposers(val));
  }

  ngOnInit(): void {}

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
