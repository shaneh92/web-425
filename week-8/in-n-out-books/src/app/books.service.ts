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
    Instructions - Assignment 8.2 - Server side communications  
    Angular Tutorial video https://www.youtube.com/watch?v=J2RHvuYFna4
    Angular Tutorial video https://www.youtube.com/watch?v=Wif3MsDN7Pg
    Material Angular https://material.angular.io/components/table/examples
    Course GitHub
    ========================================================================================================================
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959',
    '9780345339683'
  ]

  constructor(private http: HttpClient) {
    
  }

  getBooks() {
    let params = new HttpParams()
    params = params.append('bibkeys', `IBSN:${this.isbns.join(',')}`)
    params = params.append('format', 'json')
    params = params.append('jscmd', 'details')
    
    return this.http.get('https://openlibrary.org/api/books', {params: params})
  }

}
