var colt = {
    firstName:"colt",
    sayHello: function(){
        setTimeout(function(){
            console.log("hello " + this.firstName);
        }.bind(this),1000);
    }
};
// colt.sayHello();
function sumEvenArguments(){
    var newArr = [].slice.call(arguments);
    console.log(newArr);
    return newArr.reduce(function(acc,next){
        if(next%2==0){
           return acc +=next;
        }
        return acc;
    },0);
}

console.log(sumEvenArguments(1,2,3,4));
function add(a,b){
    return a+b
}

function invokeMax(fn, num){
    var count = 0;
    return function(){
        if(num > count){
            count++;
            return fn.apply(this,arguments);
        }else{
            return "Maxed Out!";
        }
    };
}

var addOnlyThreeTimes = invokeMax(add,3);
console.log(addOnlyThreeTimes(1,2));
console.log(addOnlyThreeTimes(2,2));
console.log(addOnlyThreeTimes(1,2));
console.log(addOnlyThreeTimes(1,2));

function once(fn, thisArg){
    var once = false;
    return function(){
        if(!once){
            once = true;
            return fn.apply(thisArg,arguments);
        }
        return undefined;
    };
}

function doMath(a,b,c){
    return this.firstName + " adds " + (a+b+c);
}
var instructor = {firstName: "Elie"};
var doMathOnce = once(doMath, instructor);
console.log( doMathOnce(1,2,3));
console.log( doMathOnce(1,2,3));

function firstNameFavoriteColor(favoriteColor){
    return this.firstName + "'s favorite color is " + favoriteColor;
}

var person = {
    firstName: 'Elie'
};

var bindFn = bind(firstNameFavoriteColor, person);
// bindFn('green'); // "Elie's favorite color is green"

var bindFn2 = bind(firstNameFavoriteColor, person, 1);
console.log(bindFn2(2,3,4));
// bindFn2('green');
// console.log(bindFn2('green')); // "Elie's favorite color is blue"

function addFourNumbers(a,b,c,d){
    return a+b+c+d;
}

function bind(fn, thisArg){
    var outer = [].slice.call(arguments,2);
    // console.log(outer);
    return function(){
        var inner = [].slice.call(arguments);
        var all = outer.concat(inner);
        // console.log(all)
        return fn.apply(thisArg,all);
    };
}

console.log(bind(addFourNumbers,this,1)(2,3,4));//10

function personSubtract(a,b,c){
    return this.firstName + " subtracts " + (a-b-c);
}

function flip(fn, thisArg){
    var outer = [].slice.call(arguments,2);
    console.log(outer);
    return function(){
        var inner = [].slice.call(arguments);
        var all = outer.concat(inner).slice(0,fn.length);
        console.log(fn);
        return fn.apply(thisArg, all.reverse())
    };
}
function subtractFourNumbers(a,b,c,d){
    return a-b-c-d;
}
var flipFn = flip(personSubtract, person,5,6);
console.log(flip(subtractFourNumbers,this,1,2,3)(4,5,6,7,5,6,7,8,2));