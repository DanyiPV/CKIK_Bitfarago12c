var Ora;
var Bemutatkozasok = [{
    nev: "Kósik János",
    img: "img src",
    szoveg: ""},{
    nev: "Orosz ádám",
    img: "img src",
    szoveg: ""},{
    nev: "Pintea Dániel",
    img: "img src",
    szoveg: ""}
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
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas Megjelen";
    document.getElementById('BlackBackground').classList = 'BlackBackground BackMegjelen';
}
function Bezar(){
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas Megjelen Eluntet";
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