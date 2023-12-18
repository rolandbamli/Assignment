function teruletMagassaggalEsOldallal(magassag: number, oldal: number): number {
    return magassag * oldal;
}

function teruletSzoggelEsKetOldallal(oldalA: number, oldalB: number, szogFokban: number): number {
    // A szöget radiánba konvertáljuk
    const szogRadianban = szogFokban * (Math.PI / 180);
    return oldalA * oldalB * Math.sin(szogRadianban);
}

// Példa használatra
const magassag = 10;
const oldal = 15;
console.log(`A paralelogramma területe magassággal és oldallal: ${teruletMagassaggalEsOldallal(magassag, oldal)} egység`);

const oldalA = 15;
const oldalB = 20;
const szog = 30;
console.log(`A paralelogramma területe szöggel és két oldallal: ${teruletSzoggelEsKetOldallal(oldalA, oldalB, szog)} egység`);
