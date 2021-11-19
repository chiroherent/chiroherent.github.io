<!DOCTYPE html>
<html lang="nl-BE">
<head>
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:300">
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <title>Chiro Herent</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v3.3"></script>

</head>
<body>
<header>
    <div class="container">
        <img class="logo" src="logo.png" alt="logo"/>
        <nav>
            <ul>
                <li class="huidig">HOME</li>
                <li><a href="leiding.html">LEIDING</a></li>
                <li><a href="lidworden.html">LID WORDEN</a></li>
                <li><a href="Verhuur.html">VERHUUR</a> </li>
            </ul>
        </nav>
    </div>
</header>
<section class="showcase">
    <h1 id="imgtxt">Chiro Herent</h1>
</section>
<div class="indexmain">

    <div class="left">
        <h1 class="maintitel">Interessantjes</h1>
        <h1>FAQ</h1>
        <div id="faq">
            <p>Omdat dit voor iedereen natuurlijk een ongewone situaties is, geven we hieronder antwoord op de meest gestelde vragen. Heb je een vraag die hier niet beantwoord wordt? Dan kan je altijd eens kijken naar de FAQ-lijst van <a target="_top" href="https://chiro.be/corona">chiro nationaal</a>. </p>

            <div>
              <button onclick="wie()">Wie mag er mee op kamp?</button>
                <div id="wieVenster" style="display: none">
                    <p>Op zich mag iedereen die zich heeft ingeschreven mee vertrekken op kamp. Wel zijn er bepaalde zaken waar je rekening mee moet houden. </p>
                    <ul>
                        <li>1)	Zo mag uw zoon of dochter niet mee op kamp vertrekken als hij/zij in de 5 voorafgaande dagen ziek is geweest (ongeacht Covid-19 of niet).</li>
                        <li>2)	Als er covid-19 is vastgesteld bij één van de leden van jullie thuis-bubbel, mag je zoon of dochter niet mee op kamp vertrekken. </li>
                        <li>3)	Van de leden die tot een risicogroep behoren, hebben we een doktersattest (-12 jaar) of toestemming van de ouders (+12 jaar) nodig.  </li>
                    </ul>
                </div>
            </div>

            <div>
                <button onclick="mag()">Mag ik mijn zoon of dochter zomaar van het ene kamp naar het andere sturen?</button>
                <div id="magVenster" style="display: none">
                    <p>Voordat de kinderen deze zomer van bubbel veranderen, moeten ze 2 dagen thuis blijven. Dit betekent dat uw zoon of dochter een kamp mag volgen tot en met vrijdag 17 juli en dan maandag 20 juli mee vertrekken op chirokamp. Volgt hij of zij een kamp tot en met zaterdag of zondag? Dan zal uw kind nog 2 dagen thuis moeten blijven, vooraleer hij/zij mag deelnemen aan ons kamp. </p>
                </div>
            </div>

            <div>
                <button onclick="moeten()">Moeten al mijn kinderen in dezelfde bubbel zitten op kamp? </button>
                <div id="moetenVenster" style="display: none">
                    <p>Nee, het kan dus goed zijn dat broers en zussen in verschillende bubbels zitten. Dit betekent natuurlijk ook dat zij gedurende het kamp geen fysiek contact mogen hebben met elkaar. Dit betekent ook dat zij geen gedeelde valiezen, spullen… kunnen hebben. Hoe dit precies in zijn werk gaat met het vervoer, zie verder. </p>
                </div>
            </div>

            <div>
                <button onclick="wat()">Wat als ik mijn kinderen niet zelf naar het kampterrein kan brengen?</button>
                <div id="watVenster" style="display: none">
                    <p>Hoewel we hadden gecommuniceerd dat carpoolen geen opties is, zijn de regels ondertussen versoepeld. Er zijn 2 mogelijkheden om naar kamp te komen: </p>
                    <ul>
                        <li>1)	U brengt enkel uw eigen kinderen, ook al zitten ze in verschillende bubbels.  </li>
                        <li>2)	U rijdt met kinderen uit één en dezelfde bubbel. Dit betekent dat als broers en zussen niet in dezelfde bubbel zitten, er dus geen externe mee mag rijden. Zitten broers en zussen wel in dezelfde bubbel mag u iemand extra uit deze bubbels meenemen.  Aan deze laatste optie zijn ook wat voorwaarden aan verbonden: zo draagt iedereen die ouder is dan 12 een mondmasker gedurende de autorit en moet u handgel voorzien zodat alle inzittende voor en na de handen kunnen ontsmetten. </li>
                    </ul>
                    <p>De concrete regeling van het kampvervoer (aankomst en vertrekuren) wordt later meegedeeld. </p>
                </div>
            </div>

            <div>
                <button onclick="ziek()">Wat als mijn zoon/dochter ziek wordt op kamp? </button>
                <div id="ziekVenster" style="display: none">
                    <p>Elk lid dat ziek wordt gedurende het kamp moet naar huis ongeacht of het covid 19 is of niet. Het is dus zeer belangrijk dat u voorziet dat er iemand van uw thuis-bubbel uw zoon of dochter kan komen halen. Wij voorzien een plekje waar de leden in rust kunnen wachten op hun ouders, het is dus zeker niet nodig dat u binnen de 2 uur op het kampterrein staat maar wel de dag zelf nog.
                        Daarnaast is het ook heel belangrijk dat u met uw zoon/dochter zo snel naar uw huisarts gaat en achteraf aan de leiding laat weten wat de uitslag was van de corona- test</p>
                </div>
            </div>

            <div>
                <button onclick="social()">Is social distancing van toepassing tijdens het kamp, de activiteit of de werking?</button>
                <div id="socialVenster" style="display: none">
                    <p>Binnen in de bubbels moet social distancing niet worden toegepast. Wel proberen we intensief contact te vermijden. Spelletjes zoals kus of kot, snoepje uit bloem zoeken… worden dus vermeden. Tussen de bubbels wordt er wel social distancing toegepast. </p>
                </div>
            </div>

            <div>
                <button onclick="spullen()">Moet ik mijn kind extra/andere spullen meegeven? </button>
                <div id="spullenVenster" style="display: none">
                    <p>Wij hebben onze pak en zak  lijst (zie verder) dit jaar een beetje aangepast. Zo vragen wij aan alle +12 jarige om zelf minstens één mondmasker mee te nemen. Wij hopen dat dit voor iedereen mogelijk is. Heb je er thuis geen? Stuur dan een mailtje naar de leiding en dan zoeken we een oplossing.
                        Pas wel op! Zoals eerder vermeld kan het zijn dat broers en zussen in verschillende bubbels zitten. Zij kunnen dus geen spullen delen, let hier zeker voor op!
                    </p>
                </div>
            </div>
        </div>

        
