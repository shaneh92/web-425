/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 6/6/23
    ; Description: The purpose of this assignment is to create angular component, practice routing and passing data through routes
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 2.4 – Routing in Action
    Instructions - Exercise 3.2 - Passing Data to Routes - Part 1
    Instructions - Exercise 4.2 - Inversion of Control and Dependency Injection
    Instructions - Exercise 4.3 - Handling Events with Observables
    ========================================================================================================================
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string = 'Assignment 4.4 - Async Pipe';
}
