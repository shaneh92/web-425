/*
    ========================================================================================================================
    ; Title: base-layout.component.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/27/23
    ; Description: This purpose of this assignment is create new layouts with angular materials and flex layouts
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.3 Layouts
    Angular Tutorial video https://www.youtube.com/watch?v=9AsogopS9YM
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;
  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {}
}
