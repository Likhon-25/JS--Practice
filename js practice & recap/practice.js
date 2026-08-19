/* function greet(name =  'Guest'){
    console.log('Hello',name);
}

greet('Likhon')
greet(undefined)
greet(null)
greet(0) */

/*function calculatePrice (price , tax = price * 0.10){
    return price + tax
}

console.log(calculatePrice(100));*/

// -------------------Template Strings — Multiline & Dynamic String -----------------------

/*const name = "Likhon Mondol";
const age = 20;
const department = "CSE";
const id = "809643";

const message = `
I'm ${name}. 
I'm ${age} years old. 
I read in ${department}. 
My id number ${id}`;
console.log(message);
*/

/* const name = "Likhon Mondol";
const isAdmin = true;
const greeting = `Hello ${isAdmin ? `Admin ${name}` : `User ${name}`}`;
console.log(greeting);*/

// -------------------Spread and Rest Operator — Array Max and Array, Object Copy------------------

const arr = [4, 33, 4, 55, 6, 3, 19];
console.log(...arr);
const max = Math.max(...arr);
console.log(max);
