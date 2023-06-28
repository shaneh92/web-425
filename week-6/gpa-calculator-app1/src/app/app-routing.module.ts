/*
    ========================================================================================================================
    ; Title: app.routing.module.ts
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { HomeComponent } from './home/home.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'session/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
