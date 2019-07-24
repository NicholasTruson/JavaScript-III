/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "Window/global Object" Binding is when the value of "this" is the window/console object.
* 2. "Implicit" Binding is when a function is called by a preceding dot.  The object before the dot is "this".
* 3. "New" Binding is when a constructor function is used.
* 4. "Explicit" Binding is when JS's call or apply method is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name){
    console.log(this);
    return name;
}
sayName("Nick");

// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Nick');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman);
newman.speak.apply(jerry);