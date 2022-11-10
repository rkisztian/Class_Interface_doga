"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
let szobrok = [];
(_a = document.getElementById('felvesz')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    let szoborNev = document.getElementById('szobornev');
    let szoborNevVan = false;
    if (szoborNev.value != "") {
        szoborNevVan = true;
    }
    else {
        szoborNevVan = false;
    }
    let keszitesiEv = document.getElementById('keszitesiEv');
    let keszitesiEvJo = false;
    if (parseInt(keszitesiEv.value) <= 2022) {
        keszitesiEvJo = true;
    }
    else {
        keszitesiEvJo = false;
    }
    let kikialtasiAr = document.getElementById('ar');
    let kikialtasiArJo = false;
    if (parseInt(kikialtasiAr.value) >= 1) {
        kikialtasiArJo = true;
    }
    else {
        keszitesiEvJo = false;
    }
    let szoborMagassag = document.getElementById('magassag');
});
