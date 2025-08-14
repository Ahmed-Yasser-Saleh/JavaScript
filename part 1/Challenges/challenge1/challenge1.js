const markMass1 = 78;
const markHeight1 = 1.68;
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass1 = 92;
const johnHeight1 = 1.95;
const johnMass2 = 85;
const johnHeight2 = 1.76;
let BmiMark1;
let BmiMark2;
let BmiJohn1;
let BmiJohn2;
let markHeigherBMI;
BmiMark1 = (markMass1 / (markHeight1 ** 2));
BmiJohn1 = (johnMass1 / (johnHeight1 ** 2));
markHeigherBMI = BmiMark1 > BmiJohn1
console.log(BmiMark1, BmiJohn1, markHeigherBMI)
BmiMark2 = (markMass2 / (markHeight2 ** 2));
BmiJohn2 = (johnMass2 / (johnHeight2 ** 2));
markHeigherBMI = BmiMark2 > BmiJohn2
console.log(BmiMark2, BmiJohn2, markHeigherBMI)