<h1>Voorstellingen</h1>
        <p>De Chiro is een organisatie door, maar vooral voor jongeren, gelegen in de Broekveldstraat 33, tegenover de Carrefour/GB van Herent. Het is een plaats waar de kinderen zich kunnen uitleven, spelen en ravotten, knutselen en origineel zijn. Maar het is tevens een plaats waar groepsgeest, samenhorigheid en eendracht primeren. Voor elke leeftijdscategorie is er een groep voorzien, er is dus voor ieder wat wils.</p>
        <p>Voor de allerjongsten onder ons zijn er de Kiekeboes. Deze bengels tussen zes en acht jaar zijn elke zondag tussen twee en vijf welkom op de Chiro. Als je tussen acht en tien jaar oud bent, kan je terecht bij de Speelclub. Bij de Kiekeboes en Speelclub zitten alle leden samen. Hogere groepen zijn niet meer gemengd. Daarmee zijn we dan aanbeland bij de Rakwis. Jongens tussen tien en twaalf jaar horen bij de Rakkers thuis, meisjes van deze leeftijd horen bij de Kwikken. Zo is er een groep voor iedereen tot en met 18, na twee jaar aspi kan je leiding worden.</p>
        <img id="takken" src="Takken.png" alt=""/>
        <p><b>LIDGELD:</b> Het lidgeld bedraagt 35 euro per lid per jaar.</p>
        <p>Dit kan worden gestort op ons <b>rekeningnummer</b>: BE43 0682 1615 2201 met vermelding van naam+groep.</p>
       



        <h1>Tweedehands Chiro-kleren</h1>
      <p>We weten allemaal dat de officiële Chirokledij zeer duur is, daarom willen wij vragen om Chirokledij die te klein is geworden en waar jullie niets meer mee doen aan ons te geven. Wij zouden deze dan voor een mooie prijs doorverkopen op de Chiro. De winst die we hierop maken geven we aan een vrijwilligersorganisatie. Ouders die kledij komen afgeven mogen mee stemmen voor welke organisatie de winst gaat. Maar dit alles hangt natuurlijk af van de input van jullie oude kleren. De site van waar de kledij vandaan komt is <a target="_top" href="https://www.debanier.be/">de banier</a> .</p>
        <p>&nbsp;</p>
    </div>
    <div class="right">
        <h3>Moetjeslezen</h3>
        <p>De Moetjeslezen is het boekje voor alle groepen, dit kan je online of op papier krijgen.</p>
        <h3>Hier kan je ons vinden</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1257.8649062753857!2d4.673633958142483!3d50.910215294885354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c16086441ea109%3A0xfac1aa9d52fb1b68!2sChiro%20Herent!5e0!3m2!1snl!2sbe!4v1636919734910!5m2!1snl!2sbe" width="100%" height="200" style="border:0" allowfullscreen></iframe>
        <div class="fb-page" data-href="https://www.facebook.com/Chiro-Herent-365006354892/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Chiro-Herent-365006354892/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Chiro-Herent-365006354892/">Chiro Herent</a></blockquote>
		</div>
		<h3>Kamp van 20 juli tot 30 juli 2022</h3>
      <iframe src="https://free.timeanddate.com/countdown/i6w6t98k/n48/cf107/cm0/cu4/ct0/cs1/ca0/co1/cr2/ss0/cac000/cpc000/pcfff/tcfff/fs130/tatKampklok/tac000/tptTime%20since%20Event%20started%20in/tpc000/iso2022-07-20T09:00:00" allowtransparency="true" frameborder="0" width="320" height="125"></iframe>
    </div>
