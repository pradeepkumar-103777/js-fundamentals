function demoFunction() {     
    console.log(this); // refers to global object (window in browser)
}  

demoFunction();


//implicit binding
const obj = {
    name: 'John',
    sayName: function() {
        console.log(this.name);
    }
};

obj.sayName(); 


//explicit binding
function sayName() {
    console.log(this.name);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

sayName.call(person1); // logs: "Alice"  Explicitly I'm setting the value of this to be person1 object
sayName.call(person2); // logs: "Bob"    "" ""


//new keyword
function Person(name) {
    this.name = name;
}

const alice = new Person('Alice');
console.log(alice.name); // logs: "Alice"


//arrow functions
function outerFunction() {
    this.value = 42;
    return () => console.log(this.value);
}

const objt = {
    value: 99,
    myFunction: outerFunction()
};

objt.myFunction(); // logs: 42, not 99



//event listeners
const button = document.getElementById('btn')

button.addEventListener('click', function() {
    console.log(this); // logs(in browser): <button>...</button>
});



//callbacks

//normal function
function Timer() {
    this.seconds = 0;
    setInterval(function() {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}

const timer = new Timer();  
// NaN gets logged every second, 
// because `this` inside the `setInterval` refers to `window`
// or is `undefined` in strict mode.


//arrow function
function BetterTimer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++;
        console.log(this.seconds);
    }, 1000);
}

const betterTimer = new BetterTimer();  
// Logs increasing numbers every second
// because the arrow function captures the `this` of `BetterTimer`.


//another way
function YetAnotherTimer() {
    this.seconds = 0;
    var self = this; // workarounds
    setInterval(function() {
        self.seconds++;
        console.log(self.seconds);
    }, 1000);
}

const yetAnotherTimer = new YetAnotherTimer();  
// Logs increasing numbers every second,
// because we stored `this` in `self` of that current object.




