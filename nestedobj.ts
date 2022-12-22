type author={
    name:string,
    age:number

}
type Book={
    Author:author,
    ISBN:number
}
let library:Book={Author:{name:"kafka",age:50},ISBN:278881};
console.log(library.Author.name);
console.log(library.ISBN);

