//Akció,Dráma,Fantasy,Romantikus,Krimi,Vígjáték,Sci-fi,Kaland,Thriller,Horror,Rejtély,Dokumentum,Életrajzi
const filmek= [
{cim: "A remény rabjai",img: "Photos/film1.jpg",data: ["Dráma","Romantikus"], leiras: '1946-ban egy Andy Dufresne nevű bankárt - noha makacsul hangoztatja ártatlanságát - kettős gyilkosság elkövetése miatt életfogytiglani börtönbüntetésre ítélnek. Dufresne egy Maine állambeli büntetés-végrehajtó intézetbe kerül és hamar meg kell ismerkedjen a börtönélet kegyetlen mindennapjaival, a szadista börtönszemélyzettel, a szinte elállatiasodott rabokkal. Azonban Andy nem törik meg. A bankéletben szerzett tapasztalatai segítségével elnyeri az őrök kegyét és azzal, hogy elvállalja egyik rabtársa illegális akcióiból származó bevételeinek könyvelését, kivívja "társai" elismerését is. Cserébe viszont lehetőséget kap a börtön könyvtár fejlesztésére, ezzel némi emberi méltóságot csempészve a keserű körülmények között élő rabok mindennapjaiba. A film Stephen King kisregénye alapján készült.'},
{cim: "Forrest Gump",img: "Photos/film2.jpg",data: ["Dráma"], leiras: 'A georgiai Savannah városka árnyas buszmegállójában különös mesemondó üldögél. Forrest Gump mindent látott és mindent átélt, de nem mindent értett. Nem éppen a legfényesebb elme. De hát az anyja is mindig azt mondta: "Csak az a hülye, aki hülyeséget csinál." Forrest Gump pedig semmi egyebet nem csinált, mint jelen volt a XX. század minden fontos eseményén a focipályától a harctérig, az elnökök klubjától a médiavitákig, míg végül meg nem pihent egyetlen igaz szerelme karjában. Forrest Gump IQ-ja nem szárnyal az egekig, de rendkívül becsületes és jólelkű fiú. Különös véletlenek azonban hozzásegítik, hogy az 1950-es évektől 1970-ig Amerika minden jelentős eseményén részt vegyen, és minden jelentős személyiségével találkozzon, köztük: Elvis Presley-vel, JFK-vel, Lyndon Johnson-nal, Richard Nixon-nal. Forrest elvégzi a főiskolát, harcol Vietnámban, élsportoló lesz, az egyetlen probléma csak az, hogy túl buta ahhoz, hogy megértse ezen fontos események jelentőségét. A "Forrest Gump" egy megindító romantikus mese egy ártatlan amerikairól, aki pont abban a korban élt, amikor Amerika elveszíti ártatlanságát.'},
{cim: "Stephen King: Halálsoron",img: "Photos/film3.jpg",data: ["Krimi","Dráma","Fantasy"], leiras: 'Az 1930-as években Paul Edgecomb cinikus és tapasztalt börtönőrként szolgál a siralomházban. Halálraítéltek utolsó napjainak szemtanújaként már nem érhetik meglepetések. Azonban egész világfelfogása megrendül John Coffey megérkezésével. Az óriás termetű fekete férfit kettős gyermekgyilkosságért ítélték halálra. A börtönőr visszaemlékezik a siralomház elítéltjeire. Elgondolkozik Coffey különös lényén, természetfeletti képességein és beteges, durva őrtársain? Ki is valójában az óriás halálraítélt, és valóban bűnös-e?'},
{cim: "Életrevalók (2017)",img: "Photos/film4.jpg",data: ["Dráma","Vígjáték"], leiras: 'Egy gazdag mozgássérült férfi és a gondozójának álló munkanélküli ex-bűnöző kapcsolatának szórakoztató története.'},

{cim: "Terminátor 2. - Az ítélet napja",img: "Photos/film5.jpg",data: ["Akció","Sci-fi"], leiras: '1997. augusztus 29-én kitört a harmadik világháború. Ennek a háborúnak 3 milliárd áldozata volt. Ami az emberiségből megmaradt, hamarosan újabb iszonyattal kell szembenézzen: a gépek elleni háborúval. S most a Skynet gépei egy új Terminátort terveztek, aminek csak egyetlen feladata van: elpusztítani John Connor-t, a gépek elleni harc vezetőjét. S minthogy a tervezés időpontjában a tudomány már képes az időutazásra, a Terminátort visszaküldik az időben, hogy John-t még gyerekkorában pusztítsa el. Az emberek azonban szintén felkészültek az eseményre. S ők is visszaküldtek egy Terminátort az időben, aminek az a feladata, hogy megvédje az ifjú John Connort. John Connor tehát tinédzser még, amikor életében megjelenik a két Terminátor, hogy végzetes összecsapásban számoljanak le egymással.'},
{cim: "A keresztapa",img: "Photos/film6.jpg",data: ["Krimi","Dráma"], leiras: 'A gengszterfilmek legnagyobbika, világhírű színészek és rendező munkája, minden idők egyik legnagyobb szabású maffiafilmje, a Keresztapa. A történet bemutatja azokat az embereket és azt a gépezetet, ami az olasz maffiában gyökerezve, a világ leghatalmasabb és legrettegettebb hatalmává vált az Egyesült Államokban. Figyelemmel követhetjük a kegyetlen, gyilkos módszereket, amivel a Corleone család feje dolgozik. Tanúi lehetünk a hihetetlen összetartásnak, az érdekek és a félelem összetartó erejének, ami ezt a világot jellemzi. Emberek sorsa, élet és halál kérdése dől el Don Vito Corleone dolgozószobájában. Egyesek védelemért fordulnak a nagyúrhoz, mások hadüzenettel érkeznek. A rivális maffia, a Tattaglia család ugyanis végső leszámolásra szólította fel a Corleone családot. S a hadüzenet után az egész város lángba borul...'},
{cim: "Vissza a jövőbe",img: "Photos/film7.jpg",data: ["Kaland","Vígjáték"], leiras: '1. Marty McFly átlagos kamasznak látszik, de van egy őrült barátja, Doki, aki megépítette a plutónium meghajtású időgépet. Dokit váratlanul halálos támadás éri, s Marty is csak az új találmánnyal nyer egérutat. Arra azonban ő sem számít, hogy 1955-be utazik vissza, épp abba az időszakba, amikor szülei is a padot koptatják. A bajt csak fokozza, hogy majdani anyja Marty megérkezése óta ügyet sem vet majdani apjára, ami beláthatalan következményekkel járhat a jövőben. Ha életben akar maradni, el kell érnie, hogy szülei egymásba szeressenek és el kell távolítania az anyját molesztáló Biffet. 2. Marty és Doki 2015-ben tett lélegzetelállító utazása úgy tűnik, megoldotta a McFly család néhány jövőbeni problémáját. Amikor azonban visszatérnek a jelenbe, hamarosan rá kell jönniük, hogy valaki fenekestül felforgatta az időt és rémséges körülményeket teremtett az 1985-ös Hill Valley-ben. Az egyetlen remény: megint visszautazni 1955-be, ahol meg kell állítani Biffet, a család esküdt ellenségét. 3. Az 1955-ös furcsa villámlás után Martynak egyenesen 1885-be kell visszautaznia, hogy megmentse a Dokit egy túl korai haláltól. Nagy nehezen túléli az indiánok támadását és a barátságtalan városlakók intrikáit, s végül ráakad a Dokira, aki nem más, mint a városka kovácsa. Doki azonban nem hallgat a figyelmeztetésre, mivel fülig beleszeretett az elbűvölő tanítónőbe, Clara Claytonba. Így Marty feladata lesz, hogy kimenekítse őket a Vadnyugatról, s visszatérjenek a jövőbe.'},
{cim: "Szerelmünk lapjai",img: "Photos/film8.jpg",data: ["Dráma","Romantikus"], leiras: 'Allie és Noah tizenévesek voltak, amikor találkoztak, az első pillanattól kezdve rokonszenveztek egymással. Kibontakozó szerelmük hamar beteljesedik. A lány gazdag szülei azonban ellenzik kapcsolatukat, így a két fiatal útja elválik egymástól. Amikor néhány esztendővel később újra találkoznak, a szerelmük újjáéled, és Allie-nek hamarosan választania kell társa és társadalmi rangja között. Történetüket, melynek fontos jelentősége van számára, egy idős úr olvassa fel újra és újra egy hasonló korú hölgynek.'},

{cim: "Elrabolva",img: "Photos/film9.jpg",data: ["Akció","Thriller"], leiras: 'Bryan Mills valaha a titkosszolgálat egyik legkiválóbb ügynöke volt, de már visszavonult, csak hogy Kaliforniában élő lánya, a 17 éves Kim közelében lehessen. A lány az anyjával, Lenore-ral és tehetős mostohaapjával, Stuarttal él és épp Párizsba készül legjobb barátjával, Amandával, amire Bryan vonakodva bár, de áldását adja. Bár ne tette volna.'},
{cim: "Kék Bogár",img: "Photos/film10.jpg",data: ["Akció","Kaland"], leiras: 'Kék Bogár színre lép. Méghozzá nagyon hatásosan. Jaime Reyes végzett az egyetemen, tele van nagy álmokkal, és elég hamar kénytelen rájönni, hogy a valóság egészen másképp néz ki. Már éppen elkeseredne, amikor a sors közbeszól, és mindent felforgat. A srác véletlenül megszerez egy ősi múltból származó, földön kívüli eredetű biotechnológiai szuperfegyvert: a szkarabot. Pontosabban: az szerzi meg őt. A szkarab – ki tudja miért – Jaimet választja magának új gazdatestjének, úgyhogy testpáncélt, hihetetlen technikájú fegyverarzenált és legfőképpen különleges, mindig új meglepetést okozó képességeket ad neki. Ajándék, de nem lehet visszaadni. Soha többé. Jaime lesz Kék Bogár. És rajta múlik, mihez kezd ezzel. Először majd megőrült. Azután élvezi az új helyzetet. És végül kénytelen harcba szállni. A DC régi hőse még új a mozivásznon, de hamar kiderül, hogy ott a helye: a vizuálisan különleges, őrületes kaland egyszerre izgalmas és nagyon vicces!'},
{cim: "A Vagdalthús hadművelet",img: "Photos/film11.jpg",data: ["Dráma","Háborús"], leiras: '1943-ban a szövetségesek eltervezik, hogy megtörik Hitler szorítását a megszállt Európán, és átfogó támadást indítanak Szicília ellen, de van egy kis bökkenő: valahogyan meg kellene védeni az inváziós haderőt az esetleges megsemmisüléstől. Két figyelemre méltó hírszerző tiszt, Ewen Montagu (Colin Firth) és Charles Cholmondeley (Matthew Macfadyen) feladata, hogy kitalálják a háború legkülönösebb és legszenzációsabb dezinformációs tervét, amelynek középpontjában a történelem legvalószínűtlenebb titkosügynöke áll: egy halott hajléktalan. A Vagdalthús hadművelet egy olyan ötlet rendkívüli és igaz története, amelytől azt remélték, hogy megfordítja a szövetségesek helyzetét - hihetetlenül nagy kockázatot vállalva, dacolva a logikával, és pattanásig feszítve értelmi szerzőinek idegeit.'},
{cim: "Becstelen Brigantyk",img: "Photos/film12.jpg",data: ["Kaland","Dráma","Háborús"], leiras: 'Franciország német megszállásának első évében Shosanna Dreyfus családját a lány szeme láttára végzi ki Hans Landa náci ezredes. Shosannának éppen hogy sikerül megmenekülnie, és Párizsba szökik, ahol új személyiséget vesz fel: egy mozi tulajdonosa és üzemeltetője lesz. Európa egy másik részén eközben Aldo Raine hadnagy egy csoport amerikai zsidó katonát verbuvál gyors, sokkoló megtorlóakciók végrehajtásához. A később "Brigantyk" néven elhíresülő osztag csatlakozik Bridget Von Hammersmark német színésznőhöz és titkosügynökhöz egy akcióban, melynek célja a Harmadik birodalom vezetőinek kiiktatása. Hőseink sorsa egy mozi bejáratánál fut össze, ahol Shosanna a saját bosszútervét készül végrehajtani.'},

{cim: "Követés", img: "Photos/film13.jpg", data: ["Horror"], leiras: 'Egy baráti társaságot egy exkluzív luxuskempingbe invitálnak, egy apró szigetre, ahol a csapat egy ismert influencer vezetésével menő tartalmakat készül gyártani. A legenda szerint a szigetet körülölelő tóban egy ősi boszorkány kísért, ami remek lehetőségnek tűnik a fiatalok számára, hogy hírnevet szerezzenek maguknak a közösségi médiában. Bár a történet valódiságát sokan megkérdőjelezik, a kezdetben felhőtlen nyaralás hamar hátborzongató fordulatot vesz és minden jel arra utal, hogy a legenda igaz lehet.'},
{cim: "Rettegés alkonyat után", img: "Photos/film14.jpg",data: ["Horror","Rejtély","Thriller"], leiras: 'Hatvanöt esztendővel ezelőtt borzalmas sorozatgyilkosság tartotta rettegésben a texasi kisváros lakóit. A rendőrségnek minden igyekezete ellenére nem sikerült elkapnia a brutális gyilkost, aki nyom nélkül eltűnt. A gyilkosságok azonban most újra kezdődtek. A hatóságok versenyt futnak az idővel, hogy párhuzamot vonva a múltbéli és jelenlegi sokkoló bűncselekmények között, elkapják a gyilkost. Egy tizenéves lány lehet a kulcs ahhoz, hogyan is lehetne megállítani. Valós történet alapján.'},
{cim: "A harc mestere 2. - Az árulás", img: "Photos/film15.jpg", data: ["Akció","Thriller"], leiras: 'Neil Shaw ügynök (Wesley Snipes) visszatér, hogy bosszút álljon egykori mestere gyilkosain, de közben egy halálos összeesküvés nyomaira bukkan. Szenátorjelölt barátjának támogatásával elkezdi felgöngyölíteni az ügyet, de a hullák száma egyre csak nő, és hamarosan rá kell döbbennie, hogy az igazi célpont ő maga. A harc mesterével azonban nem jó ujjat húzni, mert innentől kezdve nincs kegyelem és nincs megállás, csak akció, akció és még több akció egészen addig, amíg meg nem találja, hogy ki áll a gyilkosságok mögött.'},
{cim: "Pofoncsata", img: "Photos/film16.jpg", data: ["Vígjáték"], leiras: 'Egy iskolai tanári kábé épp olyan, mint maga az élet: zavaros, zajos, látszólag senki sem normális, miközben a valóságban... tényleg senki sem normális. És néha pofozkodnak. Egy buzgó, bár kis növésű tanerő (Charlie Day), aki az életében még alig találkozott más kalanddal, mint a reggeli becsengetés, véletlenül kirúgatja egy kollégáját. Az állását vesztett pedagógus (Ice Cube) a gátlásait is elveszíti, és úgy dönt, hogy bosszút áll: tanítás utánra verekedni hívja a betoji pedagógust. A közelgő bunyónak pillanatok alatt híre megy, minden osztály a nagy összecsapásra készül, és senki sem kételkedik abban, hogy kit fognak laposra verni. Maga a jövendő áldozat sem. De mit tehetne mást? Készülni kezd, hogy ha már muszáj kapnia néhány maflást, legalább méltósággal essen hanyatt...'},

{cim: "Alita: A harc angyala", img: "Photos/film17.jpg", data: ["Akció","Kaland","Thriller"], leiras: 'Évszázadok múlva a jövőben, Iron City roncstelepén egy kiber-doktor, Ido, rábukkan a magára hagyott, eszméletlen kiborglányra, Alitára, és magával viszi klinikájára. Magához térve, Alita képtelen felidézni, kicsoda ő, és a világról sincsenek ismeretei; minden új élményt jelent számára. Próbál hozzászokni új életéhez és Iron City veszedelmekkel teli utcáihoz, miközben Ido óvná őt rejtélyes múltjától. A lány összebarátkozik a talpraesett Hugóval, aki viszont inkább segítene neki visszanyerni emlékezetét. A két fiatal egyre közelebb kerül egymáshoz, ám az Alita nyomában járó halálos erők hamarosan fenyegetést kezdenek jelenteni kapcsolatukra. Ekkor ébred rá a lány, hogy különleges harci képességekkel rendelkezik, amiket barátai és szerettei védelmezésére fordíthat. Elhatározza, hogy fényt derít származására; Alita olyan útra indul, ami során megmérkőzik e sötét, romlott világ igazságtalanságaival, és azt is felfedezi, hogy egyetlen fiatal nő is képes változtatni a világon, amiben él.'},
{cim: "Fortress: Az erődítmény", img: "Photos/film18.jpg", data: ["Akció"], leiras: 'A történet egy szigorúan titkos üdülőhely körül forog, melyben nyugdíjas amerikai hírszerző tiszteket szállásolnak el.'},
{cim: "Teremtőm", img: "Photos/film19.jpg", data: ["Dráma","Rejtély"], leiras: '2038: George Almore egy valódi, embernek megfelelő mesterséges intelligencián dolgozik. Legújabb prototípusa szinte készen áll. Ez az érzékeny szakasz viszont a legveszélyesebb. Különösen, mivel olyan célja van, amelyet minden áron el kell rejtenie: újra találkozni a halott feleségével.'},
{cim: "Végzetes visszaszámlálás", img: "Photos/film20.jpg", data: ["Akció"], leiras: 'Frank Cross hadnagy nem először kerül szembe a feletteseivel. Ezúttal engedély nélkül végzett humanitárius szolgálatot: élelmiszerrel teli segélycsomagokat dobott le az éhező kurdoknak. A sajtó igazi hősként ünnepli és az elnök ki is aknázza az újdonsült médiasztárban rejlő lehetőségeket. A büntetés alól váratlanul felmentett hadnagy új megbízást kap: a nukleáris rakéták indításának kódját kell őriznie, ám a táskát már az első napon ellopják. Cross azonnal a terroristák után ered és életveszélyes hajsza indul Chicago utcáin.'},

{cim: "Róise és Frank", img: "Photos/film21.jpg", data: ["Dráma"],leiras: 'Egy özvegyasszony, aki már lemondott az életről, meggyőződik arról, hogy egy kóbor kutya a Hurlingot szerető férje reinkarnációja.'},
{cim: "Ómen", img: "Photos/film22.jpg", data: ["Horror","Thriller"], leiras: 'Az ezredfordulón nem következett be a világvége. Az ördög napja: 2006. VI. 6. Amikor eljön, félelmet, káoszt és gyűlöletet hoz magával, hogy a világ ura lehessen. És mindaz a félelem, amit a gonosz a világra bocsát, egyetlen gyereknek köszönhető. Bármilyen különös kisfiú is ő, családja szeretettel veszi körül: nem sejtik, hogy a házukban és a világban szaporodó borzasztó balesetek és tragédiák mind a kis Damiennek köszönhetők. Ám hamarosan nyilvánvalóvá válik, hogy gyerekük nem az övék, hanem a Sátán fia. Megkezdődik a harc az egyre növekvő hatalommal bíró ördögi Damien ellen.'},
{cim: "Madárlesők", img: "Photos/film23.jpg", data: ["Dráma","Romantikus"], leiras: 'Nikko egyfelől mókás fickó, ugyanakkor egy kényszeres és önpusztító személyiség, ami valljuk be, elég sajátos kombinációja egy olyan embernek, aki madarak megfigyelésével foglalkozik. Nikko megjelöli a ritka madarakat, ahogy nézi őket, és azt tervezi, ha eléri az ötszázadikat, akkor végez magával. Amikor találkozunk vele, a 497-nél jár a listán. Ugyanekkor újra felbukkan a férfi csinos, ám szeszélyes egykori barátnője is, ami felkavarja az életét. Vajon Stevie meg tudja menteni a férfit önmagától, vagy tovább löki a szakadék felé? Cris Feddi regényéből.'},
{cim: "Elveszett remény", img: "Photos/film24.jpg", data: ["Dráma","Thriller"], leiras: 'Hope a messzi Ohióból zenei karrierjét építeni érkezett Los Angelesbe, ahol összeakad egy Will nevű fickóval. Kapcsolatuk eleinte idilli, ám az idő múlásával a reményből kiábrándultság, az akaratból pedig fásultság válik. Hope tiszta pillanataiban még küzd az elkerülhetetlenül bekövetkező végzet ellen, ám Will pusztító közelsége még a Hope-ban meglévő ösztönös küzdést is kiöli, és ettől kezdve a lány számára sincs megállás a lejtőn, amelynek végén már maga a puszta túlélés lesz a tét.'},

{cim: "Halálos rituálé", img: "Photos/film25.jpg",data: ["Krimi","Rejtély","Thriller"], leiras: 'Egy visszavonulás előtt álló nyomozó elvállalja utolsó ügyét, hogy felkutasson egy rejtélyes és kegyetlen sorozatgyilkost, aki hatalommal bír a Muti feketemágia felett.'},
{cim: "Konvoj", img: "Photos/film26.jpg",data: ["Akció","Dráma"], leiras: 'Az óriáskamionok sofőrjeinek nem habostorta az élete. A gázolaj ára egyre magasabb, a verseny egyre nagyobb, ráadásul rendőrök hada áll lesben lassan szinte minden farakás mögött, hogy a legkisebb vétség esetén fülöncsípje őket. Gumikacsa, a 18 kerekű kamioncsoda vezetője azonban nem ijed meg tőlük. A rendőrök minden cselére van egy még ügyesebb fortélya, és végül konvojba szervezi valamennyi sértett kamionost, hogy végre ők is megmutathassák, mit tudnak...'},
{cim: "A második esélyek királya", img: "Photos/film27.jpg",data: ["Dokumentum","Életrajzi","Dráma"], leiras: 'Mike Veeck, a legendás Major League baseball-tulajdonos, Bill Veeck fia felrobbantja apja karrierjét, majd a következő évtizedeket azzal tölti, hogy megtanulja, mit is ér a második esély.'},
{cim: "Atlantisz gyermekei",img: "Photos/film28.jpg",data: ["Dráma","Rejtély"], leiras: 'Bobby Garfield felnőttként visszatér szülővárosába, legjobb barátja halála után. Az emlékek óhatatlanul számvetésre késztetik Bobby-t. Tízéves korában két jóbarátja volt, akivel mindent megosztott: Carol és Sully. Ráadásul Carollal titkon csókkal pecsételték meg barátságukat. Bobby édesanyja megkeseredett élvhajhász asszony, aki önző módon viselkedett fiával. Egy napon belép életükbe és végleg megváltoztatja azt Ted Brautigan, egy előkelő idegen a városban. Bobby hamar megtalálja a hangot Teddel, aki végre egyenrangúként szól hozzá, és megosztja vele néhány természetfeletti képessége titkát. Egy nyáron át tartott barátságuk, mígnem Tedért eljöttek azok az emberek, akiktől annyira óvta ifjú barátját.'},


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