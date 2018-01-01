var person = {
    firstName : "colt",
    sayHi:function(){
        return "Hi " + this.firstName;
    },
    determineContext:function(){
        return this === person;
    },
    dog:{
        sayHello:function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
};
// console.log(person.sayHi());
// console.log(person.dog.sayHello());
// console.log(person.dog.sayHello.call(person));
// console.log(person.dog.checkThis());
function sayHello(){
    return "hello " + this.firstName;
}
function addNumbers(a,b,c,d){
    return this.firstName+ " " + (a+b+c+d);
}
function sumValuse(a,b,c,d){
    return a+b+c+d;
}
var colt = {
    firstName:"colt"
};
var elie = {
    firstName:"elie"
};
var valuse = [1,2,3,4];
var elieCalc = addNumbers.bind(elie,1,2);

console.log(sayHello.call(colt));
console.log(sayHello.call(elie));
console.log(sayHello.apply(elie));
console.log(addNumbers.call(colt,1,2,3,4));
console.log(addNumbers.apply(elie,[1,2,3,4]));
console.log(sumValuse.apply(this, valuse));
console.log(elieCalc(3,4));