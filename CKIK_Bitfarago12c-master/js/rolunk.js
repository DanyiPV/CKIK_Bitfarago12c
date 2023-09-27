var Ora;
var CurrentPicIndex = 0;
var PicSRC = ["ckik.jfif","ckik1.JPG","ckik2.JPG","ckik3.jpg","ckik4.jpg","ckik5.jpg","ckik6.jpg","ckik7.JPG","ckik8.jpg","ckik9.jpg","csoportkep.jpg"];
var Days = ["MON","TUE","WED","TRU","FRI","SAT","SUN"];
var Bemutatkozasok = [{
    nev: "Kósik János",
    href: "location.href='https://www.facebook.com/janos.kosik.9277';",
    img: "Photos/KJani.jpg",
    szoveg: "Nevem Kósik János 17, lassan 18 éves Ceglédi lakos vagyok Ceglédi Közgáz diákja vagyok, a 12/c osztályt boldogítom, szabadidőmben ménesek helyett autót hajtok barátokkal (csak az 1.8t)"},{
    nev: "Orosz Ádám",
    href: "location.href='https://www.facebook.com/oroszadam0726';",
    img: "Photos/OAdam.jpg",
    szoveg: "Orosz Ádámnak hívnak 18 éves vagyok 85kg karom átmérője 42,5cm (bedurranva), hobbim az autózás, a Ceglédi Közgazdasági és Informatikai Technikumban tanulok a 12.C osztályban."},{
    nev: "Pintea Dániel",
    href: "location.href='https://www.facebook.com/pintea.danielpv/';", 
    img: "Photos/PDani.jpg",
    szoveg: 'Pintea Dániel vagyok, a Ceglédi Közgáz 12-es tanulója. A programozás egyben a "munkám" és a hobbim is, szeretem csinálni amikor tudom. Persze van más hobbim is ezek mellett, például az autózás vagy a számítogépek.'}
];

document.getElementById("CKIK_logo").setAttribute("onclick","location.href='https://www.facebook.com/ckik.hu/?locale=hu_HU';");
document.getElementById("CKIK_name").setAttribute("onclick","location.href='https://www.ckik.hu';")

//ora
function TimeLoop(){
    var now = new Date();
    var day = now.getDay();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    if(minutes.toString().length == 1){
        minutes = '0'+minutes;
    }
    document.getElementById('ora').innerHTML = "<p>"+Days[day-1]+" - "+hours+":"+minutes+"</p>";
}
//---

//Bemutatkozás
function Bemutatkozas(num){
    document.getElementById('CloseButtonDiv').innerHTML = "<p onclick="+Bemutatkozasok[num].href+">"+Bemutatkozasok[num].nev+"</p>";
    document.getElementById('BemutatkozasIMG').src = Bemutatkozasok[num].img;
    document.getElementById('BemutatkozasP').innerHTML = "<p>"+Bemutatkozasok[num].szoveg+"</p>";
    document.getElementById('BemutatkozasIMG').src = Bemutatkozasok[num].img;
    document.getElementById('BlackBackground').classList = 'BlackBackground BackMegjelen';
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas BemutatkozasMegjelen";
    setTimeout(TobbiMegjelenites,500);
}

function TobbiMegjelenites(){
    document.getElementById('CloseButton').classList = "CloseButton Megjelenites";
    document.getElementById('BemutatkozasIMG').classList = "BemutatkozasIMG Megjelenites";
    document.getElementById('BemutatkozasP').classList = "BemutatkozasP Megjelenites";
    document.getElementById('Bemutatkozas').style.zIndex = 3;
}

function Bezar(){
    document.getElementById('CloseButton').classList = "CloseButton Eltuntetes";
    document.getElementById('BemutatkozasIMG').classList = "BemutatkozasIMG Eltuntetes";
    document.getElementById('BemutatkozasP').classList = "BemutatkozasP Eltuntetes";
    document.getElementById('Bemutatkozas').style.zIndex = -1;
    setTimeout(MindenEltuntet,500);
}

function MindenEltuntet(){
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas Megjelen BemutatkozasEluntet";
    setTimeout(BezarEluntet,500);
    document.getElementById('BlackBackground').classList = 'BlackBackground BackMegjelen BackEluntet';
}

function BezarEluntet(){
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas";
    document.getElementById('BlackBackground').classList = 'BlackBackground';
}
//---

//Iskola
function PreviousPic(){
    if(CurrentPicIndex-1 < 0){
        CurrentPicIndex = PicSRC.length-1;
    }
    else{
        CurrentPicIndex--;
    }
    document.getElementById('CurrentPic').src = "Photos/"+PicSRC[CurrentPicIndex];
    if(CurrentPicIndex-1 < 0){
        document.getElementById('PreviousPic').src = "Photos/"+PicSRC[PicSRC.length-1];
    }
    else{
        document.getElementById('PreviousPic').src = "Photos/"+PicSRC[CurrentPicIndex-1];
    }
    if(CurrentPicIndex+1 > PicSRC.length-1){
        document.getElementById('NextPic').src = "Photos/"+PicSRC[0];
    }
    else{
        document.getElementById('NextPic').src = "Photos/"+PicSRC[CurrentPicIndex+1];
    }
}

function NextPic(){
    if(CurrentPicIndex+1 > PicSRC.length-1){
        CurrentPicIndex = 0;
    }
    else{
        CurrentPicIndex++;
    }
    document.getElementById('CurrentPic').src = "Photos/"+PicSRC[CurrentPicIndex];
    if(CurrentPicIndex-1 < 0){
        document.getElementById('PreviousPic').src = "Photos/"+PicSRC[PicSRC.length-1];
    }
    else{
        document.getElementById('PreviousPic').src = "Photos/"+PicSRC[CurrentPicIndex-1];
    }
    if(CurrentPicIndex+1 > PicSRC.length-1){
        document.getElementById('NextPic').src = "Photos/"+PicSRC[0];
    }
    else{
        document.getElementById('NextPic').src = "Photos/"+PicSRC[CurrentPicIndex+1];
    }
}
//---


function Main(){
    Ora = setInterval(TimeLoop,1000);
}
Main();