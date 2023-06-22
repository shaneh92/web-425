/*
    ========================================================================================================================
    ; Title: books.service.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/20/23
    ; Description: This purpose of this assignment is create new navigation and layout based on flex layout and angular materials
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 5.3 - Data Tables
    Angular Tutorial video https://www.youtube.com/watch?v=J2RHvuYFna4
    Angular Tutorial video https://www.youtube.com/watch?v=Wif3MsDN7Pg
    Course GitHub
    ========================================================================================================================
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '1503215679',
        title: 'The Adventures of Tom Sawyer',
        description:
          'About a young boy who is growing up along the mississippi river in a fictional town of St Petersburg, Missouri.',
        numbOfPages: 168,
        authors: ['Mark Twain'],
      },
      {
        isbn: '9780486280615',
        title: 'The Adventures of Huckleberry Finn',
        description:
          'A sequel to The Adventures of Tom Sawyer, Finn a friend of Tom sets out on an adventure after running away from his Dad. Travels down along the Mississippi River.',
        numbOfPages: 224,
        authors: ['Mark Twain'],
      },
      {
        isbn: '0307742539',
        title: 'Where the Red Fern Grows',
        description:
          'A young boy works hard to save his money to purchase two hound dogs and takes them on incredible adventures hunting racoons in Oklahoma.',
        numbOfPages: 304,
        authors: ['Wilson Rawls'],
      },
      {
        isbn: '9781250072689',
        title: 'The Revenant',
        description:
          'A story of betrayal in the American frontier, with a real life trapper, Hugh Glass.',
        numbOfPages: 272,
        authors: ['Michael Punke'],
      },
      {
        isbn: '0385521693',
        title: 'American Buffalo: In Search of a Lost Icon',
        description:
          'Join our author in his pursuit of the American Buffalo while he describes the 14,000 years of the American Buffalos history and conservation efforts.',
        numbOfPages: 304,
        authors: ['Steven Rinella'],
      },
    ];
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
