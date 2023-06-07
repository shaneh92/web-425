/**
    ========================================================================================================================
    ; Title: sing-in.guard.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/7/23
    ; Description: The purpose of this assignment is to create guards for the login
    ; Work Cited:
      Coding Guidelines
      Instructions - Exercise 1.5 - Components
      Instructions - Exercise 2.3 – Data Binding
      Instructions - Exercise 3.3 - Passing Data to Routes - Part 2
      Instructions - Assignment 3.4 - Guarding Routes
    ========================================================================================================================
 */

import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot, //change this to next: for next.queryParams.isLoggedIn
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']); //note: router from this.router is from private router: Router. its router
      return false;
    }
  }
}
