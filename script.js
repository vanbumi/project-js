console.log("I am Learning!");

document.getElementById("headtree").innerHTML = "Belajar Tekad JS!!";

var name = "Dyo";
console.log(name);

var lastName = "Bumi"
console.log(lastName);

// CARA LAMA ES5

var fullName = name + " " + lastName;

console.log(name + " " + lastName);
console.log("nama saya: " + fullName);

// CARA BARU ES6
console.log(`My Name is ${fullName}`);

// komen 1 line
/**
 * line 1
 * line 2
 * dst
 */

// Operator Plus
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

// Operator Perkalian
var a = 5;
var b = 10;
var c = a * b;
console.log(c);

// Operator 
/* 
* ++ increment
* -- decrement
* % modulo 
*/

var d = 10;
d += 1;
console.log(d);

var d = 10;
d *= 1;
console.log(d);

var d = 10;
e = d % 5
console.log(e);

var txt1 = "Dyo";
var txt2 = "Bumi";
var txt3 = txt1 + " " + txt2;
console.log(txt3)

/**
 * == : equal value
 * === : equal value * type
 * != : not equal value
 * !== : not equal value & type
 * > : lebih besar
 * < : lebih kecil
 * ? : ternary
 */