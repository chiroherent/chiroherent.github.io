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