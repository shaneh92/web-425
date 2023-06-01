/*
    ========================================================================================================================
    ; Title: app.module.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 5/31/23
    ; Description: The purpose of this assignment is to create angular component and practice routing
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 2.4 – Routing in Action
    ========================================================================================================================
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ComposerListComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
