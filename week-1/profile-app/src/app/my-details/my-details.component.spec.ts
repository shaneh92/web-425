/**
    ========================================================================================================================
    ; Title: my-details.component.spec.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 5/23/23
    ; Description: The purpose of this assignment is to create angular component
    ; Work Cited:
      Coding Guidelines
      Instructions - Exercise 1.5 - Components
    ========================================================================================================================
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailsComponent } from './my-details.component';

describe('MyDetailsComponent', () => {
  let component: MyDetailsComponent;
  let fixture: ComponentFixture<MyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
