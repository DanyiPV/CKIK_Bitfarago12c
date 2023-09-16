var Ora;
var Bemutatkozasok = [{
    nev: "Kósik János",
    img: "Photos/random1.jpg",
    szoveg: "Jani szöveges cuccai"},{
    nev: "Orosz Ádám",
    img: "Photos/random1.jpg",
    szoveg: "Ádám szöveges cuccai"},{
    nev: "Pintea Dániel",
    img: "Photos/random1.jpg",
    szoveg: "Saját szöveges cuccaim"}
];

//ora
function TimeLoop(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    if(minutes.toString().length == 1){
        minutes = '0'+minutes;
    }
    document.getElementById('ora').innerHTML = "<p>"+hours+":"+minutes+"</p>";
}
//---

//Bemutatkozás
function Bemutatkozas(num){
    document.getElementById('CloseButtonDiv').innerHTML = "<p>"+Bemutatkozasok[num].nev+"</p>";
    document.getElementById('BemutatkozasIMG').src = Bemutatkozasok[num].img;
    document.getElementById('BemutatkozasP').innerHTML = "<p>"+Bemutatkozasok[num].szoveg+"</p>";
    document.getElementById('BlackBackground').classList = 'BlackBackground BackMegjelen';
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas BemutatkozasMegjelen";
    setTimeout(TobbiMegjelenites,1000);
}

function TobbiMegjelenites(){
    document.getElementById('CloseButton').classList = "CloseButton Megjelenites";
    document.getElementById('BemutatkozasIMG').classList = "BemutatkozasIMG Megjelenites";
    document.getElementById('BemutatkozasP').classList = "BemutatkozasP Megjelenites";
}

function Bezar(){
    document.getElementById('CloseButton').classList = "CloseButton Eltuntetes";
    document.getElementById('BemutatkozasIMG').classList = "BemutatkozasIMG Eltuntetes";
    document.getElementById('BemutatkozasP').classList = "BemutatkozasP Eltuntetes";
    setTimeout(MindenEltuntet,1000);
}

function MindenEltuntet(){
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas Megjelen BemutatkozasEluntet";
    setTimeout(BezarEluntet,700);
    document.getElementById('BlackBackground').classList = 'BlackBackground BackMegjelen BackEluntet';
}

function BezarEluntet(){
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas";
}
//---


function Main(){
    Ora = setInterval(TimeLoop,1000);
}
Main();