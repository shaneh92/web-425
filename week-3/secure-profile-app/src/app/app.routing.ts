/**
    ========================================================================================================================
    ; Title: app.routing.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/6/23
    ; Description: The purpose of this assignment is to create angular component, practice routing and passing data through routes
    ; Work Cited:
      Coding Guidelines
      Instructions - Exercise 1.5 - Components
      Instructions - Exercise 2.3 – Data Binding
      Instructions - Exercise 3.3 - Passing Data to Routes - Part 2
      Instructions - Assignment 3.4 - Guarding Routes
    ========================================================================================================================
 */

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard],
  },
];
