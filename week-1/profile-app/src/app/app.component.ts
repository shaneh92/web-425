/**
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 5/23/23
    ; Description: The purpose of this assignment is to create angular component
    ; Work Cited:
      Coding Guidelines
      Instructions - Exercise 1.5 - Components
    ========================================================================================================================
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components';
}
