/*
    ========================================================================================================================
    ; Title: app.component.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/20/23
    ; Description: This purpose of this assignment is create new navigation and layout based on flex layout and angular materials
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 5.1 - Navigation and Layout
    Instructions - Exercise 5.3 - Data Tables
    Instructions - Assignment 5.4 - Dialogs
    Instructions - Exercise 6.2 - Output Properties
    Instructions - Assignment 8.2 - Server side communications  
    Angular Tutorial video https://www.youtube.com/watch?v=J2RHvuYFna4
    Angular Tutorial video https://www.youtube.com/watch?v=Wif3MsDN7Pg
    Material Angular https://material.angular.io/components/table/examples
    Course GitHub
    ========================================================================================================================
 */

import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books';
  }
}
