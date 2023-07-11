/*
    ========================================================================================================================
    ; Title: book.interface.ts
    ; Author: Shane Hingtgen
    ; Bellevue University
    ; Date: 6/20/23
    ; Description: This purpose of this assignment is create new navigation and layout based on flex layout and angular materials
    ; Work Cited:
    Coding Guidelines
    Instructions - Exercise 5.1 - Navigation and Layout
    Angular Tutorial video https://www.youtube.com/watch?v=J2RHvuYFna4
    Angular Tutorial video https://www.youtube.com/watch?v=Wif3MsDN7Pg
    Course GitHub
    ========================================================================================================================
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numbOfPages: number;
  authors: Array<string>;
}
