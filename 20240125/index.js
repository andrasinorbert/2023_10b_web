console.log("*************");
console.log("JS INDUL");
console.log("*************");

function ki(x) {
    console.log(x);
}

ki("Szia");

function f(x,y,z){
    return 3*x+4*y+z**2;
}

ki(f(1,2,3));

function osszegzes_osszeadassal(lista){
    let s=0;
    for(let i=0;i<lista.length;i++){
        s+=lista[i];
    }
    return s;
}
function osszegzes_szorzassal(lista){
    let s=1;
    for(let i=0;i<lista.length;i++){
        s*=lista[i];
    }
    return s;
}
function osszegzes(lista, func){
    let s=lista[0];
    for(let i=1;i<lista.length;i++){
        s=func(s,lista[i]);
    }
    return s;
}
function osszead(num1, num2){
    return num1+num2;
}
function osszeszoroz(num1, num2){
    return num1*num2;
}
var l=[1,2,3,4,5];
ki(osszegzes_osszeadassal(l));
ki(osszegzes_szorzassal(l));
ki(osszegzes(l,osszead));
ki(osszegzes(l,osszeszoroz));
ki(osszegzes(l,function(x1,x2){return x1+x2;}));
ki(osszegzes(l,function(x1,x2){return x1*x2;}));

function maxkivalasztas(lista){
    let index=0;
    let ertek=lista[0];
    for(let i =1; i<lista.length;i++){
        if(lista[i]>ertek){
            ertek=lista[i];
            index=i;
        }
    }
    return [index,ertek];
}
function szelsoertek_kivalasztas(lista, func){
    let index=0;
    let ertek=lista[0];
    for(let i =1; i<lista.length;i++){
        if( func(lista[i],ertek)){
            ertek=lista[i];
            index=i;
        }
    }
    return [index,ertek];
}
function kisebb(num1, num2){
    return num1<num2;
}
ki(maxkivalasztas([2,3,5,2]));
ki(szelsoertek_kivalasztas([2,3,5,2], kisebb));
ki(szelsoertek_kivalasztas([2,3,5,2], function(num1,num2){return num1<num2;}));

ki(szelsoertek_kivalasztas([2,3,5,2], function(num1,num2){return num1>num2;}));

function szia(){
    document.body.children[1].innerHTML="Szia";
}


document.addEventListener("DOMContentLoaded",function() {
    // Akkor futnak le az ide írt utasítások, amikor már etöltött a honlap
    document.getElementById("egyedi").innerHTML="Szia";
});
