var slikeVjesala = ["slike/kraljica1.jpg", "slike/kraljica2.jpg", "slike/kraljica3.jpg", "slike/kraljica4.jpg", "slike/kraljica5.jpg", "slike/kraljica6.jpg", "slike/kraljica7.jpg", "slike/kraljica8.jpg", "slike/kraljica9.jpg", "slike/slika10.jpg"];


var nizRijeci = ['telefon', 'računar', 'k\u01CCiga', 'tastatura', 'škola', 'pernica', 'svinja', 'krava', 'zavjesa', 'zatvor', 'k\u01C9uč', 'lopta', 'lavabo', 'olovka', 'jorgan', 'papir', 'brada', 'magarac', 'majica', 'polica', 'kašika', 'šibica', 'ribizla', 'tabure', 'tambure', 'rikverc', 'sladoled', 'zavoj', 'zatvoren', 'zatucan', 'zaturen', 'sijalica', 'jorgovan', 'lopata', 'papagaj', 'okovan', 'alkatraz', 'ana kare\u01CCina', 'aždaja', 'ajnštajn', 'ajfelova kula', 'a\u01C9kavost', 'bankrot', 'barometar', 'barutana', 'bespomoćnik', 'biblioteka', 'bilijar', 'biserna ogrlica', 'bičeva\u01CCe', 'blagajnik', 'blatobran', 'bod\u01C9ikavo prase', 'bogatstvo', 'bokvica', 'bombo\u01CCera', 'borovina', 'borovnica', 'božićno drvce', 'brb\u01C9a\u01CCe', 'brijačnica', 'brilijant', 'brodolom', 'brojalice', 'budućnost', 'buntovnik', 'vizantijsko carstvo', 'velebit', 'vinograd', 'vodopad', 'vojvoda', 'vi\u01C9uškar', 'vakcina', 'vitrina', 'gibraltar', 'gondola', 'gostionica', 'galaksija', 'gojaznost', 'geografija', 'gmizavac', 'gimnastika', 'gravitacija', 'geometrija', 'gangster', 'grm\u01C9avina', 'daždev\u01CCak', 'diplomata', 'dalmatinac', 'društvena igra', 'današ\u01CCica', 'đačka k\u01CCižica', 'đerdapsko jezero', 'đerdapska klisura', 'deter\u01C6ent', 'adolescent', 'kaladont', 'šlagvort', 'koreografija', 'lutkarska predstava', 'dramaturgija', 'tragikomedija', 'akrobacija', 'orkestar', 'scenografija', 'pantomima', 'asocijacija', 'gestikulacija', 'improvizacija', 'orlovi rano lete', 'institucija', 'sentimentalan', 'korporacija', 'pepe\u01C9ara', 'pinokio', 'pi\u01C6ama', 'prikolica', 'palačinka', 'padobran', 'ekskurzija', 'evaluacija', 'escajg', 'enciklopedija', 'epruveta', 'eukaliptus', 'električna gitara', 'mišolovka', 'muholovka', 'mramorne pločice', 'mandarina', 'mitra\u01C9ez', 'mješalica', 'nalivpero', 'novčanik', 'natikača', 'naramenica', 'neboder', 'nadmadrac', 'zastava', 'ziherica', 'zupčanik', 'zavjese', 'zimnica', 'zona zamfirova', 'že\u01C9eznica', 'žonglirati', 'okruže\u01CCe', 'žgo\u01C9av', 'ugostite\u01C9stvo', 'ucje\u01CCivač', 'ulaznica', 'utičnica', 'usna harmonika', 'umivaonik', 'u\u01C6benik', 'horoskop', 'hlad\u01CCak', 'hulahop', 'hamburger', 'hidroelektrana', 'hobotnica', 'hrskavica', 'robovi', 'radijator']; 


var privremeniDiv = {};
var velikiDiv = document.getElementById('velikiDiv'); 
// preko ID-a nalazimo veliki div iz html-a koji ce nam sluziti za smijestanje divova za pojedinacno slovo
var redniBrojSlike = 0;
var brojacSlova = 0;
var slovoA = "";
var randomRijec = "";
var brojPobjeda = 0;
var brojacRazmaka=0;
/* for (var i = 0; i < randomRijec.length; i++) {
    privremeniDiv = document.createElement('div');
    privremeniDiv.className = 'linijeSlova';
    privremeniDiv.appendChild(document.createTextNode(randomRijec.charAt(i)));
    velikiDiv.appendChild(privremeniDiv);
} */
// preko for petlje generisemo prazne divove za svako pojedinacno slovo
// u privremeniDiv kreiramo divove, kojima takodje dodajemo klasu linijeSlova
// sa appendChild privremenom divu dodajemo sadrzaj u vidu pojedinacnog slova rijeci
// zatim ga smjestimo u velikiDiv
//ovo mi je za pokretanje i stopiranje muzike
const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");
button.addEventListener("click", () => {
    if (audio.paused) {
      audio.volume = 0.2;
      audio.play();
      icon.classList.remove('fa-volume-up');
      icon.classList.add('fa-volume-mute');
      
    } else {
      audio.pause();
      icon.classList.remove('fa-volume-mute');
      icon.classList.add('fa-volume-up');
    }
    button.classList.add("fade");
  });
