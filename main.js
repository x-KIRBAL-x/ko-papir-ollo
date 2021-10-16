
const ujra = document.querySelector('#ujra');
const ko = document.querySelector('#ko');
const papir = document.querySelector('#papir');
const ollo = document.querySelector('#ollo');
const eredmeny = document.querySelector('#eredmeny');
const kepek = document.querySelector('#kep_helye');
const veszt = document.querySelector('#vesz');
const nyertel = document.querySelector('#nyer');
const dontet = document.querySelector('#dont');
const ujatek = document.querySelector('#ujjatek'); 

ko.addEventListener('click', kokatt);
ko.addEventListener('click', kep);
papir.addEventListener('click', papirkatt);
papir.addEventListener('click', kep);
ollo.addEventListener('click', ollokatt);
ollo.addEventListener('click', kep);
ujra.addEventListener('click', jatek);
ujatek.addEventListener('click', ismetel);

var ellenfel =  Math.floor(Math.random()*3)+1;

let dontetlen=0;
let nyeres=0;
let vesztes=0;
dontet.innerHTML = dontetlen;
veszt.innerHTML = vesztes;
nyertel.innerHTML = nyeres;



function jatek(){
eredmeny.innerHTML = "Válasz kezet!";
kepek.src='N.png';
}

function ismetel(){
    dontetlen=0;
    nyeres=0;
    vesztes=0;
    dontet.innerHTML = dontetlen;
    veszt.innerHTML = vesztes;
    nyertel.innerHTML = nyeres;
    eredmeny.innerHTML = "Válasz kezet!";
    kepek.src='N.png';
}

function kep(){
if (ellenfel == 1){
    kepek.src='kő.png';

} else if(ellenfel == 2){
    kepek.src='papír.png';
} else {
    kepek.src='olló.png';
}
}

function kokatt() {
    ellenfel =  Math.floor(Math.random()*3)+1;
    if (ellenfel == 1){
        eredmeny.innerHTML = "Döntetlen";
        dontetlen++;
        dontet.innerHTML = dontetlen;     
    } else if(ellenfel == 2){
        eredmeny.innerHTML = "Vesztetél";
        vesztes++;
        veszt.innerHTML = vesztes;
    } else if (ellenfel == 3){
       eredmeny.innerHTML = "Nyertél";
       nyeres++;
       nyertel.innerHTML = nyeres;
    }
}

function papirkatt() {
    ellenfel =  Math.floor(Math.random()*3)+1;
    if (ellenfel == 2){
        eredmeny.innerHTML = "Döntetlen"; 
        dontetlen++;   
        dontet.innerHTML = dontetlen; 
    } else if(ellenfel == 3){
        eredmeny.innerHTML = "Vesztetél";
        vesztes++;
        veszt.innerHTML = vesztes;
    } else if(ellenfel == 1){
      eredmeny.innerHTML = "Nyertél";
      nyeres++;
      nyertel.innerHTML = nyeres;
    }  
}

function ollokatt() {
    ellenfel =  Math.floor(Math.random()*3)+1;
    if (ellenfel == 3){
        eredmeny.innerHTML = "Döntetlen"; 
        dontetlen++;   
        dontet.innerHTML = dontetlen; 
    } else if(ellenfel == 1){
        eredmeny.innerHTML = "Vesztetél";
        vesztes++;
        veszt.innerHTML = vesztes;
    } else if(ellenfel == 2){
        eredmeny.innerHTML = "Nyertél";
        nyeres++;
        nyertel.innerHTML = nyeres;
    }
}

