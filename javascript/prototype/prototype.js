// function Person (name){
//     this.name = name;
// }

// Person.prototype.sayHi = function(){
//     return this.name + " Hi!";
// };
// var eile = new Person("Eile");
// console.log(eile.sayHi());

// function Person (firstName, lastName, favoriteColor, favoriteNumber){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.favoriteColor = favoriteColor;
//     this.favoriteNumber = favoriteNumber;
//     this.family = [];
// }

// Person.prototype.fullName = function(){
//     return this.firstName + ' ' + this.lastName;
// };

// Person.prototype.addToFamily = function(check){
//     if(this.family.indexOf(check) === -1 && check instanceof Person){
//         this.family.push(check);
//     }
//     return this.family.length;
// }

// var person = new Person("Elie", "Schoppik", "purple", 34)
// var anotherPerson = new Person();

// console.log(person.addToFamily(anotherPerson));

// Array.prototype.map = function(callback){
//     var newArr = [];
//     for (var i = 0; i < this.length ; i++){
//         newArr.push(callback(this[i],i,this));
//     }
//     return newArr;
// };

// String.prototype.reverse = function(){
//     var newStr = '';
//     for(var i = this.length-1; i >= 0; i--){
//         newStr += this[i];
//     }
//     return newStr;
// };

// console.log( "tacocat".reverse());

function Vehicle (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.start = function(){
    return "VROOM!";
};
Vehicle.prototype.toString = function(){
    return "The make, model, and year are " + this.make + " " + this.model + " " + this.year;
};

function Car (make, model, year){
    Vehicle.apply(this,arguments);
    this.numWheels = 4;
}
// console.log(sss);
Car.prototype = Object.create(Vehicle.prototype);
// console.log(sss);
Car.prototype.constructor = Car;
var sss = new Car("ss","ss","sss");
// console.log(sss);

function MotorCycle(make, model, year){
    console.log(this);
    Vehicle.apply(this,arguments);
    console.log(this);
    this.numWheels = 2;
}

MotorCycle.prototype = Object.create(Vehicle.prototype);
MotorCycle.prototype.constructor = MotorCycle;
// console.log(new MotorCycle(1,2,3));

var www = new MotorCycle(123,123,123)
console.log(www);
// www.start = function(){return "sss"};
console.log(www.start());
var vi = new Vehicle(3,4,2)
console.log(vi);
console.log(vi.start());
