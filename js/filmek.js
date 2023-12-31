//Akció,Dráma,Fantasy,Romantikus,Krimi,Vígjáték,Sci-fi,Kaland,Thriller,Horror,Rejtély,Dokumentum,Életrajzi
const filmek= [
{cim: "A remény rabjai (1994)",img: "Photos/film1.jpg",data: ["Dráma","Romantikus"], leiras: '1946-ban egy Andy Dufresne nevű bankárt - noha makacsul hangoztatja ártatlanságát - kettős gyilkosság elkövetése miatt életfogytiglani börtönbüntetésre ítélnek. Dufresne egy Maine állambeli büntetés-végrehajtó intézetbe kerül és hamar meg kell ismerkedjen a börtönélet kegyetlen mindennapjaival, a szadista börtönszemélyzettel, a szinte elállatiasodott rabokkal. Azonban Andy nem törik meg. A bankéletben szerzett tapasztalatai segítségével elnyeri az őrök kegyét és azzal, hogy elvállalja egyik rabtársa illegális akcióiból származó bevételeinek könyvelését, kivívja "társai" elismerését is. Cserébe viszont lehetőséget kap a börtön könyvtár fejlesztésére, ezzel némi emberi méltóságot csempészve a keserű körülmények között élő rabok mindennapjaiba. A film Stephen King kisregénye alapján készült.'},
{cim: "Forrest Gump (1994)",img: "Photos/film2.jpg",data: ["Dráma"], leiras: 'A georgiai Savannah városka árnyas buszmegállójában különös mesemondó üldögél. Forrest Gump mindent látott és mindent átélt, de nem mindent értett. Nem éppen a legfényesebb elme. De hát az anyja is mindig azt mondta: "Csak az a hülye, aki hülyeséget csinál." Forrest Gump pedig semmi egyebet nem csinált, mint jelen volt a XX. század minden fontos eseményén a focipályától a harctérig, az elnökök klubjától a médiavitákig, míg végül meg nem pihent egyetlen igaz szerelme karjában. Forrest Gump IQ-ja nem szárnyal az egekig, de rendkívül becsületes és jólelkű fiú. Különös véletlenek azonban hozzásegítik, hogy az 1950-es évektől 1970-ig Amerika minden jelentős eseményén részt vegyen, és minden jelentős személyiségével találkozzon, köztük: Elvis Presley-vel, JFK-vel, Lyndon Johnson-nal, Richard Nixon-nal. Forrest elvégzi a főiskolát, harcol Vietnámban, élsportoló lesz, az egyetlen probléma csak az, hogy túl buta ahhoz, hogy megértse ezen fontos események jelentőségét. A "Forrest Gump" egy megindító romantikus mese egy ártatlan amerikairól, aki pont abban a korban élt, amikor Amerika elveszíti ártatlanságát.'},
{cim: "Stephen King: Halálsoron (1999)",img: "Photos/film3.jpg",data: ["Krimi","Dráma","Fantasy"], leiras: 'Az 1930-as években Paul Edgecomb cinikus és tapasztalt börtönőrként szolgál a siralomházban. Halálraítéltek utolsó napjainak szemtanújaként már nem érhetik meglepetések. Azonban egész világfelfogása megrendül John Coffey megérkezésével. Az óriás termetű fekete férfit kettős gyermekgyilkosságért ítélték halálra. A börtönőr visszaemlékezik a siralomház elítéltjeire. Elgondolkozik Coffey különös lényén, természetfeletti képességein és beteges, durva őrtársain? Ki is valójában az óriás halálraítélt, és valóban bűnös-e?'},
{cim: "Életrevalók (2017)",img: "Photos/film4.jpg",data: ["Dráma","Vígjáték"], leiras: 'Egy gazdag mozgássérült férfi és a gondozójának álló munkanélküli ex-bűnöző kapcsolatának szórakoztató története.'},

{cim: "Terminátor 2. - Az ítélet napja (1991)",img: "Photos/film5.jpg",data: ["Akció","Sci-fi"], leiras: '1997. augusztus 29-én kitört a harmadik világháború. Ennek a háborúnak 3 milliárd áldozata volt. Ami az emberiségből megmaradt, hamarosan újabb iszonyattal kell szembenézzen: a gépek elleni háborúval. S most a Skynet gépei egy új Terminátort terveztek, aminek csak egyetlen feladata van: elpusztítani John Connor-t, a gépek elleni harc vezetőjét. S minthogy a tervezés időpontjában a tudomány már képes az időutazásra, a Terminátort visszaküldik az időben, hogy John-t még gyerekkorában pusztítsa el. Az emberek azonban szintén felkészültek az eseményre. S ők is visszaküldtek egy Terminátort az időben, aminek az a feladata, hogy megvédje az ifjú John Connort. John Connor tehát tinédzser még, amikor életében megjelenik a két Terminátor, hogy végzetes összecsapásban számoljanak le egymással.'},
{cim: "A keresztapa (1972)",img: "Photos/film6.jpg",data: ["Krimi","Dráma"], leiras: 'A gengszterfilmek legnagyobbika, világhírű színészek és rendező munkája, minden idők egyik legnagyobb szabású maffiafilmje, a Keresztapa. A történet bemutatja azokat az embereket és azt a gépezetet, ami az olasz maffiában gyökerezve, a világ leghatalmasabb és legrettegettebb hatalmává vált az Egyesült Államokban. Figyelemmel követhetjük a kegyetlen, gyilkos módszereket, amivel a Corleone család feje dolgozik. Tanúi lehetünk a hihetetlen összetartásnak, az érdekek és a félelem összetartó erejének, ami ezt a világot jellemzi. Emberek sorsa, élet és halál kérdése dől el Don Vito Corleone dolgozószobájában. Egyesek védelemért fordulnak a nagyúrhoz, mások hadüzenettel érkeznek. A rivális maffia, a Tattaglia család ugyanis végső leszámolásra szólította fel a Corleone családot. S a hadüzenet után az egész város lángba borul...'},
{cim: "Vissza a jövőbe (1985)",img: "Photos/film7.jpg",data: ["Kaland","Vígjáték"], leiras: '1. Marty McFly átlagos kamasznak látszik, de van egy őrült barátja, Doki, aki megépítette a plutónium meghajtású időgépet. Dokit váratlanul halálos támadás éri, s Marty is csak az új találmánnyal nyer egérutat. Arra azonban ő sem számít, hogy 1955-be utazik vissza, épp abba az időszakba, amikor szülei is a padot koptatják. A bajt csak fokozza, hogy majdani anyja Marty megérkezése óta ügyet sem vet majdani apjára, ami beláthatalan következményekkel járhat a jövőben. Ha életben akar maradni, el kell érnie, hogy szülei egymásba szeressenek és el kell távolítania az anyját molesztáló Biffet. 2. Marty és Doki 2015-ben tett lélegzetelállító utazása úgy tűnik, megoldotta a McFly család néhány jövőbeni problémáját. Amikor azonban visszatérnek a jelenbe, hamarosan rá kell jönniük, hogy valaki fenekestül felforgatta az időt és rémséges körülményeket teremtett az 1985-ös Hill Valley-ben. Az egyetlen remény: megint visszautazni 1955-be, ahol meg kell állítani Biffet, a család esküdt ellenségét. 3. Az 1955-ös furcsa villámlás után Martynak egyenesen 1885-be kell visszautaznia, hogy megmentse a Dokit egy túl korai haláltól. Nagy nehezen túléli az indiánok támadását és a barátságtalan városlakók intrikáit, s végül ráakad a Dokira, aki nem más, mint a városka kovácsa. Doki azonban nem hallgat a figyelmeztetésre, mivel fülig beleszeretett az elbűvölő tanítónőbe, Clara Claytonba. Így Marty feladata lesz, hogy kimenekítse őket a Vadnyugatról, s visszatérjenek a jövőbe.'},
{cim: "Szerelmünk lapjai (2004)",img: "Photos/film8.jpg",data: ["Dráma","Romantikus"], leiras: 'Allie és Noah tizenévesek voltak, amikor találkoztak, az első pillanattól kezdve rokonszenveztek egymással. Kibontakozó szerelmük hamar beteljesedik. A lány gazdag szülei azonban ellenzik kapcsolatukat, így a két fiatal útja elválik egymástól. Amikor néhány esztendővel később újra találkoznak, a szerelmük újjáéled, és Allie-nek hamarosan választania kell társa és társadalmi rangja között. Történetüket, melynek fontos jelentősége van számára, egy idős úr olvassa fel újra és újra egy hasonló korú hölgynek.'},

{cim: "Elrabolva (2008)",img: "Photos/film9.jpg",data: ["Akció","Thriller"], leiras: 'Bryan Mills valaha a titkosszolgálat egyik legkiválóbb ügynöke volt, de már visszavonult, csak hogy Kaliforniában élő lánya, a 17 éves Kim közelében lehessen. A lány az anyjával, Lenore-ral és tehetős mostohaapjával, Stuarttal él és épp Párizsba készül legjobb barátjával, Amandával, amire Bryan vonakodva bár, de áldását adja. Bár ne tette volna.'},
{cim: "Kék Bogár (2023)",img: "Photos/film10.jpg",data: ["Akció","Kaland"], leiras: 'Kék Bogár színre lép. Méghozzá nagyon hatásosan. Jaime Reyes végzett az egyetemen, tele van nagy álmokkal, és elég hamar kénytelen rájönni, hogy a valóság egészen másképp néz ki. Már éppen elkeseredne, amikor a sors közbeszól, és mindent felforgat. A srác véletlenül megszerez egy ősi múltból származó, földön kívüli eredetű biotechnológiai szuperfegyvert: a szkarabot. Pontosabban: az szerzi meg őt. A szkarab – ki tudja miért – Jaimet választja magának új gazdatestjének, úgyhogy testpáncélt, hihetetlen technikájú fegyverarzenált és legfőképpen különleges, mindig új meglepetést okozó képességeket ad neki. Ajándék, de nem lehet visszaadni. Soha többé. Jaime lesz Kék Bogár. És rajta múlik, mihez kezd ezzel. Először majd megőrült. Azután élvezi az új helyzetet. És végül kénytelen harcba szállni. A DC régi hőse még új a mozivásznon, de hamar kiderül, hogy ott a helye: a vizuálisan különleges, őrületes kaland egyszerre izgalmas és nagyon vicces!'},
{cim: "A Vagdalthús hadművelet (2021)",img: "Photos/film11.jpg",data: ["Dráma","Háborús"], leiras: '1943-ban a szövetségesek eltervezik, hogy megtörik Hitler szorítását a megszállt Európán, és átfogó támadást indítanak Szicília ellen, de van egy kis bökkenő: valahogyan meg kellene védeni az inváziós haderőt az esetleges megsemmisüléstől. Két figyelemre méltó hírszerző tiszt, Ewen Montagu (Colin Firth) és Charles Cholmondeley (Matthew Macfadyen) feladata, hogy kitalálják a háború legkülönösebb és legszenzációsabb dezinformációs tervét, amelynek középpontjában a történelem legvalószínűtlenebb titkosügynöke áll: egy halott hajléktalan. A Vagdalthús hadművelet egy olyan ötlet rendkívüli és igaz története, amelytől azt remélték, hogy megfordítja a szövetségesek helyzetét - hihetetlenül nagy kockázatot vállalva, dacolva a logikával, és pattanásig feszítve értelmi szerzőinek idegeit.'},
{cim: "Becstelen Brigantyk (2009)",img: "Photos/film12.jpg",data: ["Kaland","Dráma","Háborús"], leiras: 'Franciország német megszállásának első évében Shosanna Dreyfus családját a lány szeme láttára végzi ki Hans Landa náci ezredes. Shosannának éppen hogy sikerül megmenekülnie, és Párizsba szökik, ahol új személyiséget vesz fel: egy mozi tulajdonosa és üzemeltetője lesz. Európa egy másik részén eközben Aldo Raine hadnagy egy csoport amerikai zsidó katonát verbuvál gyors, sokkoló megtorlóakciók végrehajtásához. A később "Brigantyk" néven elhíresülő osztag csatlakozik Bridget Von Hammersmark német színésznőhöz és titkosügynökhöz egy akcióban, melynek célja a Harmadik birodalom vezetőinek kiiktatása. Hőseink sorsa egy mozi bejáratánál fut össze, ahol Shosanna a saját bosszútervét készül végrehajtani.'},

{cim: "Követés (2022)", img: "Photos/film13.jpg", data: ["Horror"], leiras: 'Egy baráti társaságot egy exkluzív luxuskempingbe invitálnak, egy apró szigetre, ahol a csapat egy ismert influencer vezetésével menő tartalmakat készül gyártani. A legenda szerint a szigetet körülölelő tóban egy ősi boszorkány kísért, ami remek lehetőségnek tűnik a fiatalok számára, hogy hírnevet szerezzenek maguknak a közösségi médiában. Bár a történet valódiságát sokan megkérdőjelezik, a kezdetben felhőtlen nyaralás hamar hátborzongató fordulatot vesz és minden jel arra utal, hogy a legenda igaz lehet.'},
{cim: "Rettegés alkonyat után (2014)", img: "Photos/film14.jpg",data: ["Horror","Rejtély","Thriller"], leiras: 'Hatvanöt esztendővel ezelőtt borzalmas sorozatgyilkosság tartotta rettegésben a texasi kisváros lakóit. A rendőrségnek minden igyekezete ellenére nem sikerült elkapnia a brutális gyilkost, aki nyom nélkül eltűnt. A gyilkosságok azonban most újra kezdődtek. A hatóságok versenyt futnak az idővel, hogy párhuzamot vonva a múltbéli és jelenlegi sokkoló bűncselekmények között, elkapják a gyilkost. Egy tizenéves lány lehet a kulcs ahhoz, hogyan is lehetne megállítani. Valós történet alapján.'},
{cim: "A harc mestere 2. - Az árulás (2008)", img: "Photos/film15.jpg", data: ["Akció","Thriller"], leiras: 'Neil Shaw ügynök (Wesley Snipes) visszatér, hogy bosszút álljon egykori mestere gyilkosain, de közben egy halálos összeesküvés nyomaira bukkan. Szenátorjelölt barátjának támogatásával elkezdi felgöngyölíteni az ügyet, de a hullák száma egyre csak nő, és hamarosan rá kell döbbennie, hogy az igazi célpont ő maga. A harc mesterével azonban nem jó ujjat húzni, mert innentől kezdve nincs kegyelem és nincs megállás, csak akció, akció és még több akció egészen addig, amíg meg nem találja, hogy ki áll a gyilkosságok mögött.'},
{cim: "Pofoncsata (2017)", img: "Photos/film16.jpg", data: ["Vígjáték"], leiras: 'Egy iskolai tanári kábé épp olyan, mint maga az élet: zavaros, zajos, látszólag senki sem normális, miközben a valóságban... tényleg senki sem normális. És néha pofozkodnak. Egy buzgó, bár kis növésű tanerő (Charlie Day), aki az életében még alig találkozott más kalanddal, mint a reggeli becsengetés, véletlenül kirúgatja egy kollégáját. Az állását vesztett pedagógus (Ice Cube) a gátlásait is elveszíti, és úgy dönt, hogy bosszút áll: tanítás utánra verekedni hívja a betoji pedagógust. A közelgő bunyónak pillanatok alatt híre megy, minden osztály a nagy összecsapásra készül, és senki sem kételkedik abban, hogy kit fognak laposra verni. Maga a jövendő áldozat sem. De mit tehetne mást? Készülni kezd, hogy ha már muszáj kapnia néhány maflást, legalább méltósággal essen hanyatt...'},

{cim: "Alita: A harc angyala (2019)", img: "Photos/film17.jpg", data: ["Akció","Kaland","Thriller"], leiras: 'Évszázadok múlva a jövőben, Iron City roncstelepén egy kiber-doktor, Ido, rábukkan a magára hagyott, eszméletlen kiborglányra, Alitára, és magával viszi klinikájára. Magához térve, Alita képtelen felidézni, kicsoda ő, és a világról sincsenek ismeretei; minden új élményt jelent számára. Próbál hozzászokni új életéhez és Iron City veszedelmekkel teli utcáihoz, miközben Ido óvná őt rejtélyes múltjától. A lány összebarátkozik a talpraesett Hugóval, aki viszont inkább segítene neki visszanyerni emlékezetét. A két fiatal egyre közelebb kerül egymáshoz, ám az Alita nyomában járó halálos erők hamarosan fenyegetést kezdenek jelenteni kapcsolatukra. Ekkor ébred rá a lány, hogy különleges harci képességekkel rendelkezik, amiket barátai és szerettei védelmezésére fordíthat. Elhatározza, hogy fényt derít származására; Alita olyan útra indul, ami során megmérkőzik e sötét, romlott világ igazságtalanságaival, és azt is felfedezi, hogy egyetlen fiatal nő is képes változtatni a világon, amiben él.'},
{cim: "Fortress: Az erődítmény (2021)", img: "Photos/film18.jpg", data: ["Akció"], leiras: 'A történet egy szigorúan titkos üdülőhely körül forog, melyben nyugdíjas amerikai hírszerző tiszteket szállásolnak el.'},
{cim: "Teremtőm (2020)", img: "Photos/film19.jpg", data: ["Dráma","Rejtély"], leiras: '2038: George Almore egy valódi, embernek megfelelő mesterséges intelligencián dolgozik. Legújabb prototípusa szinte készen áll. Ez az érzékeny szakasz viszont a legveszélyesebb. Különösen, mivel olyan célja van, amelyet minden áron el kell rejtenie: újra találkozni a halott feleségével.'},
{cim: "Végzetes visszaszámlálás (1997)", img: "Photos/film20.jpg", data: ["Akció"], leiras: 'Frank Cross hadnagy nem először kerül szembe a feletteseivel. Ezúttal engedély nélkül végzett humanitárius szolgálatot: élelmiszerrel teli segélycsomagokat dobott le az éhező kurdoknak. A sajtó igazi hősként ünnepli és az elnök ki is aknázza az újdonsült médiasztárban rejlő lehetőségeket. A büntetés alól váratlanul felmentett hadnagy új megbízást kap: a nukleáris rakéták indításának kódját kell őriznie, ám a táskát már az első napon ellopják. Cross azonnal a terroristák után ered és életveszélyes hajsza indul Chicago utcáin.'},

{cim: "Róise és Frank (2022)", img: "Photos/film21.jpg", data: ["Dráma"],leiras: 'Egy özvegyasszony, aki már lemondott az életről, meggyőződik arról, hogy egy kóbor kutya a Hurlingot szerető férje reinkarnációja.'},
{cim: "Ómen (2006)", img: "Photos/film22.jpg", data: ["Horror","Thriller"], leiras: 'Az ezredfordulón nem következett be a világvége. Az ördög napja: 2006. VI. 6. Amikor eljön, félelmet, káoszt és gyűlöletet hoz magával, hogy a világ ura lehessen. És mindaz a félelem, amit a gonosz a világra bocsát, egyetlen gyereknek köszönhető. Bármilyen különös kisfiú is ő, családja szeretettel veszi körül: nem sejtik, hogy a házukban és a világban szaporodó borzasztó balesetek és tragédiák mind a kis Damiennek köszönhetők. Ám hamarosan nyilvánvalóvá válik, hogy gyerekük nem az övék, hanem a Sátán fia. Megkezdődik a harc az egyre növekvő hatalommal bíró ördögi Damien ellen.'},
{cim: "Madárlesők (2009)", img: "Photos/film23.jpg", data: ["Dráma","Romantikus"], leiras: 'Nikko egyfelől mókás fickó, ugyanakkor egy kényszeres és önpusztító személyiség, ami valljuk be, elég sajátos kombinációja egy olyan embernek, aki madarak megfigyelésével foglalkozik. Nikko megjelöli a ritka madarakat, ahogy nézi őket, és azt tervezi, ha eléri az ötszázadikat, akkor végez magával. Amikor találkozunk vele, a 497-nél jár a listán. Ugyanekkor újra felbukkan a férfi csinos, ám szeszélyes egykori barátnője is, ami felkavarja az életét. Vajon Stevie meg tudja menteni a férfit önmagától, vagy tovább löki a szakadék felé? Cris Feddi regényéből.'},
{cim: "Elveszett remény (2006)", img: "Photos/film24.jpg", data: ["Dráma","Thriller"], leiras: 'Hope a messzi Ohióból zenei karrierjét építeni érkezett Los Angelesbe, ahol összeakad egy Will nevű fickóval. Kapcsolatuk eleinte idilli, ám az idő múlásával a reményből kiábrándultság, az akaratból pedig fásultság válik. Hope tiszta pillanataiban még küzd az elkerülhetetlenül bekövetkező végzet ellen, ám Will pusztító közelsége még a Hope-ban meglévő ösztönös küzdést is kiöli, és ettől kezdve a lány számára sincs megállás a lejtőn, amelynek végén már maga a puszta túlélés lesz a tét.'},

{cim: "Halálos rituálé (2023)", img: "Photos/film25.jpg",data: ["Krimi","Rejtély","Thriller"], leiras: 'Egy visszavonulás előtt álló nyomozó elvállalja utolsó ügyét, hogy felkutasson egy rejtélyes és kegyetlen sorozatgyilkost, aki hatalommal bír a Muti feketemágia felett.'},
{cim: "Konvoj (1978)", img: "Photos/film26.jpg",data: ["Akció","Dráma"], leiras: 'Az óriáskamionok sofőrjeinek nem habostorta az élete. A gázolaj ára egyre magasabb, a verseny egyre nagyobb, ráadásul rendőrök hada áll lesben lassan szinte minden farakás mögött, hogy a legkisebb vétség esetén fülöncsípje őket. Gumikacsa, a 18 kerekű kamioncsoda vezetője azonban nem ijed meg tőlük. A rendőrök minden cselére van egy még ügyesebb fortélya, és végül konvojba szervezi valamennyi sértett kamionost, hogy végre ők is megmutathassák, mit tudnak...'},
{cim: "A második esélyek királya (2023)", img: "Photos/film27.jpg",data: ["Dokumentum","Életrajzi","Dráma"], leiras: 'Mike Veeck, a legendás Major League baseball-tulajdonos, Bill Veeck fia felrobbantja apja karrierjét, majd a következő évtizedeket azzal tölti, hogy megtanulja, mit is ér a második esély.'},
{cim: "Atlantisz gyermekei (2001)",img: "Photos/film28.jpg",data: ["Dráma","Rejtély"], leiras: 'Bobby Garfield felnőttként visszatér szülővárosába, legjobb barátja halála után. Az emlékek óhatatlanul számvetésre késztetik Bobby-t. Tízéves korában két jóbarátja volt, akivel mindent megosztott: Carol és Sully. Ráadásul Carollal titkon csókkal pecsételték meg barátságukat. Bobby édesanyja megkeseredett élvhajhász asszony, aki önző módon viselkedett fiával. Egy napon belép életükbe és végleg megváltoztatja azt Ted Brautigan, egy előkelő idegen a városban. Bobby hamar megtalálja a hangot Teddel, aki végre egyenrangúként szól hozzá, és megosztja vele néhány természetfeletti képessége titkát. Egy nyáron át tartott barátságuk, mígnem Tedért eljöttek azok az emberek, akiktől annyira óvta ifjú barátját.'},

{cim: "A nagy Ők (2023)", img: "Photos/film29.jpg",data: ["Vígjáték","Dráma","Romantikus"], leiras: 'Egy nő váratlanul választani kényszerül a rég halottnak hitt férje és a vőlegénye között, akinek köszönhetően újra talpra tudott állni.'},
{cim: "Tisztítótűz (2022)", img: "Photos/film30.jpg",data: ["Dráma","Thriller"], leiras: 'Egy magával ragadó és érzéki élmény, ahol érezzük, hogy ijesztő és fojtogató a légkör: egy fiú, aki újra kapcsolatba kerül az apjával és elgyászol egy tragédiát.'},
{cim: "A halál angyala 2. (1988)", img: "Photos/film31.jpg",data: ["Vígjáték","Horror"], leiras: 'Angela visszatér, egy feldühödött, vérre szomjazó táborozóként. Az évekkel korábban történt gyilkosságok helyszínén megnyílt a New Horizons tábor, mely arra hivatott, hogy a felső osztálybeli tiniket az alsó osztálybeli társaikkal vegyítse. Angelának viszont más tervei vannak velük, és jóval véresebbek...'},
{cim: "Öt könnyű darab (1970)", img: "Photos/film32.jpg",data: ["Dráma"], leiras: 'óllehet, Robert tehetséges zongorista, hátat fordított családjának és a karrierjének. Helyette kemény fizikai munkából él, és úgy váltogatja barátnőit, mint más az alsóneműjét. A gyengéd érzések szinte kivesztek belőle, könnyen begurul, és még könnyebben ereszti búnak a fejét. Olajfúró munkásként dolgozik, és egy pincérnővel él, amikor megtudja, hogy az apja halálos beteg. A szülői házba visszatérve találkozik zongoratanár testvérének tanítványával, Catherine-nel. Beleszeret a nőbe, melynek hatására megkérdőjelezi egész addigi életét.'},

{cim: "Vörös skorpió (1989)",img: "Photos/film33.jpg",data: ["Akció","Kaland"], leiras: 'A KGB elküldi egyik titkos ügynökét, Nikolai-t Afrikába, hogy ott végezzen egy Moszkva-ellenes érzelmeiről közismert ellenforradalmárral. Ám a titkos ügynök tanúja lesz annak, hogy az oroszok és kubai szövetségeseik milyen kegyetlenül bánnak a bennszülöttekkel, és úgy dönt, átáll a másik oldalra.'},
{cim: "Nico (1988)",img: "Photos/film34.jpg",data: ["Akció","Krimi","Dráma"], leiras: 'Nico Toscani nyomozó maga a megtestesült titok: olasz származású bevándorló, aki Chicagóban nőtt fel, Japánban sajátította el a harcművészetet, dolgozott a CIA-nak, megjárta Vietnamot, szerető férj és apa. De amikor megtudja, hogy hatalmas kábítószer-szállítmány várható, nem tud leállni. Anyag helyett azonban robbanószert találnak, méghozzá olyan típusút, amit Nico még Vietnamból ismer. Ezért is éri olyan váratlanul főnökei döntése: a gyanúsítottakat elengedik, Nicótól pedig elveszik az ügyet. Aztán egy nap főnöke elveszi szolgálati fegyverét és rendőrjelvényét. Nico persze felveszi a kesztyűt.'},
{cim: "Munkahelyi kalamajka (2020)", img: "Photos/film35.jpg",data: ["Vígjáték","Romantikus"], leiras: 'Lacey Keller csodásan kreatív. Csak sajnos ezt senki sem veszi észre, neki pedig nincs elég önbizalma, hogy megmutassa. Hogy megéljen, legjobb barátnője ékszerboltjában dolgozik, éjszakánként pedig egy reklámcég irodaházában biztonsági őr. Egy éjjel az egyik tárgyalóban felejti a vázlatait, és amikor másnap megpróbálja visszaszerezni őket, a reklámcég munkatársai neves reklámszakembernek hiszik. Lacey-t megkísérti a lehetőség, hogy az így keresett pénzből enyhítse adósságát, így aztán belebújik Valerie Staken bőrébe. A szerepcsere azonban számtalan bonyodalomhoz vezet.'},
{cim: "Kicsi Vámpír (2020)", img: "Photos/film36.jpg",data: ["Fantasy"], leiras: 'A kis vámpír nagyon unatkozik, hiszen már három évszázad óta tízéves, ezért iskolába szeretne járni, hogy új barátokat szerezzen.'},

{cim: "Álnok segítség (2020)",img: "Photos/film37.jpg",data: ["Thriller"], leiras: 'Mira és Todd boldog házasságban élnek és igyekeznek mindent megtenni izomsorvadással küzdő kisfiúkért, Maxért, aki mellé még egy bentlakásos gondozót is felfogadnak. Gwen és a kisfiú imádják egymást, azonban hamarosan furcsa dolgok történnek, Mira pedig gyanakodni kezd, hogy Gwen valójában szörnyű titkot rejteget.'},
{cim: "Mr. Süket trükkjei (1972)", img: "Photos/film38.jpg",data: ["Akció","Vígjáték","Krimi"], leiras: 'Boston 87. körzetének rendőrörsén vannak a legelfoglaltabb zsaruk... és minden bizonnyal a leglököttebbek is. A környék szatírját próbálják nagy erőkkel elfogni, miközben Cooper kormánybiztost halálosan megfenyegeti, majd lepuffantja egy Mr. Süket nevű maffiózó. Törvényértelmezési vitát folytatnak az ittas vezetés és az ittas tolatás közötti különbség tisztázására, miközben Mr. Süket és csapata felrobbantja Scanlon alpolgármester autóját. Egy italbolti rablást készülnek épp meghiúsítani, amikor Mr. Süket már úton van a polgármester rezidenciája felé, hogy elhelyezze az ágya alatt a bombát... Hogy a végén mégis a zsaruk győznek? Semmi sem lehet tökéletes... Egy bostoni Olsen bandája zsaru-változatban...'},
{cim: "Gyilkos törvény (1988)", img: "Photos/film39.jpg",data: ["Krimi","Dráma","Thriller"], leiras: 'A brutális asszonygyilkosság nyomozói az egyetlen szemtanú vallomása alapján viszik bíróságra a gyanúsított ügyét. Az izgalmas tárgyalás során azonban a vádlottat felmentik. De hamarosan hasonló bűncselekmények szedik áldozataikat. Köze van-e az ártatlannak nyilvánított ismerősünknek az újabb tragédiákhoz, vagy másfelé kell kutatni a gyilkost...?'},
{cim: "Hivatali titkok (2019)", img: "Photos/film40.jpg",data: ["Életrajzi","Krimi","Dráma"], leiras: 'Egy brit információ kiszivárogtató igaz törénete, aki adatokat adott át a sajtónak az illegális NSA kémművelettel kapcsolatban, amelynek célja az ENSZ Biztonsági Tanácsának a 2003-as iraki invázió szankcionálására való ösztönzése volt.'},

{cim: "Kitervelt segítség (2021)", img: "Photos/film41.jpg",data: ["Krimi","Dráma","Romantikus"], leiras: 'A frissen elvált Grace McGuire, újra randevúzni kezd és viszonyt kezd egy fiatalabb férfival, Alexel, aki neki dolgozik új éttermében. Grace élete izgalmas, de kaotikus, egyszerrek kell zsonglőrködnie az új üzlettel, új szeretővel, tizenéves lányával és egy folyamatosan a nyomában járó volt férjjel. Amikor Grace felbérel egy személyi asszisztenst, Lilith-t, hogy segítsen neki rendszerezni otthonát és üzletét, az élete felfordul és Lilith titkos szándéka hamarosan kiderül.'},
{cim: "Kémkölykök: Armageddon (2023)", img: "Photos/film42.jpg",data: ["Akció","Vígjáték"], leiras: 'Amikor a világ legnagyobb titkos ügynökeinek gyermekei akaratlanul segítenek egy nagyhatalmú játékfejlesztőnek elszabadítani egy számítógépes vírust, amely minden technológia feletti uralmat biztosít számára, nekik maguknak is kémekké kell válniuk, hogy megmentsék szüleiket és a világot.'},
{cim: "A Thomas Crown ügy (1999)",img: "Photos/film43.jpg",data: ["Krimi","Romantikus","Thriller"], leiras: 'Thomas Crownt a saját képességei tették milliomossá, mindent megvehet, amit akar, és a nők nem tudnak ellenállni neki. De vannak dolgok, amelyeket nem adnak pénzért. Thomas Crown számára már semmi sem jelent kihívást. Amikor a világ egyik leghíresebb múzeumában megszólal a riasztó, és valaki kisétál az épületből Monet egyik felbecsülhetetlen értékű festményével, Crown az utolsó, akit a New York-i rendőrség gyanúsítana. De egyvalaki mégis gyanúsítja: Catherine Banning, a briliáns nyomozónő, akit arra béreltek fel, hogy visszaszerezze a festményt - bármi áron. Catherine legalább annyira szereti az üldözést, mint a férfi, és beleveti magát a játékba. Crown megtalálta a kihívást. Mindketten a játékért élnek, de csak egyikük nyerhet.'},
{cim: "Skiptrace - A zűrös páros (2016)",img: "Photos/film44.jpg",data: ["Akció","Kaland","Vígjáték"], leiras: 'Bennie Chan hongkongi nyomozó nagyon szeretné elkapni a kínai gengszterfőnököt, Victor Wongot. Amikor keresztlánya is belekeveredik a maffia ügyeibe, Bennie Chan szövetkezik azzal az amerikai szerencsejátékossal, aki miatt ez megtörténhetett. Együtt készülnek leszámolni a hírhedt maffiafőnökkel.'},

];