</div>

<footer>
    <p>Chiro Herent</p>
    <p><a id="maps" href="https://goo.gl/maps/Uh1MN5SQFpmxxETr8">Broekveldstraat 33</a></p>
    <p>3020 Herent</p>
    <img src="Fairtrade.png" alt="fairtrade logo"/>
    <p>www.chiroherent.be</p>
    <p><a id= "email" href="mailto:leiding.chiroherent@gmail.com" target="_top">leiding.chiroherent@gmail.com</a></p>
</footer>

<script type="text/javascript">

    function wie(){
        var x = document.getElementById("wieVenster");
        if(x.style.display === 'none'){
            x.style.display = 'block';
        }
        else{
            x.style.display = 'none';
        }
    }

    function mag(){
        var x = document.getElementById("magVenster");
        if(x.style.display === 'none'){
            x.style.display = 'block';
        }
        else{
            x.style.display = 'none';
        }
    }
    function moeten(){
        var x = document.getElementById("moetenVenster");
        if(x.style.display === 'none'){
            x.style.display = 'block';
        }
        else{
            x.style.display = 'none';
        }
    }
    function wat(){
        var x = document.getElementById("watVenster");
        if(x.style.display === 'none'){
            x.style.display = 'block';
        }
        else{
            x.style.display = 'none';
        }
    }
    function ziek(){
        var x = document.getElementById("ziekVenster");
        if(x.style.display === 'none'){
            x.style.display = 'block';
        }
        else{
            x.style.display = 'none';
        }
    }
    function social(){
        var x = document.getElementById("socialVenster");
        if(x.style.display === 'none'){
            x.style.display = 'block';
        }
        else{
            x.style.display = 'none';
        }
    }
    function spullen(){
        var x = document.getElementById("spullenVenster");
        if(x.style.display === 'none'){
            x.style.display = 'block';
        }
        else{
            x.style.display = 'none';
        }
    }
</script>
</body>
</html>
