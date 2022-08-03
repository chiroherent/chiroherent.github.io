/*
<nav id="navbar">
<img class="hamburger" src="hamburger.png" onclick="hamburgerMenu()"/>
<script src="navbar.js"></script>
*/

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerMenu() {
  var x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function pagina(naam, bestand) {
	var y = ''
  if (window.location.pathname.split("/").pop() == bestand || window.location.pathname.split("/").pop() == bestand.split(".").shift()) {
    y = '<li class="huidig">' + naam + '</li>'
  }
  else {
    y = '<li><a href="' + bestand + '">' + naam + '</a></li>'
  }
	return y
}

/* Van het deel hierboven moet je afblijven tenzij je weet wat je aan het doen bent */

document.getElementById("navbar").innerHTML = "<ul>"
	+ pagina("HOME", "index.html")
  + pagina("LEIDING", "leiding.html")
  + pagina("LID WORDEN", "lidworden.html")
  + pagina("VERHUUR", "verhuur.html")
  + pagina("GOUDEN ZONDAGSKE", "goudenzondagske.html")

  + "</ul>"
