"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let myname;
myname = null;
console.log(myname);
myname = "zia";
console.log(myname);
let myAge;
myAge = 16; //narrowing
console.log(myAge);
myAge = "Dont Know"; //narrowing
console.log(myAge);
console.log(myAge.toUpperCase());
let age;
age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
let data;
let idmaybe;