//unos i spremanje ime igraca
function podesiImeIgraca() {
    var imeIgraca = document.getElementById('ime');
    imeIgraca.innerHTML = document.getElementById('nameInput').value;
    document.getElementById('podesiIme').style.display = 'none';   // sakrij polje unosa i button
}

function glavnaStrana() {
    document.getElementById('glavnaS').style.display = 'block';
    document.getElementById('pocetnaS').style.display = 'none';
    // ovdje zapocinjemo igru
    playGame();
}
//funkcije za prikazivanje i zatvaranje stranice za pravila igre
 function zatvoriPravila() {
    var zatvoriP=document.getElementById("pravila");
     zatvoriP.style.display='none';
 }
 function prikaziPravila() {
     var pravilaPP=document.getElementById("pravila");
     pravilaPP.style.display='block';
 }

function prikazi(slovo) {
    var divoviSlova = document.getElementsByClassName('nevidljiviDiv');
    // pomocu getElementsByClassName dolazimo do slova kojima je ta klasa dodijeljena
    var pozicijaSlova = randomRijec.indexOf(slovo);
    // pomocu indexOf svakom slovu nalazimo poziciju
    if (pozicijaSlova === -1) {
        slide();
        console.log('promaseno slovo');
        document.getElementById(slovo).disabled = true;
        // sa disabled onemogucavamo vise puta klik na jedno dugme
        return;
    }
        // sa if ispitujemo ako se slovo ne nalazi ni na jednoj poziciji
        // u tom slucaju se poziva funkcija za slike vjesala

    while (pozicijaSlova > -1) {
    console.log(pozicijaSlova);
    divoviSlova[pozicijaSlova].classList.add('vidljivaSlova');
    // slovima koja su pronadjena na odredjenoj poziciji dodjeljujemo klasu vidljivaSlova
    pozicijaSlova = randomRijec.indexOf(slovo, pozicijaSlova + 1);
    // ispitujemo da li se isto slovo nalazi na jos nekom mjestu
    console.log(slovo);
    document.getElementById(slovo).disabled = true;
    brojacSlova++;
    console.log(brojacSlova);
    if (brojacSlova >= randomRijec.length -brojacRazmaka) {
        // postavlja se uslov da se pokrene funkcija Win kada igrac pogodi sva slova u rijeci
        prikaziWin();
        // brojPobjeda++;
        }
    }
}

function slide() { 
    console.log("redni broj slike: " + redniBrojSlike);
    if (redniBrojSlike == slikeVjesala.length-2) {
        prikaziLose();
         }
     redniBrojSlike++;
     document.vjesala.src = slikeVjesala[redniBrojSlike];
    }

function zatvoriWin() {
    var zatvoriPobjeda = document.getElementById('win');
    zatvoriPobjeda.style.display = 'none';
}

function prikaziWin() {
    var prikaziPobjeda = document.getElementById('win');
    prikaziPobjeda.style.display = 'block';
}

function zatvoriLose() {
    var zatvoriPoraz = document.getElementById('lose');
    zatvoriPoraz.style.display = 'none';
}

function prikaziLose() {
    var prikaziPoraz = document.getElementById('lose');
    prikaziPoraz.style.display = 'block';
}

function napustiIgru() {
    var dugme = document.getElementById('napustiIgru');
    location.reload();
}

function playGame() {
    var velikiDiv = document.getElementById('velikiDiv');
    randomRijec = nizRijeci[Math.floor(Math.random() * nizRijeci.length)];

    var abcSlova = document.getElementsByClassName('sl');
    for (var i = 0; i < abcSlova.length; i++) {
        abcSlova[i].disabled = false;
    }

    while (velikiDiv.lastElementChild) {
        velikiDiv.removeChild(velikiDiv.lastElementChild);
    }

    for (var i = 0; i < randomRijec.length; i++){
        var privremeniDiv = document.createElement('div');
        privremeniDiv.className = 'nevidljiviDiv';
        privremeniDiv.appendChild(document.createTextNode(randomRijec.charAt(i)));
        velikiDiv.appendChild(privremeniDiv);
    }
    brojacRazmaka = randomRijec.split(" ").length -1;

    // resetujemo redni broj slike
    redniBrojSlike = 0;
    document.vjesala.src = slikeVjesala[redniBrojSlike];
    // resetujemo i brojac slova za novu rijec
     brojacSlova = 0;

    zatvoriWin();
    zatvoriLose();
        
}


