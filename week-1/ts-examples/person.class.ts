/**
 * Title: person.class.ts
 * Author: Shane Hingtgen
 * Date: 5/23/23
 * Description: Person class that implements a Person interface
 */

import { IPerson } from "./person.interface"; //import the IPerson interface

// create two fields and a constructor because we a forced since we created the IPerson interface
class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// instantiate new person object
let myName = new Person("Shane", "Hingtgen");

// log it to console
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
