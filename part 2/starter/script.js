// 'use strict' //to see bugs and error
// //let private = 5;

// //FUNCTION decleration 
// first(5)
// function first(a) {
//     console.log(a)
// }

// //first(5) 

// //FUNCTION expression  
// //console.log(b(5)) → error can not call before it
// const b = function first(a) {
//     return a;
// }
// console.log(b(5))


// const c = (a) => {
//     a++;
//     return a;
// } //arrow function (lambda)
// console.log(c(7))

// const d = () => { console.log("mohamed") }
// d()


// const t = (v) =>
//     v - 3;
// console.log(t(6))

// let friends = [2, 'b', true]
// console.log(friends)
// friends = [2, 'b', false]
// console.log(friends)

// const friendss = [2, 'b', true]
// console.log(friendss)
// //friendss = [2, 'b', false] //error because const
// friendss[0] = 'ahmed' //no error
// console.log(friendss)

let x = 1;
// let arr = [x, x, 'a']
// console.log(arr)

// arr.push(2);
// arr.unshift(3);
// arr.pop()
// arr.shift()
// arr.includes('1'); //'1' === 1 false
// console.log(arr.indexOf(1));

//object
const jonas = {
    fname: 'ahmed',
    lname: 'yasser',
    age: 24,
    job: 'fullstack .net',
    friends: ['nasser', 'eslam'],
    fun: (a) => a * a, //function
    fun2: function () {
        console.log("heeloo")
    },
    fun3: function () {
        return this.lname;
    },
    fun4() {
        this.age = 5;
        return this.age;
    }
    // fun3: () => this.lname //not correct this keyword  do not work in arrow function
};

console.log(jonas)
jonas.age = 23
console.log(jonas.age)
// ==
console.log(jonas['age'])
jonas.location = 'suez';
console.log(jonas)
console.log(jonas.friends[0])
console.log(jonas.fun(2))
console.log(jonas["fun"](2))
console.log(jonas.fun2())
console.log(jonas.fun3())
console.log(jonas.fun4())
console.log(jonas)