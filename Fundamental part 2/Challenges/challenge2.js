//task1
let bill = 100;
function checktip1(bill) {
    tipPercent = (bill >= 50 && bill <= 300) ? 15 : 20;
    return tipPercent;
}
console.log(checktip1(bill))

//task2
let arrbill = [125, 255, 44];
let arrtip = [];
let arrtotal = [];

function checktip2(bill) {
    let tip;
    tipPercent = (bill >= 50 && bill <= 300) ? 15 : 20;
    tip = (tipPercent / 100) * bill;
    arrtotal.push(tip + bill)
    arrtip.push(tip);
}

checktip2(arrbill[0])
checktip2(arrbill[1])
checktip2(arrbill[2])
console.log(arrtip);


console.log(arrtotal);