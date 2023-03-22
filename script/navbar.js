/* Van dit deel vanboven moet je afblijven tenzij je weet wat je aan het doen bent */

/* change url to index.html when starting to make 'huidig' id work in setnavbarcontent() */
if (window.location.pathname.split("/").pop() == '') {
  window.history.replaceState(null,"Page", "/index");
}

/* load JSON file */
fetch('./script/navbar.json')
  .then((response) => response.json())
  .then((navbarJSON) => setnavbarcontent(navbarJSON));
console.log("loaded navbar.js") 


/* loads the content for the navbar from JSON */
function setnavbarcontent(navbarJSON) {
  const navbar = navbarJSON.navbar;
  
  let y = '', title, filename;
    for (let page in navbar) {
      title = navbar[page]['title'];
      filename = navbar[page]['filename'];

      if (window.location.pathname.split("/").pop() == filename || window.location.pathname.split("/").pop() == filename.split(".").shift()) {
        y += '<li class="huidig">' + title + '</li>';
      }
      else {
        y += '<li><a href="' + filename + '">' + title + '</a></li>';
      }
    }
    document.getElementById("navbar").innerHTML = "<ul>" + y + "</ul>"
  }


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu icon */
function hamburgerMenu() {
  let x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = null;
  } else {
    x.style.display = "block";
  }
}


/*
<nav id="navbar">
<img class="hamburger" src="hamburger.png" onclick="hamburgerMenu()"/>
<script src="navbar.js"></script>
*/
