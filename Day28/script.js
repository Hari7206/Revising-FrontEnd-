let Laptop = {
brand: 'Victus',
price: 40000,
 function(){
    console.log("laptop started")
},
increasePrice() {
     this.price = this.price * 1.10
}
}
Laptop.increasePrice()
console.log(Laptop.price);

// so if i need more 10 laptop like this with different data it will increse the code repetition and does not maintain the code reusability so this take to much time and space also so this is not the efficent way to do soo
class Employee {
constructor(name , salary){
    this.name =  name
    this.salary = salary
}
  ShowDetails(name , salary){
    console.log(`the name of the employe ${this.name} and salary is ${this.salary}`);
  }
}
let empData1 = new Employee('hari' , 58000);
let empData2 = new Employee('ravi' , 34000);
let empData3 = new Employee('pari' , 98000);

empData1.ShowDetails(); 
empData2.ShowDetails(); 
empData3.ShowDetails(); 
console.log(empData1);
console.log(empData2);
console.log(empData3);
//  this is better beacuse we don't need to make the class again and again we can reuse this with more employee also 



// SECTION 3: Constructor and Initialization
class BankAccount {
    constructor(accountHolderName  , balance){
        this.accountHolderName = accountHolderName
        this.balance = balance
    }
    DepostieAmount(amount) {
        this.balance += amount;
    }
}
let acc1 = new BankAccount("hari" , 120000)
let acc2 = new BankAccount("ravi" , 120000)
acc1.DepostieAmount(50000)

console.log("incerse bank deposite $"  + acc1.balance); 
console.log("intial money of account $" + acc2.balance); 

// here it is not affect the second bank account cause we have both new differnt object which use the same prototype with the classBankAccount  they both have thier data 


// SECTION 4: Understanding this (Very Important)
let Profile = {
    userName: "Hari",
    printName(){
        console.log(this.userName);
        
    }
}
Profile.printName()
// let name = Profile.printName()              this will cause the problem cause this is now went to the strict mode if we want to save it in the new funciton we have to use the bind property for this so we can save this in the new 
// // name()
let name = Profile.printName.bind(Profile)    
name()



// SECTION 5: Constructor Function and Prototype
function Vechile(type , wheel) {
    this.type = type
    this.wheel = wheel
    this.about = function(){
        console.log(`this vechile type is ${this.type} and it has ${this.wheel} wheels`);
        
    }
}

let vechile1 = new Vechile('car ' , '4')
let vechile2 = new Vechile('bike ' , '4')
vechile1.about()
vechile2.about()
console.log(vechile1.about === vechile2.about);
// this is because when we give the method through the constructor to the new objects that create the method for the every other object means every other object takes the differnnt location for thier own method



function Vehicles(type, wheels) {
  this.type = type;
  this.wheels = wheels;
}

Vehicles.prototype.about = function () {
  console.log(`this vechile type is ${this.type} and it has ${this.wheels} wheels`);
};

let vec1 = new Vehicles('truck' , '4')
let vec2 = new Vehicles('scotty' , '2')
console.log(vec1.about === vec2.about);
// this is true cause with prototype method our object takes the method from the main function or object we can say so its did't have to make its own location it go to th eone particular lacation of the object where that method its and take from there



// SECTION 6: call Method Practice

function showBrands(){
    console.log(this.brand);
    
}
let obj1 =  {
    brand: "PIKE"
}
let obj2 =  {
    brand: "adibas"
}
console.log();

showBrands.call(obj1); 
showBrands.call(obj2)

//  so as per the js rule the function directly did not have any this direct value of the brand it direct to the window as the default rule so id show error to use 
//  but when we use the call it let our function this to decide which this value that should be target to 


// SECTION 7: apply Method Practice
function introduce(city  , role ){
    console.log(`my name is ${this.name} and my role is ${role}`);
    
}

let Data = {
    name: "Hari"
}
introduce.apply(Data ,["Hisar" , "software-developer"])

//  it is different from the call cause call pass the argument one by one and our apply pass arguments in the array 


// SECTION 8: bind Method Practice
function greet(){
    console.log(`hellow ${this.name}`);
}
let gret = greet.bind(Data)
gret()




//  in the class  62 we have stack means the full detial of our error msg  and the name means what type of the error is 