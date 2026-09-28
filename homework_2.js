//1
var isGay = false;

let balls = 5;
let undef;
let nothing = null;

const MY_NAME = "Alex";

const ALEX = {
    name: "Alex",
    age: 18,
    isStudent: true,
};

console.log(isGay);
console.log(balls);
console.log(undef);
console.log(nothing);
console.log(MY_NAME);
console.log(ALEX);

//2
let str = "JavaScript Basics";

console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.replace("Basics", "Fundamentals"));

//3
let num = 123.456789;

console.log(num.toFixed(2));

//4
let greetings = "hi!";
var num1 = 1;

greetings = "bye!";
var num1 = 1;

//5
console.log("5" == 5); //true because == compares only value
console.log("5" === 5) //false because === compares type and value
console.log(10 > 5) //true
console.log(3 < 1) //false

//6
let num2 = 19;

if(num2 % 2 === 0) {
    console.log(`${num2} is even`);
}
else {
    console.log(`${num2} is odd`);
}

//7
if(num2 > 10 && num2 < 20) {
    console.log(`${num2} is between 10 and 20`);
}
else {
    console.log(`${num2} isn't between 10 and 20`);
}

if(str !== "" && str.length > 5) {
    console.log("correct!")
}
else {
    console.log("wrong!");
}

//8
let arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.shift();

console.log(arr.indexOf(3));

//9
let user = {
    name: "viktor",
    age: 22,
    isAdmin: true
};

user.age = 23;
user.mail = "viktor_boss@gmail.com";

//10
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

//11
let i = 10;

while(i > 0) {
    console.log(i);
    i--;
}

//12
const fruits = ["apple", "banana", "cherry"];

for(let fruit of fruits) {
    console.log(fruit);
}

//13
let user2 = {
    name: "John",
    age: 25,
    city: "New York"
};

for(let entrie of Object.entries(user2)) {
    console.log(entrie);
}

//14
for(let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`${i} FizzBuzz`)
    }
    else if(i % 3 === 0) {
        console.log(`${i} Fizz`);
    }
    else if(i % 5 === 0) {
        console.log(`${i} Buzz`);
    }
    else{
        console.log(i);
    }
}

//15
let num3 = 123;
let str3 = "456";

num3.toString();
Number.parseInt(str3);

//16
let arr2 = [10, 20, 30, 40, 50];

console.log(arr2.includes(30));

//17
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let newArr = [...arr3, ...arr4];

//18
const arr5 = [1,11,5];

let max = arr5.reduce((max, cur) => max < cur ? cur : max, 0);