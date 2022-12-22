let myname:string| null;
myname=null;
console.log(myname);
myname = "zia";
console.log(myname);
let myAge: number|string;

myAge = 16;//narrowing
console.log(myAge);
myAge = "Dont Know";//narrowing
console.log(myAge);
console.log(myAge.toUpperCase());

let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
// age = "living";//Error

type RawData=string|null|number|undefined|never;
let data:RawData;
type id=number|string;
let idmaybe:id|null|undefined;