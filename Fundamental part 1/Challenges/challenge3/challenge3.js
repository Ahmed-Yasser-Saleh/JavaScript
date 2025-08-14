DophinsSc1 = 97;
DophinsSc2 = 112;
DophinsSc3 = 80;
KoalasSc1 = 109;
KoalasSc2 = 95;
KoalasSc3 = 50;
DophinsScAvg = (DophinsSc1 + DophinsSc2 + DophinsSc3) / 3
KoalasScAvg = (KoalasSc1 + KoalasSc2 + KoalasSc3) / 3
if (DophinsScAvg > KoalasScAvg && DophinsScAvg >= 100) {
    console.log(`Dophins wins with DophinsScAvg: ${DophinsScAvg}`)
}

else if (DophinsScAvg < KoalasScAvg && KoalasScAvg >= 100) {
    console.log(`Koalas wins with KoalasScAvg: ${KoalasScAvg}`)
}

else if (DophinsScAvg === KoalasScAvg && KoalasScAvg >= 100 && DophinsScAvg >= 100) {
    console.log(`both Koalas & Dophins have the same avgscore: ${KoalasScAvg}`)
}

else {
    console.log(`No one wins as both score < 100, KoalasScAvg: ${KoalasScAvg} & DophinsScAvg ${DophinsScAvg}`)
}

