"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
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
        alert("Nem lehet a készitési év több, mint a jelenlegi évszám");
    }
    let kikialtasiAr = document.getElementById('ar');
    let kikialtasiArJo = false;
    if (parseInt(kikialtasiAr.value) >= 1) {
        kikialtasiArJo = true;
    }
    else {
        keszitesiEvJo = false;
        alert("Minimum 1Ft kell, hogy legyen");
    }
    let szoborMagassag = document.getElementById('magassag');
    let szoborMagassagJo = false;
    if (parseInt(szoborMagassag.value) >= 20) {
        szoborMagassagJo = true;
    }
    else {
        szoborMagassagJo = false;
        alert("Minimum 20cm magasnak kell lennie a szobornak");
    }
    if (szoborNevVan && keszitesiEvJo && kikialtasiArJo && szoborMagassagJo) {
        szobrok.push(new Statue_1.Statue(szoborNev.value, parseInt(keszitesiEv.value), parseInt(kikialtasiAr.value), parseInt(szoborMagassag.value)));
        szoborNev.value = "";
        keszitesiEv.value = "";
        kikialtasiAr.value = "";
        szoborMagassag.value = "";
    }
});
