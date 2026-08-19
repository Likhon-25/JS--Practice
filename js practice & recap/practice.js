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

/*const arr = [4, 33, 4, 55, 6, 3, 19];
console.log(...arr);
const max = Math.max(...arr);
console.log(max);
*/

/* 
// const original = [1, 2, 3];
// const fake = original;
// fake.push(4);
// console.log(original);
// console.log(fake);

const original = [1, 2, 3];
const fake = [...original];
fake.push(4);
console.log(original);
console.log(fake);

*/

/*
const a = [1, 2, 3];
const b = [4, 5, 6];

const marge = [...a, ...b]
console.log(marge);
*/

/*
const user = { name: "Likhon", age: 20 };
const copyUser = {...user, age : 21};
// copyUser.age = 21;
console.log(user);
console.log(copyUser);
*/

// Arrow function

/*
const add = (a , b) =>{
    return a+ b
}
console.log(add(5,5));

// -------------------------- 
const user1 = {
    name: 'Likhon',

    greet: function(){
        console.log(`Assalamulaikum ${this.name}`);
    }
}

user1.greet()
*/

// ------------------------------ (Advanced) Object ও Array Destructuring--------------------------
// *****Array Destructuring*****
/*
const arr = [10, 20, 30];
// const [a, b, c] = arr;
// console.log(b);

const [first, , third ] =  arr
console.log(third);*/

//
//
// // *****Object Destructuring*****
/*const obj = {
  name: "Likhon",
  age: 20,
  department: "Computer Scince",
  roll: 809643,
};

const {name, age, department, roll} = obj
// console.log(`Hi i'm ${name}. I'm ${age} years old. I read in ${department}`);
// console.log(department);
*/
// ===nested destructuring===
/*
const user = {
  name: "Likhon",
  address: {
    city: "Rangpur",
    country: "Bangladesh"
  }
};

const {name, address : {city, country}} = user;
console.log(name, city, country); */

const users = [
  { name: "Likhon", age: 20 },
  { name: "Rahim", age: 22 },
];

const [{ name: firstname , age: firstage}, { name: secondname }] = users;
console.log(firstname,firstage, secondname);
