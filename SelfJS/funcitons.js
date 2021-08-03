function helloWorld(){
    return "Hello world";
}
const y = function (a, b) {return a+b;};
var func = function (a, b) {return a*b;}; 
var x = helloWorld();
var z = func(4,9);
console.log(x,y(3,4),z,helloWorld);