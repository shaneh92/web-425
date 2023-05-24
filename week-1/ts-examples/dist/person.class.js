"use strict";
/**
 * Title: person.class.ts
 * Author: Shane Hingtgen
 * Date: 5/23/23
 * Description: Person class that implements a Person interface
 */
Object.defineProperty(exports, "__esModule", { value: true });
// create two fields and a constructor because we a forced since we created the IPerson interface
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// instantiate new person object
let myName = new Person("Shane", "Hingtgen");
// log it to console
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
