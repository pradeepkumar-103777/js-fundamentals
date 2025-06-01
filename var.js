
try {
    throw new Error()
} catch (e) { 
    var e = 9; 
}
console.log(e);

var a = 10;

function ab(){
    var a = 10;
    if(true){
        var a = 20;
        console.log(a);    
    }
    console.log(a); 
}
console.log(a); 
ab()


var x = 0;
function f() {
  var x = y = 1; 
}
f();

console.log(x, y);

"use strict";

var x = 0;
function f() {
  var x = y = 1; // ReferenceError: y is not defined
}
f();

console.log(x, y);


function wait(message) {

    setTimeout(function() {

        console.log(message);

    }, 1000);

}

for (var i = 1; i <= 3; i++) {

    wait(i);

}
  

   