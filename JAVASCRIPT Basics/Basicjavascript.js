let name='world';let age='250';
console.log(name+' '+age);
let range=4;
range=10;
console.log(range);
//primitive data types
let s1='hello world';
let num=50;
let salary=100.20;
let flag=true;
let inactive=false;
let price;
let model=null;
let wheel=undefined;
let d='sugan';
d=50;
//reference type
///object
let user ={
    name:"tom",
    age:15
};
console.log(user);
//dot notation 
console.log (user.name);
console.log (user.age);
user.age=20
console.log(user.age);
console.log (user.name+'  '+user.age);
//using bracket notation
user['name']='marycoome';
console.log(user.name);
//Arrays
//list of object
let language=['java','java script'];
console.log(language);
console.log(language.length);
language[2]='Ruby';
console.log(language.length);
console.log(language[1]);
// Function declaration
function getName() {
    console.log('this is my code');
}
getName();
// Call the function
//param based function
function greet(name,age){
    console.log('hello'+name+' '+age);
}
greet('john',20);
greet('tom');
greet();
//return from function
function add (num1,num2){
    return num1+num2;
}
let sum=add(10,20);
console.log(sum);
console.log(add(50,100));
function SquarRoot(Number){
    let Root=Number *Number;
    return Root;
}
console.log(SquarRoot(2));
console.log(SquarRoot(8));