

export interface Artwork{
    title : string;
    year : number;
    price : number;
}


let szobrok : Artwork[] = [];

document.getElementById('felvesz')?.addEventListener('click', ()=>{

    let szoborNev = document.getElementById('szobornev') as HTMLInputElement;
    let szoborNevVan = false;
    if(szoborNev.value != ""){
        szoborNevVan = true;
    }else{
        szoborNevVan = false;
        
    }


    let keszitesiEv = document.getElementById('keszitesiEv') as HTMLInputElement;
    let keszitesiEvJo = false;
    if(parseInt(keszitesiEv.value) <= 2022){
        keszitesiEvJo = true;
    }else{
        keszitesiEvJo = false;
    }


    let kikialtasiAr = document.getElementById('ar') as HTMLInputElement;
    let kikialtasiArJo = false;
    if(parseInt(kikialtasiAr.value) >= 1){
        kikialtasiArJo = true;
    }else{
        keszitesiEvJo =false;
    }

    let szoborMagassag = document.getElementById('magassag') as HTMLInputElement;





})