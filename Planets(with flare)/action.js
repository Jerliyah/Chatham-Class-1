

/* =====================
        Variables
===================== */
var planet_name = document.getElementById("planet-name");
var planet = document.getElementById("planet");
var planet_name_input = document.getElementById("planet-name-input");
var btn = document.getElementById("btn");

var fonts = ['Audiowide', 'Poiret One', 'Kaushan Script', 'Righteous', 'Lobster Two', 'Exo', 'VT323', 'Spirax', 'Macondo'];

var planet_counter = 1;
var font_counter = 0;




/* =====================
        Functions
===================== */


// Assign custom planet
btn.onclick = function() {

    // Change viewed planet name
    planet_name.innerText = "Planet " + planet_name_input.value;
    console.log("\n" + planet_name.innerText);

    // Change font of planet name
    planet_name.style.fontFamily = fonts[font_counter];
    console.log("font: " + fonts[font_counter]);

    // Create url for the current image
    var image_url = `images/p${planet_counter}.jpg`;

    // Changes planet skin
    planet.setAttribute('src', image_url);
    console.log(image_url)

    // Clears input in preparation for next input
    planet_name_input.value = "";

    // Ensures that there is never an empty planet skin
    if (planet_counter >= 20) {
        planet_counter = 0;
    }

    // Ensures that there is always a new font
    if (font_counter >= fonts.length - 1) {
        font_counter = 0;
    }

    // Update the counter for the next round
    planet_counter += 1;
    font_counter += 1;
}
