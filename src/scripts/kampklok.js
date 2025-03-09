// Deze zouden al bepaald moeten zijn in de html file, maar als ze niet bestaan, worden ze hier gedefinieerd
if (typeof beginVoorKamp === 'undefined' || beginVoorKamp === null) {
    beginVoorKamp = [17, 7]; // begindatum voorkamp 17 juli
}
if (typeof beginKamp === 'undefined' || beginKamp === null) {
    beginKamp = [20, 7]; // begindatum kamp 20 juli
}
if (typeof eindeKamp === 'undefined' || eindeKamp === null) {
    eindeKamp = [30, 7]; // einddatum 30 juli
}

const now = new Date();

// jaar van kamp bepalen
const eindeKampDitJaar = new Date(now.getFullYear(), eindeKamp[1] - 1, eindeKamp[0], 13);
let jaarvankamp;
if (now < eindeKampDitJaar) {
    jaarvankamp = now.getFullYear();
} else {
    jaarvankamp = now.getFullYear() + 1;
}

// begin en einde kamp instellen met het gevonden jaar
const beginVoorKampDate = new Date(jaarvankamp, beginVoorKamp[1] - 1, beginVoorKamp[0], 9); // om 9u
const beginKampDate = new Date(jaarvankamp, beginKamp[1] - 1, beginKamp[0], 9); // om 9u
const eindeKampDate = new Date(jaarvankamp, eindeKamp[1] - 1, eindeKamp[0], 13); // om 13u
let kampBezig = false; // wordt nog aangepast als kamp bezig is
;

// add to calendar knop aanpassen, de knop zal niet zichtbaar worden zonder deze aanpassingen
document.getElementById("add-to-calendar-button").setAttribute("iCalFileName", `chirokamp${jaarvankamp}`);
document.getElementById("add-to-calendar-button").setAttribute("startDate", beginKampDate.toISOString().slice(0, 10));
document.getElementById("add-to-calendar-button").setAttribute("endDate", eindeKampDate.toISOString().slice(0, 10));

// veel gebruikte waarden bewaren
const beginVoorKampMillisec = beginVoorKampDate.getTime();
const beginKampMillisec = beginKampDate.getTime();
const eindeKampMillisec = eindeKampDate.getTime();
const nowMillisec = now.getTime();


//tekstjes die je kan zien op bepaalde momenten
if (nowMillisec >= beginVoorKampMillisec && nowMillisec < beginKampMillisec) { //voorkamp, maar nog geen kamp
    document.getElementById("kampklokinfo").innerHTML = "Het is niet lang meer, de tenten worden al opgezet!";
} else if (nowMillisec >= beginKampMillisec && nowMillisec <= eindeKampMillisec) { //kamp is bezig
    document.getElementById("kampklokinfo").innerHTML = "Het kamp is bezig, tijd om te spelen!";
} else if (nowMillisec < eindeKampMillisec - 30240000000) { //nog een tijdje na kamp, het getal is 50 weken in millisec (deze boodschap is dus te zien voor 2 weken na het kamp)
    document.getElementById("kampklokinfo").innerHTML = "Het kamp is voorbij, hopelijk zien we jullie volgend jaar terug!";
} else { //doorheen het jaar, toont hoeveel nachtjes slapen het nog is
    document.getElementById("kampklokinfo").innerHTML = "Nog " + ((Math.floor((beginKampMillisec - nowMillisec) / (1000 * 60 * 60 * 24))) - 1) + " nachtjes slapen";
}


//begint of eindigt over
if (nowMillisec > beginKampMillisec && nowMillisec < eindeKampMillisec) { //kamp bezig 
    kampBezig = true;
    document.getElementById("kampklokuitleg").innerHTML = "Het kamp duurt nog"
} else { //kamp niet bezig 
    kampBezig = false;
    document.getElementById("kampklokuitleg").innerHTML = "Het kamp begint over"
}


//aftelklok, update elke seconde
const kampkloktijdElement = document.getElementById("kampkloktijd");

setInterval(function () {
    const nowNew = new Date().getTime();
    let timeleft;

    if (kampBezig) { // kamp bezig, klokt telt af naar het einde van het kamp
        timeleft = eindeKampMillisec - nowNew;
    } else { // kamp niet bezig, klok telt af naar het begin van het kamp
        timeleft = beginKampMillisec - nowNew;
    }

    // tijd omzetten naar dagen, uren, minuten, seconden
    const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    kampkloktijdElement.innerHTML = `${days} dagen ${hours} uur ${minutes} minuten ${seconds} seconden`;

}, 1000);