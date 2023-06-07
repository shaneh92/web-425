/**
    ========================================================================================================================
    ; Title: app.component.spec.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/6/23
    ; Description: The purpose of this assignment is to create angular component, practice routing and passing data through routes
    ; Work Cited:
      Coding Guidelines
      Instructions - Exercise 1.5 - Components
      Instructions - Exercise 2.3 – Data Binding
      Instructions - Exercise 3.3 - Passing Data to Routes - Part 2
    ========================================================================================================================
 */

import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'enhanced-profile-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('enhanced-profile-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'enhanced-profile-app app is running!'
    );
  });
});
