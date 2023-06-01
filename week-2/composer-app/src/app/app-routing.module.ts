/*
    ========================================================================================================================
    ; Title: app-routing.module.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 5/31/23
    ; Description: The purpose of this assignment is to create angular component and practice routing
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 2.4 – Routing in Action
    ========================================================================================================================
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full',
  },
  {
    path: 'composer-list',
    component: ComposerListComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
