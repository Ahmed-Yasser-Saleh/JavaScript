DophinsSc1 = 85;
DophinsSc2 = 54;
DophinsSc3 = 71;
KoalasSc1 = 65;
KoalasSc2 = 54;
KoalasSc3 = 49;

const avgscoreDophin = (DophinsSc1, DophinsSc2, DophinsSc3) => { return ((DophinsSc1 + DophinsSc2 + DophinsSc3) / 3); }
const avgscoreKoala = (KoalasSc1, KoalasSc2, KoalasSc3) => { return ((KoalasSc1 + KoalasSc2 + KoalasSc3) / 3); }
function checkwinner(avgscoreDophin, avgscoreKoala) {
    if (avgscoreDophin > avgscoreKoala)
        console.log(`Dophin win (${avgscoreDophin} vs ${avgscoreKoala})`)
    else if (avgscoreDophin < avgscoreKoala)
        console.log(`Koala win (${avgscoreKoala} vs ${avgscoreDophin})`)
}

const avg1 = avgscoreDophin(DophinsSc1, DophinsSc2, DophinsSc3);
const avg2 = avgscoreKoala(KoalasSc1, KoalasSc2, KoalasSc3);
checkwinner(avg1, avg2);