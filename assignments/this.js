/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global bindingg
        is when the this keyword refers to the the window/everything
* 2. implicit binding
        is when the this keyword refers to the object is usen in
* 3.  explicit binding
    is when we use function methods like .call and .apply
* 4. new binding
    is when we have a constructor fuction and we use the new keyword to create a new onject using the constructor
*
* write out a code example of each explanation above
*/

// Principle 1
    function hello(num1,num2,num3,num4) {
  console.log(this);
  return `${num1},${num2},${num3},${num4}`
}
hello();
// code example for Window Binding

// Principle 2
const object = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
object.sayHello('Miguel');

// code example for Implicit Binding

// Principle 3
    function Person(name) {
  this.name = name;
}
const miguel = new Person('miguel');
console.log(miguel);


// code example for New Binding

// Principle 4


let numbers = ['1','2','3','4']

const example = hello.call(Person,...numbers);
console.log(example);


// code example for Explicit Binding