/**
    ========================================================================================================================
    ; Title: sign-in.component.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/6/23
    ; Description: The purpose of this assignment is to create angular component, practice routing and passing data through routes, create sign in forms and pass data to components user query params
    ; Work Cited:
      Coding Guidelines
      Instructions - Exercise 1.5 - Components
      Instructions - Exercise 2.3 – Data Binding
      Instructions - Exercise 3.3 - Passing Data to Routes - Part 2
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}
