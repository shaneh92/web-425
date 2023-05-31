/**
    ========================================================================================================================
    ; Title: app.component.ts
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
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn: Boolean = true;
  assignment: string = 'Exercise 2.3 - Data Binding';
}
