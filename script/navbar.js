/* Van dit deel vanboven moet je afblijven tenzij je weet wat je aan het doen bent */

/*
<nav id="navbar">
<img class="hamburger" src="hamburger.png" onclick="hamburgerMenu()"/>
<script src="navbar.js"></script>
*/

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenu() {
  var x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = null;
  } else {
    x.style.display = "block";
  }
}


function pagina(naam, bestand) {
	var y = ''
  if (window.location.pathname.split("/").pop() == bestand || window.location.pathname.split("/").pop() == bestand.split(".").shift()) {
    y = '<li class="huidig">' + naam + '</li>';
  }
  else {
    y = '<li><a href="' + bestand + '">' + naam + '</a></li>';
  }
	return y
}

console.log("loaded navbar.js")


/* vvvvvvvvvvvvvvvvvvvvvv VANAF HIER PAS JE AAN vvvvvvvvvvvvvvvvvvvvvv
Hieronder staat het deel dat je mag aanpassen

Uiteindelijk zou het er moeten uitzien zoals hier:
document.getElementById("navbar").innerHTML = "<ul>" + pagina("NAAM1", "naam1.html") + pagina("NAAM2", "naam2.html") ... + "</ul>"

Je moet altijd iets invullen, anders werkt het niet

Voor meerdere pagina's moet je gewoon +pagina(blablabla)+pagina(blablabla2)+pagina(blablabla3)+...
Om het overzichtelijk te houden gebruik je best enters tussen verschillende pagina's.
*/

document.getElementById("navbar").innerHTML = "<ul>"
	+ pagina("HOME", "index.html")
	+ pagina("LEIDING", "leiding.html")
	+ pagina("LID WORDEN", "lidworden.html")
	+ pagina("VERHUUR", "verhuur.html")
	+ pagina("GOUDEN ZONDAGSKE", "goudenzondagske.html")

  + "</ul>"
