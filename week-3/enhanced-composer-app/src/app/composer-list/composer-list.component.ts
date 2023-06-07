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
    ========================================================================================================================
 */
import { Component, OnInit } from '@angular/core';
import { Icomposer } from '../Icomposer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Icomposer>;
  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {}
}
