/*
    ========================================================================================================================
    ; Title: composer-details.component.ts
    ; Author: Shane hingtgen
    ; Bellevue University
    ; Date: 6/6/23
    ; Description: The purpose of this assignment is to create angular component, practice routing and passing data through routes
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 2.4 – Routing in Action
    Instructions - Exercise 3.2 - Passing Data to Routes - Part 1
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { Icomposer } from '../Icomposer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: Icomposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(
      this.route.snapshot.paramMap.get('composerId'), //aligns with our :composerId from app.routing.module.ts
      10
    );
    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}
