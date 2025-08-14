// //var vs let
// var a = ahm();
// console.log(a);
// function ahm() {
//     if (true) {
//         var x = 5; //correct
//         //let x = 5;  //error
//     }
//     return x;
// }

// ahmed = "hello"
// console.log(ahmed)


const a = 5 > 2;
console.log(a)

let x = 5;
let y;
x += y = 10 - 5;
console.log(x, y)

//template string
console.log(`ah,ED${x}`)

//regular string
console.log('ah,ED${x}'); //you can not use variable

// if (x > 5) {
//     let z = 20
// }
// else {
//     let z = 10
// }
// console.log(z)

//type conversion
console.log(Number("ahmed")) //Nan
console.log(Number("123"))
let b = String(12);
console.log(b + "123")

//type coercion
console.log('23' + '10' - 5) //'2310' - 5 → 2305
console.log('23' + '10' + 5) //'23105'
console.log('23' - '10' - 5) //8
console.log('23' * '2') //46
console.log(true + 3) // 1 + 3 = 4
console.log(false + 3) // 0 + 3 = 3

//5 fallsy values: 0, '', undefined, null, NaN
console.log(Boolean(NaN))

console.log(18 === '18') //does not perform type coercion
console.log(18 == '18') //does perform type coercion

switch (12) {
    case '12': //12 === '12' false
        console.log("no");
        break;
    case 12:
        console.log("yes");
        break;
}

10 > 5 ? console.log("yes") : console.log("no");