//akció,dráma,fantasy,Romantikus,
const filmek= [
{cim: "A remény rabjai",img: "Photos/film1.jpg",data: ["Dráma","Romantikus"]},
{cim: "Forrest Gump",img: "Photos/film2.jpg",data: ["Dráma"]},
{cim: "Stephen King: Halálsoron",img: "Photos/film3.jpg",data: ["Akció"]},
{cim: "Életrevalók",img: "Photos/film4.jpg",data: ["Dráma"]},

{cim: "Terminátor 2. - Az ítélet napja",img: "Photos/film5.jpg",data: ["Akció"]},
{cim: "A keresztapa",img: "Photos/film6.jpg",data: ["Akció","Dráma"]},
{cim: "Vissza a jövőbe",img: "Photos/film7.jpg",data: ["Fantasy"]},
{cim: "Szerelmünk lapjai",img: "Photos/film8.jpg",data: ["Romantikus"]},

{cim: "Elrabolva",img: "Photos/film9.jpg",data: ["Akció"]},//
{cim: "A remény rabjai2",img: "Photos/film1.jpg",data: ["Dráma","Romantikus"]},
{cim: "Forrest Gump2",img: "Photos/film2.jpg",data: ["Dráma"]},
{cim: "Stephen King: Halálsoron2",img: "Photos/film3.jpg",data: ["Akció"]},

{cim: "Életrevalók2",img: "Photos/film4.jpg",data: ["Dráma"]},
{cim: "Terminátor 2. - Az ítélet napja2",img: "Photos/film5.jpg",data: ["Akció"]}
]

var FilterMegjelenit = false;
var div = document.getElementById("filmek");var keres = [];var nemkeres = [];
function betolt(){
    div.innerHTML = "";var index = 0;var count = 0;var eindex = 0;var tmp = document.createElement("div");
    while(count < filmek.length){
        var szuresbool = false;
        if (index%4 == 0) {
            if(index != 0 && index != eindex){
                eindex = index;
                tmp.className = "column";
                div.appendChild(tmp);
                tmp = document.createElement("div"); 
            }
        }
        if (keres.length !=0) {
            keres.forEach(element => {
                if (filmek[count].data.includes(element) == false) {
                    szuresbool = true;}
            });
        }
        if (nemkeres != 0 ) {
            nemkeres.forEach(element => {
                if (filmek[count].data.includes(element)) {
                    szuresbool = true;}
            });
        }
        if (!szuresbool) {
            console.log(filmek[count].data,nemkeres,keres,index,count,szuresbool,4,tmp);
            tmp.innerHTML +=
            '<div class="row" id="row">'+
            '<div class="RowIMG">'+
            '<img src="'+filmek[count].img+'" alt="">'+
            '<div class="RowIMGBelso">'+
            '<div>'+
            '<h2>'+filmek[count].data.join('</br>')+'</h2>'+
            '</div>'+
            '<div>'+
            '<input type="button" value="Bővebben" class="BovebbenButton">'+
            '</div>'+
            '</div>'+
            '</div>'+
            '<div class="RowH1">'+
            '<h1>'+filmek[count].cim+'</h1>'+
            '</div>'+
            '</div>'; 
            index++;
        }
        count++;
    }
    if(index%4 !=0){
        tmp.className = "column";
        div.appendChild(tmp);
    }
}

function Keres(btn){
    if (!keres.includes(btn.id)) {
        keres.push(btn.id);
        document.getElementById(btn.id+"h").style.color = "lime";
    }else{
        keres = keres.filter(item => item !== btn.id);
        document.getElementById(btn.id+"h").style.color = "white";
    }
    if (nemkeres.includes(btn.id)) {
        nemkeres = nemkeres.filter(item => item !== btn.id);
    }
    betolt();
}

function NemKeres(btn){
    if (keres.includes(btn.id)) {
        keres = keres.filter(item => item !== btn.id);  
    }
    if (!nemkeres.includes(btn.id)) {
        nemkeres.push(btn.id);
        document.getElementById(btn.id+"h").style.color = "red";
    }else{
        nemkeres = nemkeres.filter(item => item !== btn.id);
        document.getElementById(btn.id+"h").style.color = "white";
    }
    betolt();
}

function SearchBarShow(){
    if(document.getElementsByClassName('SearchShow').length == 0){
        document.getElementById("SearchInput").classList += " SearchShow";
        setTimeout(SearchTime,7000);
    }
}

function SearchTime(){
    if(document.getElementById('SearchInput').value == ""){
        document.getElementById("SearchInput").classList.add("SearchHide");
        setTimeout(SearchClassRemove,500);
    }
}

function Filter(){
    var KeresButtonok = document.getElementsByClassName('Keres');
    var NemKeresButtonok = document.getElementsByClassName('NemKeres');
    if(FilterMegjelenit == false){
        FilterMegjelenit = true;
        document.getElementById('FilterOpen').classList += " FilterMegjelenites";
        setTimeout(FilterOpen,600);
    }
    else if(FilterMegjelenit == true){
        FilterMegjelenit = false;
        for (let i = 0; i < KeresButtonok.length; i++) {
            KeresButtonok[i].classList += " Eltuntetes";
            NemKeresButtonok[i].classList += " Eltuntetes";
            document.getElementById(KeresButtonok[i].id+"h").classList += " Eltuntetes";
        }
        setTimeout(FilterClose,600);
    }
}

function FilterOpen(){
    var KeresButtonok = document.getElementsByClassName('Keres');
    var NemKeresButtonok = document.getElementsByClassName('NemKeres');
    for (let i = 0; i < KeresButtonok.length; i++) {
        KeresButtonok[i].classList += " Megjelenites";
        NemKeresButtonok[i].classList += " Megjelenites";
        document.getElementById(KeresButtonok[i].id+"h").classList += " Megjelenites";
    }
}

function FilterClose(){
    document.getElementById('FilterOpen').classList += " FilterEltuntetes";
    setTimeout(RemoveClass,200);
}

function RemoveClass(){
    var KeresButtonok = document.getElementsByClassName('Keres');
    var NemKeresButtonok = document.getElementsByClassName('NemKeres');
    document.getElementById('FilterOpen').classList = "FilterOpen";
    for (let i = 0; i < KeresButtonok.length; i++){
        KeresButtonok[i].classList = "Keres";
        NemKeresButtonok[i].classList = "NemKeres";
        document.getElementById(KeresButtonok[i].id+"h").classList = "";
    }
}

function SearchClassRemove(){
    document.getElementById("SearchInput").classList = "SearchInput";
}
betolt();