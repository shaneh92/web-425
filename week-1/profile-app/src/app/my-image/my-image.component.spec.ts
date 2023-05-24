/**
    ========================================================================================================================
    ; Title: my-image.component.spec.ts
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

import { MyImageComponent } from './my-image.component';

describe('MyImageComponent', () => {
  let component: MyImageComponent;
  let fixture: ComponentFixture<MyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyImageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
