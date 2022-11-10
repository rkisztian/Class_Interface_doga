import { Statue } from "./Statue";

export interface Artwork{
    title : string;
    year : number;
    price : number;

}


let szobrok : Artwork[] = [];

document.getElementById('felvesz')?.addEventListener('click', ()=>{

    let szoborNev : HTMLInputElement = document.getElementById('szobornev') as HTMLInputElement;
    let szoborNevVan = false;
    if(szoborNev.value != ""){
        szoborNevVan = true;
    }else{
        szoborNevVan = false;
        
        
    }

    
    let keszitesiEv : HTMLInputElement = document.getElementById('keszitesiEv') as HTMLInputElement;
    let keszitesiEvJo = false;
    if(parseInt(keszitesiEv.value) <= 2022){
        keszitesiEvJo = true;
    }else{
        keszitesiEvJo = false;
        alert("Nem lehet a készitési év több, mint a jelenlegi évszám");
    }


    let kikialtasiAr : HTMLInputElement = document.getElementById('ar') as HTMLInputElement;
    let kikialtasiArJo = false;
    if(parseInt(kikialtasiAr.value) >= 1){
        kikialtasiArJo = true;
    }else{
        keszitesiEvJo =false;
        alert("Minimum 1Ft kell, hogy legyen")
    }


    let szoborMagassag : HTMLInputElement = document.getElementById('magassag') as HTMLInputElement;
    let szoborMagassagJo = false;
    if(parseInt(szoborMagassag.value) >= 20){
        szoborMagassagJo = true;
    }else{
        szoborMagassagJo = false;
        alert("Minimum 20cm magasnak kell lennie a szobornak");
    }
    

    if(szoborNevVan && keszitesiEvJo && kikialtasiArJo && szoborMagassagJo){
        szobrok.push(new Statue(szoborNev.value, parseInt(keszitesiEv.value), parseInt(kikialtasiAr.value), parseInt(szoborMagassag.value) ))
        szoborNev.value = "";
        keszitesiEv.value = "";
        kikialtasiAr.value = "";
        szoborMagassag.value = "";
    }

    let db = 0;
    for(let i = 0; i < szobrok.length; i++){
        db++;
    }
    (document.getElementById('darabszam') as HTMLElement).textContent = String(db);


})