/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 5/31/23
    ; Description: The purpose of this assignment is to create angular component and practice routing
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 2.4 – Routing in Action
    ========================================================================================================================
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string = 'Assignment 2.4 - Routing in Action';
}
