let a = 10
let b = 3

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

let x = 5
x = x + 3
console.log(x)

x += 3
console.log(x)

x -= 2
console.log(x)

x *= 2
console.log(x)

x /= 2
console.log(x)

let count = 5
console.log(count++)
console.log(count)

console.log(count--)
console.log(count)

console.log(5 == "5")
console.log(5 === "5")

console.log(10 > 5)
console.log(10 < 20)
console.log(10 == 10)

console.log(true && false)
console.log(true || false)
console.log(!true)

console.log(5 > 3 && 10 > 8)
console.log(5 > 3 || 10 < 8)

console.log(5 & 1)
console.log(5 | 1)

console.log(ab)
var ab = 10

try {
  console.log(b)
  let b = 10
} catch (e) {
  console.log("Error")
}

test()
function test() {
  console.log("Hello")
}

try {
  hello()
  var hello = function () {
    console.log("Hi")
  }
} catch (e) {
  console.log("Error")
}

console.log("Functions are hoisted")
console.log("Variables with let and const are not hoisted fully")

let age = Number(prompt("Enter age"))
if (age > 18) {
  console.log("Adult")
} else {
  console.log("Minor")
}

let marks = Number(prompt("Enter marks"))
if (marks >= 90) {
  console.log("A grade")
} else if (marks >= 75) {
  console.log("B grade")
} else if (marks >= 50) {
  console.log("C grade")
} else {
  console.log("Fail")
}

let city = "Bhopal"
if (city === "Bhopal") {
  console.log("MP")
} else if (city === "Delhi") {
  console.log("Capital")
} else {
  console.log("Unknown City")
}

let score = 40
console.log(score > 35 ? "Pass" : "Fail")

let temperature = 32
console.log(temperature > 30 ? "Hot" : "Pleasant")

let day = Number(prompt("Enter day number"))
switch (day) {
  case 1: console.log("Monday"); break
  case 2: console.log("Tuesday"); break
  case 3: console.log("Wednesday"); break
  case 4: console.log("Thursday"); break
  case 5: console.log("Friday"); break
  case 6: console.log("Saturday"); break
  case 7: console.log("Sunday"); break
  default: console.log("Invalid Day")
}

let country = "India"
if (age > 18 && country === "India") {
  console.log("Eligible for Vote")
} else {
  console.log("Not Eligible")
}
