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






/* vvvvvvvvvvvvvvvvvvvvvv VANAF HIER PAS JE AAN vvvvvvvvvvvvvvvvvvvvvv


Hieronder staat het deel dat je mag aanpassen
Uiteindelijk zou het er moeten uitzien zoals hier:

document.getElementById("groepsnaam").innerHTML = leiding("Naam", "email", "telefoonnummer")+leiding("Naam2", "email2", null);

Als je in een vak niets wil invullen zet je null (zonder aanhalingstekens)

Voor meerdere leiding moet je gewoon leiding(blablabla)+leiding(blablabla2)+leiding(blablabla3)+...

Om het overzichtelijk te houden gebruik je best enters tussen verschillende leiding.
*/

document.getElementById("hoofdleiding").innerHTML =
	leiding("Jur Melio", "jur.melio@hotmail.com", "0487 89 87 34")
	+ leiding("Phil Huybens", "phil.huybens@outlook.com", "0472 10 54 48")
	+ leiding("Lukas Verboven", "lukas.verboven@gmail.com", "0484 51 04 85")
	;

document.getElementById("vb").innerHTML =
	leiding("Lore Houben", "lorehouben@hotmail.com", "0471 11 97 98")
	;

document.getElementById("kiekeboes").innerHTML =
	leiding("Lukas Verboven", "lukas.verboven@gmail.com", null)
	+ leiding("Yagon Hannot", "yagonhannotgus@gmail.com", null)
	+ leiding("Katoo Janssens", "katoojanssens@gmail.com", null)
	+ leiding("Anne-Sophie Hons", "annesophie.hons@hotmail.com", null)
	+ leiding("Luna Neyens", "luna.neyens@hotmail.com", null)
	;

document.getElementById("speelclub").innerHTML =
	leiding("Hasse Casaer", "hasse.casaer@gmail.com", null)
	+ leiding("Pixie Neyens", "pixie.neyens@hotmail.com", null)
	+ leiding("Douwe Somers", "douwesomers@live.be", null)
	+ leiding("Senne Beunen", "senne.beunen@gmail.com", null)
	;

document.getElementById("kwikken").innerHTML =
	leiding("Esmée Devlieger", "esmeedevlieger@gmail.com", null)
	+ leiding("Mette Couvreur", "mette.couvreur@hotmail.com", null)
	+ leiding("Niels Malliet", "niels.malliet@gmail.com", null)
	;

document.getElementById("rakkers").innerHTML =
	leiding("Phil Huybens", "phil.huybens@outlook.com", null)
	+ leiding("Alizée Jacobs", "alizee.jacobs@hotmail.be", null)
	+ leiding("Gijs Puttemans", "gijs.puttemans20@gmail.com", null)
	;

document.getElementById("tippers").innerHTML =
	leiding("Elle Wouters", "ellewouters@gmail.com", null)
	+ leiding("Jur Melio", "jur.melio@hotmail.com", null)
	+ leiding("Daan Cornet", "cornet.daanbm@gmail.com", null)
	;

document.getElementById("toppers").innerHTML =
	leiding("Wannes Dirix", "wannes.dirix@gmail.com", null)
	+ leiding("Janne Boogaerts", "janneboogaerts@gmail.com", null)
	+ leiding("Elgar Suy", "elgarsvb@gmail.com", null)
	;

document.getElementById("tiptiens").innerHTML =
	leiding("Pauline Poplemont", "paulinepoplemont@live.be", null)
	+ leiding("Heleen Stessens", "heleen.stessens@gmail.com", null)
	+ leiding("Romee Coelst", "romeecoelst@hotmail.com", null)
	;

document.getElementById("kerels").innerHTML =
	leiding("Dries Pollers", "dpollers@gmail.com", null)
	+ leiding("Robbe Resseler", "robberesseler@hotmail.com", null)
	;

document.getElementById("aspimeisjes").innerHTML =
	leiding("Luca Jacobs", "lucajacobs73@gmail.com", null)
	+ leiding("Tine Vandenberghe", "tinevandenberghe0@gmail.com", null)
	+ leiding("Kirsten Capoen", "kirsten.capoen@telenet.be", null)
	;

document.getElementById("aspijongens").innerHTML =
	leiding("Xander De Kay", "Xander.dekay@gmail.com", null)
	+ leiding("Felix Soers", "felixsoers@gmail.com", null)
	+ leiding("Chiel Habils", "chiel.habils@hotmail.com", null)
	;

