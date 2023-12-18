function teruletMagassaggalEsOldallal(magassag, oldal) {
    return magassag * oldal;
}
function teruletSzoggelEsKetOldallal(oldalA, oldalB, szogFokban) {
    // A szöget radiánba konvertáljuk
    var szogRadianban = szogFokban * (Math.PI / 180);
    return oldalA * oldalB * Math.sin(szogRadianban);
}
// Példa használatra
var magassag = 10;
var oldal = 15;
console.log("A paralelogramma ter\u00FClete magass\u00E1ggal \u00E9s oldallal: ".concat(teruletMagassaggalEsOldallal(magassag, oldal), " egys\u00E9g"));
var oldalA = 15;
var oldalB = 20;
var szog = 30;
console.log("A paralelogramma ter\u00FClete sz\u00F6ggel \u00E9s k\u00E9t oldallal: ".concat(teruletSzoggelEsKetOldallal(oldalA, oldalB, szog), " egys\u00E9g"));
