/*
    ========================================================================================================================
    ; Title: book-list.component.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/20/23
    ; Description: This purpose of this assignment is create new navigation and layout based on flex layout and angular materials
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 5.1 - Navigation and Layout
    Instructions - Exercise 5.3 - Data Tables
    Angular Tutorial video https://www.youtube.com/watch?v=J2RHvuYFna4
    Angular Tutorial video https://www.youtube.com/watch?v=Wif3MsDN7Pg
    Material Angular https://material.angular.io/components/table/examples
    Course GitHub
    ========================================================================================================================
 */

import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numbOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}
