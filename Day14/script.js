const content = document.getElementById("content");
const buttons = document.querySelectorAll(".day-btn");

const daysData = {
1: `
  <div class="card">
    <h2>Day 1 — JavaScript Basics</h2>
    <p>
      Today I revised JavaScript fundamentals from scratch to strengthen my base.
      Instead of just reading notes, I focused on understanding <strong>why</strong>
      things work the way they do.
    </p>
  </div>

  <div class="card">
    <h2>What is JavaScript?</h2>
    <p>
      JavaScript is a high-level, interpreted programming language used to add
      interactivity and logic to web pages. It runs inside the browser and can
      also run on servers using environments like Node.js.
    </p>
    <p>
      JavaScript was created in 1995 by <strong>Brendan Eich</strong> in just 10 days.
      It is standardized under <strong>ECMAScript</strong>.
    </p>
  </div>

  <div class="card">
    <h2>ES6 (ECMAScript 2015)</h2>
    <p>
      ES6 was a major update to JavaScript that introduced modern syntax and
      features like <code>let</code>, <code>const</code>, arrow functions, classes,
      promises, and modules — making JS more readable and maintainable.
    </p>
  </div>

  <div class="card">
    <h2>Variables: var, let & const</h2>
    <pre><code>
// var (old way)
var x = 10; 
// function scoped, can be redeclared and reassigned

// let (modern way)
let y = 20; 
// block scoped, can be reassigned but not redeclared

// const
const z = 30; 
// block scoped, cannot be reassigned

// Best practice:
// use const by default, let when reassignment is needed
    </code></pre>
  </div>

  <div class="card">
    <h2>Hoisting</h2>
    <p>
      Hoisting is JavaScript's behavior of moving declarations to the top
      of their scope during the compilation phase.
    </p>
    <pre><code>
// var is hoisted and initialized as undefined
console.log(a); // undefined
var a = 5;

// let & const are hoisted but NOT initialized
// accessing them before declaration causes ReferenceError
// This zone is called the Temporal Dead Zone (TDZ)
    </code></pre>
  </div>

  <div class="card">
    <h2>Data Types & Type System</h2>
    <p>
      JavaScript uses a <strong>dynamically typed</strong> system, meaning
      variable types are determined at runtime.
    </p>
    <pre><code>
// Primitive data types
let str = "JavaScript";   // string
let num = 10;             // number
let isTrue = true;        // boolean
let empty = null;         // null
let notDefined;           // undefined
let unique = Symbol("id");// symbol
let big = 123n;           // bigint

console.log(typeof str);  // string
console.log(typeof num);  // number
    </code></pre>
  </div>

  <div class="card">
    <h2>Console Methods</h2>
    <p>
      Console methods are mainly used for debugging and understanding program flow.
    </p>
    <pre><code>
console.log("Normal message");
console.warn("Warning message");
console.error("Error message");
    </code></pre>
  </div>

  <div class="card">
    <h2>User Interaction</h2>
    <p>
      JavaScript can interact with users using built-in browser functions.
    </p>
    <pre><code>
// Shows popup alert
// alert("Welcome to JavaScript");

// Takes user input
// let name = prompt("Enter your name");
// console.log("Hello", name);
    </code></pre>
  </div>

  <div class="card">
    <h2>Day 1 Summary</h2>
    <p>
      Revised JavaScript fundamentals including history, ES6, variables,
      hoisting, data types, console methods, and basic user interaction.
      Strong foundation before moving to logic-heavy concepts.
    </p>
  </div>
  `,

2: `
  <div class="card">
    <h2>Day 2 — JavaScript Core Logic & Behavior</h2>
    <p>
      Day 2 was focused on understanding how JavaScript actually <strong>behaves</strong>
      behind the scenes. Instead of memorizing syntax, I explored how values,
      expressions, and control flow work in real programs.
    </p>
  </div>

  <div class="card">
    <h2>Expressions vs Statements</h2>
    <p>
      An <strong>expression</strong> is something that produces a value, while a
      <strong>statement</strong> performs an action.
    </p>
    <pre><code>
// Expression (returns a value)
5 + 3
x > 10
"Hello" + " World"

// Statement (performs an action)
let x = 10;
if (x > 5) {
  console.log("x is greater than 5");
}
    </code></pre>
    <p>
      Understanding this difference helps in writing cleaner logic and debugging
      unexpected behavior.
    </p>
  </div>

  <div class="card">
    <h2>Type Coercion</h2>
    <p>
      Type coercion is JavaScript’s automatic conversion of one data type into another.
      This happens mostly during comparisons and operations.
    </p>
    <pre><code>
// String + Number
console.log(5 + "5");   // "55"

// Number - String
console.log(5 - "2");   // 3

// Boolean coercion
console.log(true + 1);  // 2
console.log(false + 1); // 1
    </code></pre>
    <p>
      Type coercion can be helpful but also dangerous if not understood properly.
      Using strict comparisons avoids many bugs.
    </p>
  </div>

  <div class="card">
    <h2>Truthy & Falsy Values</h2>
    <p>
      In JavaScript, every value has an inherent boolean nature when evaluated in
      a conditional context.
    </p>
    <pre><code>
// Falsy values
false
0
""
null
undefined
NaN

// Everything else is truthy
    </code></pre>
    <pre><code>
if ("JavaScript") {
  console.log("This runs because it's truthy");
}

if (0) {
  console.log("This will NOT run");
}
    </code></pre>
    <p>
      Knowing truthy and falsy values is crucial for writing conditions and guards.
    </p>
  </div>

  <div class="card">
    <h2>Console.log vs Console.info</h2>
    <p>
      Both are used for logging information, but they serve slightly different purposes.
    </p>
    <pre><code>
console.log("General message");
console.info("Informational message");
    </code></pre>
    <p>
      <strong>console.log</strong> is used for general debugging, while
      <strong>console.info</strong> semantically represents informational output.
      In many browsers, they appear similar but differ in intent.
    </p>
  </div>

  <div class="card">
    <h2>Loops in JavaScript</h2>
    <p>
      Loops allow repeated execution of code blocks, which is essential for
      working with data collections and logic.
    </p>
  </div>

  <div class="card">
    <h2>For Loop</h2>
    <pre><code>
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}
    </code></pre>
    <p>
      Best used when the number of iterations is known beforehand.
    </p>
  </div>

  <div class="card">
    <h2>While Loop</h2>
    <pre><code>
let count = 1;
while (count <= 3) {
  console.log("Count:", count);
  count++;
}
    </code></pre>
    <p>
      Used when the condition is checked before each iteration.
    </p>
  </div>

  <div class="card">
    <h2>Do...While Loop</h2>
    <pre><code>
let num = 5;
do {
  console.log("Runs at least once");
  num--;
} while (num > 5);
    </code></pre>
    <p>
      The code executes at least once, even if the condition is false.
    </p>
  </div>

  <div class="card">
    <h2>Arrays</h2>
    <p>
      Arrays are ordered collections used to store multiple values in a single variable.
    </p>
    <pre><code>
let languages = ["JavaScript", "Python", "C++"];

console.log(languages[0]); // JavaScript
languages.push("Java");
    </code></pre>
    <p>
      Arrays are heavily used with loops for data processing.
    </p>
  </div>

  <div class="card">
    <h2>Objects</h2>
    <p>
      Objects store data in key-value pairs and represent real-world entities.
    </p>
    <pre><code>
const student = {
  name: "Hari",
  course: "BCA",
  year: 2
};

console.log(student.name);
student.year = 3;
    </code></pre>
    <p>
      Objects form the backbone of JavaScript and are used everywhere in real applications.
    </p>
  </div>

  <div class="card">
    <h2>Day 2 Summary</h2>
    <p>
      Covered core JavaScript behavior including expressions, type coercion,
      truthy & falsy values, console methods, loops, arrays, and objects.
      This day strengthened logical thinking and prepared me for more complex concepts.
    </p>
  </div>
`,


3: `
  <div class="card">
    <h2>Day 3 — Advanced JavaScript Fundamentals</h2>
    <p>
      Day 3 was about closing all remaining gaps in JavaScript fundamentals.
      I focused on understanding function behavior, scope, closures, array methods,
      object properties, and asynchronous basics. With this, my JavaScript foundation
      now feels complete and structured.
    </p>
  </div>

  <div class="card">
    <h2>Functions in JavaScript</h2>
    <p>
      Functions are reusable blocks of code that perform a specific task.
      JavaScript supports multiple ways to define functions.
    </p>
    <pre><code>
// Function declaration
function greet(name) {
  return "Hello " + name;
}

// Function expression
const sayHi = function () {
  console.log("Hi");
};

// Arrow function
const add = (a, b) => a + b;
    </code></pre>
  </div>

  <div class="card">
    <h2>IIFE (Immediately Invoked Function Expression)</h2>
    <p>
      An IIFE runs immediately after being defined and is commonly used to
      avoid polluting the global scope.
    </p>
    <pre><code>
(function () {
  console.log("IIFE executed");
})();
    </code></pre>
  </div>

  <div class="card">
    <h2>Scope: Global, Function & Block</h2>
    <p>
      Scope defines where variables can be accessed in a program.
    </p>
    <pre><code>
let globalVar = "Global";

function testScope() {
  let functionVar = "Function";
  if (true) {
    let blockVar = "Block";
    console.log(blockVar);
  }
}
    </code></pre>
  </div>

  <div class="card">
    <h2>Closures</h2>
    <p>
      A closure allows a function to access variables from its outer scope
      even after the outer function has finished execution.
    </p>
    <pre><code>
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
    </code></pre>
  </div>

  <div class="card">
    <h2>Array Iteration Methods</h2>
    <p>
      Modern JavaScript provides powerful array methods for cleaner logic.
    </p>
    <pre><code>
const numbers = [1, 2, 3, 4, 5];

// forEach
numbers.forEach(num => console.log(num));

// filter
const even = numbers.filter(n => n % 2 === 0);

// reduce (sum)
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    </code></pre>
  </div>

  <div class="card">
    <h2>Loops: for...in & for...of</h2>
    <p>
      These loops are mainly used with objects and iterable data structures.
    </p>
    <pre><code>
const user = { name: "Hari", role: "Student" };

for (let key in user) {
  console.log(key, user[key]);
}

const arr = ["JS", "HTML", "CSS"];
for (let value of arr) {
  console.log(value);
}
    </code></pre>
  </div>

  <div class="card">
    <h2>Objects & Methods</h2>
    <p>
      Objects can contain functions, called methods.
    </p>
    <pre><code>
const person = {
  name: "Hari",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
  arrowGreet: () => {
    console.log("Arrow functions don't bind this");
  }
};
    </code></pre>
  </div>

  <div class="card">
    <h2>Object Properties & Object.freeze()</h2>
    <p>
      JavaScript objects have different property behaviors and can be frozen
      to prevent modification.
    </p>
    <pre><code>
const config = {
  app: "JS Basics"
};

Object.freeze(config);
config.app = "Changed"; // ignored
console.log(config.app);
    </code></pre>
  </div>

  <div class="card">
    <h2>setTimeout & Asynchronous Behavior</h2>
    <p>
      JavaScript is single-threaded but handles async tasks using the event loop.
    </p>
    <pre><code>
console.log("Start");

setTimeout(() => {
  console.log("Executed after delay");
}, 1000);

console.log("End");
    </code></pre>
  </div>

  <div class="card">
    <h2>Additional Core Concepts</h2>
    <ul>
      <li>Default parameters</li>
      <li>Rest & spread operators</li>
      <li>Destructuring arrays and objects</li>
      <li>Strict mode</li>
      <li>Primitive vs reference types</li>
      <li>Shallow vs deep copy</li>
    </ul>
  </div>

  <div class="card">
    <h2>Day 3 Summary</h2>
    <p>
      Completed advanced JavaScript fundamentals including functions, scope,
      closures, array methods, object behavior, async basics, and modern syntax.
      With this, my JavaScript basics are complete and I am ready to move
      forward to DOM manipulation and browser APIs.
    </p>
  </div>
`,

};

// Load Day 1 by default
content.innerHTML = daysData[1];

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const day = btn.dataset.day;
    content.innerHTML = daysData[day];
  });
});
