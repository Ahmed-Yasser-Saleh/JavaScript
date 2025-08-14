let arrbill = [125, 255, 44, 440, 37];
let arrtip = [];
let arrtotal = [];

function checktip(bill) {
    let tip;
    tipPercent = (bill >= 50 && bill <= 300) ? 15 : 20;
    tip = (tipPercent / 100) * bill;
    arrtotal.push(tip + bill)
    arrtip.push(tip);
}
for(let i = 0; i < arrbill.length; i++)
   checktip(arrbill[i])

console.log(arrtip);
console.log(arrtotal);