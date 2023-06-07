/**
    ========================================================================================================================
    ; Title: sing-in.guard.spec.ts
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

import { TestBed } from '@angular/core/testing';

import { SignInGuard } from './sign-in.guard';

describe('SignInGuard', () => {
  let guard: SignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
