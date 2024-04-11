//This code prints Hello World
//THis is a comment
console.log("Hello world")
let a = 3;
a++;
//a = 4 we can not assign the value again like var
let b = 5;
console.log(a+b);
console.log(a==b);
// this is f string like as pyhton
console.log(`The output is : ${a+b}`);
console.log(a**b)  // power
console.log(a===b);

var c = 4;
var d = 5;
c = 5;
d++;
console.log(c+d)

const e = 6;
//e = 7 we cant assign the value again in const also
const f = 6;
console.log(e+f);

//Ternary operator
console.log(2>3?console.log(true):console.log(false))


let num = prompt("Enter a number: ");
if(num % 5 == 0){
    console.log('number is multiple of five')
}else{
    console.log(num + ' is not a multiple of five')
}



let a1 = {
    "b":"4",

}
console.log(a1.b)

