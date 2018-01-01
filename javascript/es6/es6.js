"use strict";
/*
let tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);

let doubleOddNumbers = arr=> arr.filter((val)=> val % 2 !== 0).map((val) => val *2);

let mapFilterAndReduce = arr=> arr.map(val => val.firstName ).filter(val => val.length < 5)
    .reduce((acc,next)=>{
      acc[next] = next.length;
      return acc;
    }, {});

let createStudentObj = (first, last) =>({firstName:first, lastName:last});

  var instructor = {
    firstName: "Colt",
    sayHi: function(){
      setTimeout(()=>{
        console.log('Hello ' + this.firstName)
      },1000)
    }
  }
*/
// console.log(sumEvenArgs(1,2));
  
// function sumEvenArgs(...rest){
//     return rest.reduce((acc,next)=>{
//         if(next%2 === 0){
//             return acc +=next
//         }
//         return acc
//     },0);
// }

// function personSubtract(a,b,c){
//     return this.firstName + " subtracts " + (a-b-c);
// }

// var person = {
//     firstName: 'Elie'
// }

// // console.log(flipFn(3,2,1));
// function flip(fn, fnThis, ...args){
//     return function(...args2){
//         // debugger;
//         let allArgs = args.concat(args2).slice(0,fn.length);
//         // console.log(allArgs);
//         return fn.apply(fnThis,allArgs.reverse());
//     }
// }
// var flipFn = flip(personSubtract, person);
// flipFn(3,2,1)


// function firstNameFavoriteColor(favoriteColor){
//     console.log(this,"this",favoriteColor,"favoriteColor");
//     return this.firstName + "'s favorite color is " + favoriteColor
// }

// var person = {
//     firstName: 'Elie'
// }

// var bindFn = bind(firstNameFavoriteColor, person, 'blue');
// console.log( bindFn('green'));
// function addFourNumbers(a,b,c,d){
//     return a+b+c+d;
// }
// console.log(bind(addFourNumbers,this,1)(2,3,4));
// function bind(fn, thisArg, ...outerArgs){
//     return function(...innerArgs){
//         console.log(thisArg);
//         return fn.apply(thisArg, [...outerArgs, ...innerArgs])
//     }
//   }

// console.log(printFullName({first: 'Elie', last:'Schoppik'})) // 'Your full name is Elie Schoppik')
  
//   function displayStudentInfo(obj){
//     var {first, last} = obj;
//     return `Your full name is ${first} ${last}`
//   }

//   function printFullName({first,last}){
//     return `Your full name is ${first} ${last}`; 
//  }

//  console.log(createStudent());

//  function createStudent({likesJavaScript = true, likesES2015 = true} = {}){
//     var start = 'The student';
//     if(likesJavaScript === true && likesES2015 === true){
//       start += ' likes JavaScript and ES2015'
//     } else if(likesJavaScript){
//       start += ' likes JavaScript!'
//     } else if(likesES2015){
//       start += ' likes ES2015!'
//     } else {
//       start += ' does not like much...'
//     }
//     return start;
//   }

function test1 (){
    this.name = "test";
    this.type1 = "tesssst";
    this.sayHi = function(){
        return this.type1;
    }
}

test1.prototype.sayHello = function(){
    return this.name;
};

const asdf = new test1();
console.log(asdf.name);
console.log(asdf.type1);
console.log(asdf.sayHi());
console.log(asdf.sayHello());

class test2{
    constructor(){
        this.name = "test2";
        this.type2 = "tesssst";
        this.sayHi = function(){
            return this.type2;
        };
    }
    sayHello(){
        return this.name;
    };
}
const asdf2 = new test2();
console.log(asdf2.name);
console.log(asdf2.type2);
console.log(asdf2.sayHi());
console.log(asdf2.sayHello());

console.log(test1);
console.log(test2);