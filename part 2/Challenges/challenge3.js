const mark = {
fname: 'Mark',
lname: "Miller",
height: 1.69,
weight: 78,
calcBMI(){
return this.weight / (this.height ** 2)
}
};

const John = {
fname: 'John',
lname: "Smith",
height: 1.95,
weight: 92,
calcBMI(){
return this.weight / (this.height ** 2)
}
};

const markBim = mark.calcBMI();
const johnBmi = John.calcBMI();
markBim < johnBmi? console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBim})!"`): 
console.log(`Mark's BMI (${markBim}) is higher than John's (${johnBmi})!"`);