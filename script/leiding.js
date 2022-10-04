/* Van dit deel vanboven moet je afblijven tenzij je weet wat je aan het doen bent */

function leiding(naam, email, telefoon) {
	var x = ''
	if (naam != null) {
		x += '<dt><strong>' + naam + '</strong></dt>';
	} if (email != null) {
		x += '<dd><a href="mailto:' + email + '">' + email + '</a></dd>';
	} if (telefoon != null) {
		x += '<dd>' + telefoon + '</dd>';
	}
	return x
}

console.log("loaded leiding.js")




/* vvvvvvvvvvvvvvvvvvvvvv VANAF HIER PAS JE AAN vvvvvvvvvvvvvvvvvvvvvv


Hieronder staat het deel dat je mag aanpassen
Uiteindelijk zou het er moeten uitzien zoals hier:

document.getElementById("groepsnaam").innerHTML = leiding("Naam", "email", "telefoonnummer")+leiding("Naam2", "email2", null);

Als je in een vak niets wil invullen zet je null (zonder aanhalingstekens)

Voor meerdere leiding moet je gewoon leiding(blablabla)+leiding(blablabla2)+leiding(blablabla3)+...

Om het overzichtelijk te houden gebruik je best enters tussen verschillende leiding.
*/

document.getElementById("hoofdleiding").innerHTML =
	leiding("Jur Melio", "jur.melio@hotmail.com", "0487 89 87 34") /* "0487 89 87 34" */
	+ leiding("Phil Huybens", "phil.huybens@outlook.com", "0472 10 54 48") /* "0472 10 54 48" */
	+ leiding("Lukas Verboven", "lukas.verboven@gmail.com", "0484 51 04 85") /* "0484 51 04 85" */
	;

document.getElementById("vb").innerHTML =
	leiding("Lore Houben", "lorehouben@hotmail.com", "0471 11 97 98")
	;

document.getElementById("kiekeboes").innerHTML =
	leiding("Elle Wouters", "ellewouters@gmail.com", null)
	+ leiding("Mette Couvreur", "mette.couvreur@hotmail.com", null)
	+ leiding("Xander De Kay", "Xander.dekay@gmail.com", null)
	+ leiding("Gijs Puttemans", "gijs.puttemans20@gmail.com", null)
	+ leiding("Lara Stulens", "", null)
	;

document.getElementById("speelclub").innerHTML =
	leiding("Janne Boogaerts", "janneboogaerts@gmail.com", null)
	+ leiding("Broos Cornelis", "", null)
	+ leiding("Siko Couvreur", "", null)
	+ leiding("Jorre Wyffels", "", null)
	+ leiding("Hannah Stoefs", "", null)
	;

document.getElementById("kwikken").innerHTML =
	leiding("Loïs Huybens", "", null)
	+ leiding("Douwe Somers", "douwesomers@live.be", null)
	+ leiding("Anke Goyens", "", null)
	;

document.getElementById("rakkers").innerHTML =
	leiding("Jur Melio", "jur.melio@hotmail.com", null)
	+ leiding("Phil Huybens", "phil.huybens@outlook.com", null)
	+ leiding("Dries Pollers", "dpollers@gmail.com", null)
	;

document.getElementById("tippers").innerHTML =
	leiding("Hasse Casaer", "hasse.casaer@gmail.com", null)
	+ leiding("Han Resseler", "", null)
	+ leiding("Bente Joris", "", null)
	;

document.getElementById("toppers").innerHTML =
	leiding("Elgar Suy", "elgarsvb@gmail.com", null)
	+ leiding("Niels Malliet", "niels.malliet@gmail.com", null)
	+ leiding("Rens Deschryver", "rens.deschryver@gmail.com", null)
	;

document.getElementById("tiptiens").innerHTML =
	leiding("Alizée Jacobs", "alizee.jacobs@hotmail.be", null)
	+ leiding("Wouter Capoen", "capoenwouter@gmail.com", null)
	+ leiding("Sara Jacobs", "", null)
	;

document.getElementById("kerels").innerHTML =
	leiding("Luca Jacobs", "lucajacobs73@gmail.com", null)
	+ leiding("Lukas Verboven", "lukas.verboven@gmail.com", null)
	;

document.getElementById("aspimeisjes").innerHTML =
	leiding("Pauline Poplemont", "paulinepoplemont@live.be", null)
	+ leiding("Pixie Neyens", "pixie.neyens@hotmail.com", null)
	+ leiding("Yagon Hannot", "yagonhannotgus@gmail.com", null)
	;

document.getElementById("aspijongens").innerHTML =
	leiding("Wannes Dirix", "wannes.dirix@gmail.com", null)
	+ leiding("Esmée Devlieger", "esmeedevlieger@gmail.com", null)
	+ leiding("Senne Beunen", "senne.beunen@gmail.com", null)
	;

