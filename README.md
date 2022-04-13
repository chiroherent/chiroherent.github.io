# chiroherent.be

## To-do
- Cleanup van sommige pagina's zodat de CSS zo generic mogelijk kan gebruikt worden
  - Zorgen dat de website beter werkt op smartphones
  - Het menu fixen, want janky
  - Uiteindelijk zou alle html mooi en hetzelfde opgemaakt moeten zijn, en dan de css opnieuw overzichtelijk opmaken met telefoons als primaire gedachte en dan computers secundair, dus @media voor desktop.
- Eventueel zorgen dat de lijst met leiding met een spreadsheet kan aangepast worden en als dat werkt misschien ook de andere pagina's?
- Hogere kwaliteit foto's erop zetten en misschien een nieuw logo
- Nieuwe figuur met alle groepen + hun leeftijden maken
- probably nog dingen die ik vergeten ben



## Hoe pas ik de website aan?
### Een gids voor arme Chiro Herent leiding die deze taak hebben gekregen.
#### (Momenteel is deze gids niet af en ook niet juist, woeps, ik heb het geschreven zoals het zou moeten worden in de toekomst)
1. Pas de lijst met leiding elk jaar aan.
2. Werk zo generic mogelijk:
	- Zorg dat alle pagina's zo dynamisch mogelijk zijn voor verschillende groottes van scherm.
	- Zorg dat de bestanden duidelijk blijven voor mensen die na jou de website moeten aanpassen.
	- Tekst gaat tussen de <main> tags. Daar gebruik je voornamelijk \<h3>, \<p> en \<img> voor resp. titels, tekst en afbeeldingen.
	- Pas de opmaak liefst aan in de CSS file ipv bij de html.
	- Geef liever een class dan een id aan een html object, want van een id kan je maar 1 per document hebben. Soms is een class geen optie en dan is een id wel mogelijk. Geef die class dan ook een naam die duidelijk is.
	- Zorg dat de CSS zoveel mogelijk herbruikbaar is in gelijkaardige situaties.
	- Als je weet dat je iets maar 1 keer (tijdelijk) nodig gaat hebben kan je het wel als style="" toevoegen in de html. 
	- Er is een template om nieuwe pagina's mee te maken
	- Gebruik var(--kleurnaam) om een vaak gebruikte (chiro)kleur in de css te gebruiken. De lijst met die kleuren staat bovenaan in style.css. Je kan in die lijst ook makkelijk de primaire en secundaire kleur aanpassen.
3. Design in de eerste plaats voor telefoons en verander de dingen voor desktop daarna met een @media query. (momenteel is het dus omgekeerd, maar dat moet nog gefixt)
4. Javascript voeg je onderaan in de body toe, tenzij je het vaker nodig hebt, dan moet het in een apart bestand.
5. Zorg dat je ook met de tab knop door de pagina kan navigeren, en probeer zoveel mogelijk rekening te houden met screen readers en zo.
6. Geef bestandsnamen (html, css, javascript, foto's...) liefst geen hoofdletters.
7. Nog dingen die ik waarschijnlijk vergeten ben.
