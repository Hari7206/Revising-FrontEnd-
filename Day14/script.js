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
      <h2>Day 2 — Coming Soon 👀</h2>
      <p>
        Planned topics:
      </p>
      <ul>
        <li>Operators</li>
        <li>Conditionals</li>
        <li>Truthy & Falsy</li>
      </ul>
    </div>
  `,

  3: `
    <div class="card">
      <h2>Day 3 — Locked 🔒</h2>
      <p>Will unlock after consistency.</p>
    </div>
  `
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
