(()=>{"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0});const t=require("./Statue");console.log("Kész");let l=[];null===(e=document.getElementById("felvesz"))||void 0===e||e.addEventListener("click",(()=>{let e=document.getElementById("szobornev"),a=!1;a=""!=e.value;let n=document.getElementById("keszitesiEv"),u=!1;parseInt(n.value)<=2022?u=!0:(u=!1,alert("Nem lehet a készitési év több, mint a jelenlegi évszám"));let s=document.getElementById("ar"),m=!1;parseInt(s.value)>=1?m=!0:(u=!1,alert("Minimum 1Ft kell, hogy legyen"));let r=document.getElementById("magassag"),o=!1;parseInt(r.value)>=20?o=!0:(o=!1,alert("Minimum 20cm magasnak kell lennie a szobornak")),a&&u&&m&&o&&(l.push(new t.Statue(e.value,parseInt(n.value),parseInt(s.value),parseInt(r.value))),e.value="",n.value="",s.value="",r.value="");let v=0;for(let e=0;e<l.length;e++)v++;document.getElementById("darabszam").textContent=String(v)}))})();