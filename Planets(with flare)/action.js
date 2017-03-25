

/* =====================
        Variables
===================== */
var planet_name = document.getElementById("planet-name");
var planet = document.getElementById("planet");
var planet_name_input = document.getElementById("planet-name-input");
var btn = document.getElementById("btn");

var counter = 1;




/* =====================
        Functions
===================== */


// Assign custom planet
btn.onclick = function() {

    // Change viewed planet name
    planet_name.innerText = "Planet " + planet_name_input.value;
    console.log(planet_name.innerText);

    // Create url for the current image 
    var image_url = `images/p${counter}.jpg`;

    // Changes planet skin
    planet.setAttribute('src', image_url);
    console.log(image_url)

    // Clears input in preparation for next input
    planet_name_input.value = "";

    // Ensures that there is never an empty planet skin
    if (counter >= 10) {
        counter = 0;
    }
    counter += 1;
}


