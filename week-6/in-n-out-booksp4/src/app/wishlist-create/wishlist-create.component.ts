/*
    ========================================================================================================================
    ; Title: wishlist-create.component.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/27/23
    ; Description: This purpose of this assignment is create output properties
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 6.2 - Output Properties
    Angular Tutorial video https://www.youtube.com/watch?v=SxAsehrObQo
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
})
export class WishlistCreateComponent implements OnInit {
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();
  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {}

  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });

    this.item = {} as IWishlistItem;
  }
}