var FilterMegjelenit = false;
var div = document.getElementById("filmek");var keres = [];var nemkeres = [];var filmekdb = filmek.length;
function betolt(){
    div.innerHTML = "";var index = 0;var count = 0;var eindex = 0;var tmp = document.createElement("div");var kinput = document.getElementById("SearchInput").value;
    while(count < filmekdb){
        var szuresbool = false;
        if (kinput != "" && !filmek[count].cim.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(kinput.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
            szuresbool = true;
        }else
            if (keres.length !=0 || nemkeres != 0 ) {
                keres.forEach(element => {
                    if (filmek[count].data.includes(element) == false) {
                        szuresbool = true;}
                });
                nemkeres.forEach(element => {
                    if (filmek[count].data.includes(element)) {
                        szuresbool = true;}
                });
        }
        if (!szuresbool) {
            tmp.innerHTML +=
                '<div class="row" id="row"><div class="RowIMG">'+'<img src="'+
                filmek[count].img+
                '" alt=""><div class="RowIMGBelso"><div><h2>'+
                filmek[count].data.join('</br>')+
                '</h2></div><div><input type="button" value="Bővebben" id='+count+' onclick=FilmReszlet(this.id) class="BovebbenButton"></div></div></div><div class="RowH1"><h1>'+
                filmek[count].cim+
                '</h1></div></div>'; 
            index++;
        }
        count++;
        if (index%4 == 0) {
            if(index != 0 && index != eindex){
                eindex = index;
                tmp.className = "column";
                div.appendChild(tmp);
                tmp = document.createElement("div"); 
            }
        }
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
        setTimeout(SearchTime,5000);
    }
}

function SearchTime(){
    if(document.getElementById('SearchInput').value == ""){
        document.getElementById("SearchInput").classList.add("SearchHide");
        setTimeout(SearchClassRemove,5000);
    }
}

function Filter(){
    var KeresButtonok = document.getElementsByClassName('Keres');
    var NemKeresButtonok = document.getElementsByClassName('NemKeres');
    if(FilterMegjelenit == false){
        FilterMegjelenit = true;
        document.getElementById('FilterOpen').classList += " FilterMegjelenites";
        setTimeout(FilterOpen,200);
    }
    else if(FilterMegjelenit == true){
        FilterMegjelenit = false;
        for (let i = 0; i < KeresButtonok.length; i++) {
            KeresButtonok[i].classList += " Eltuntetes";
            NemKeresButtonok[i].classList += " Eltuntetes";
            document.getElementById(KeresButtonok[i].id+"h").classList += " Eltuntetes";
        }
        setTimeout(FilterClose,200);
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

function FilmReszlet(num){
    document.getElementById('CloseButtonDiv').innerHTML = "<p>"+filmek[num].cim+"</p>";
    document.getElementById('BemutatkozasIMG').src = filmek[num].img;
    document.getElementById('BemutatkozasP').innerHTML = "<p>"+filmek[num].leiras+"</p>";
    document.getElementById('BemutatkozasIMG').src = filmek[num].img;
    document.getElementById('BlackBackground').classList = 'BlackBackground BackMegjelen';
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas BemutatkozasMegjelen";
    setTimeout(TobbiMegjelenites,200);
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
    setTimeout(MindenEltuntet,200);
}

function MindenEltuntet(){
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas Megjelen BemutatkozasEluntet";
    setTimeout(BezarEluntet,200);
    document.getElementById('BlackBackground').classList = 'BlackBackground BackMegjelen BackEluntet';
}

function BezarEluntet(){
    document.getElementById('Bemutatkozas').classList = "Bemutatkozas";
    document.getElementById('BlackBackground').classList = 'BlackBackground';
}


betolt();