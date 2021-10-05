// function helloWorld(){
//     return "Hello world";
// }
// const y = function (a, b) {return a+b;};
// var func = function (a, b) {return a*b;}; 
// var x = helloWorld();
// var z = func(4,9);
// console.log(x,y(3,4),z,helloWorld);


// for (let index = 0; index < 3; index++) {
//     const log = () => {
//         console.log(index);
//     };
//     setTimeout(log, 100);
// }

// let x = {
//     a:1, 
//     b:2
// }
// xArr = []
// for(let i in x){
//     xArr.push(x[i]);
// }
// console.log(xArr);

// let str = "hi";

// const reverseStr = (str) => {
//     return str.split('').reverse().join('');
// }
// console.log(reverseStr(str));

// const obj = {
//     a:1,
//     b:2,
//     getA(){
//         console.log(this.a);
//         return this;
//     },
//     getB(){
//         console.log(this.b);
//     }
// };
// obj.getA().getB();

// console.log(String(100+23));


// xi = 5
// console.log(xi)
// var xi
// var x = 5
// console.log(x)
// console.log(y)
// console.log(x + y)
// var y = 8
// 'use strict';
// function hello(x, x){
//     console.log(x);
// }
// hello("Hi", "Howdy")
// 'use strict';
// function sayHello(){
//     var x = "Hello"
//     {
//         x = "Changed text"
//         //let x = "hey"
//         console.log(x)
//     }
// }
// sayHello()
// 'use strict';
let studentName = "Suzy";

function printStudent(studentName) {
    studentName = studentName.toUpperCase();
    console.log(window.studentName);
    console.log(studentName);
    window.studentName = "Parth";
}

printStudent("Frank");
// FRANK

printStudent(studentName);
// SUZY

console.log(studentName);
// Suzy