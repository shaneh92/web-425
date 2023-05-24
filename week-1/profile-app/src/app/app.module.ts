/**
    ========================================================================================================================
    ; Title: app.module.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 5/23/23
    ; Description: The purpose of this assignment is to create angular component
    ; Work Cited:
      Coding Guidelines
      Instructions - Exercise 1.5 - Components
    ========================================================================================================================
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [AppComponent, MyImageComponent, MyDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
