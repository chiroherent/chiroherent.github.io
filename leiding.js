function nieuweLeiding(naam, email, telefoon) {
	if (telefoon != null) {
		return '<dt><strong>'+naam+'</strong></dt><dd><a href="mailto:'+email+'">'+email+'</a></dd><dd>'+telefoon+'</dd>';
  } else {
	  return '<dt><strong>'+naam+'</strong></dt><dd><a href="mailto:'+email+'">'+email+'</a></dd>';
  }	
}



document.getElementById("leiding").innerHTML = nieuweLeiding();
