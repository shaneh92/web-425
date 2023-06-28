/*
    ========================================================================================================================
    ; Title: wishlist.component.ts
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

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {}

  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }
}
