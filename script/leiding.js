/* Van dit deel moet je afblijven tenzij je weet wat je aan het doen bent */

/* load JSON file*/
fetch('./script/leiding.json')
  .then((response) => response.json())
  .then((leidingJSON) => setpagecontent(leidingJSON));
console.log("loaded leiding.js")


/* put JSON content on page */
function setpagecontent(leidingJSON) {
const leiding = leidingJSON.leiding;

var x, name, email, phone;
for (let group in leiding) {
	x = ''
	for (let person in leiding[group]) {
		name = leiding[group][person]['name']
		email = leiding[group][person]['email']
		phone = leiding[group][person]['phone']

		if (name != null) {
			x += '<dt><strong>' + name + '</strong></dt>';
		} if (email != null) {
			x += '<dd><a href="mailto:' + email + '">' + email + '</a></dd>';
		} if (phone != null) {
			x += '<dd>' + phone + '</dd>';
		}
	}
	document.getElementById(group).innerHTML = x
}
}


