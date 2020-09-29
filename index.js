var world = document.getElementById('world');

var scale = 3;
var entries = cities.features;

// Checkbox
var check = document.getElementById('mapCheck');
var map = document.getElementById('map');
map.classList.add('nomap');

// Event: Checkbox changes
  /* To do: 
    Use an event handler on the checkbox 'check'.
    The map should be displayed when the the checkbox is checked and hidden when the checkbox is unchecked.
    Hints:
    - You can use the classList property and the class 'nomap'.The idea is to add or remove the class to/from the map
    when the checkbox is checked or not. If the class is added to the map, the map won't be displayed.
    You can either work with the classList methods 'add' and 'remove' or 'toggle'.
    */

/* start answer */
function showMap(){
    var checkBox = document.getElementById("mapCheck");
  if (checkBox.checked == true){
  map.classList.remove('nomap');
  map.classList.add('map');
  } else{
  map.classList.add('nomap');
  }
}
/* end answer */


for (var i = 0; i < entries.length; ++i) {
  // Extract names and coordinates from the JavaScript Object
  var entry = entries[i];
  var coords = entry.geometry.coordinates;
  var lon = coords[0];
  var lat = coords[1];
  var x = scale * (180 + lon);
  var y = scale * (90 - lat);
  var name = entry.properties.Location;


  // Create a new HTML element for the cities
  var city = document.createElement('span');
  // Set positions for the symbols
  city.style.cssText = 'left:' + (x - 2) + 'px;top:' + (y - 2) + 'px';
  // Set a class for CSS
  city.setAttribute('class', 'city');
  // Get city's name as Tooltip
  city.setAttribute('title', name);

  // Add cities to the world div
  world.appendChild(city); 


  // Event: Mouse pointer enters a city
  /* 
    To do: 
    use an event handler to execute a function when the mouse pointer enters a city.
    The function should 
    - change the city's background color to 'black'
    - get the info DOM element and write the city's name to it. 

    Hints: 
    - You can create a new class for the new style and use the classList property 
    - You can get the city's name with the getAttribute property and the title attribrute like this:
    // this.getAttribute('title')  //
    You can use the textContent property to write the name to the info DOM element 
    */

  /* start answer */

  	city.addEventListener("mouseenter", function() {
    this.classList.remove('city');
    this.classList.add('citySelect')
    document.getElementById("info").innerHTML = this.getAttribute('title')
  });    
  /* end answer */




  // Event: Mouse pointer leaves a city    
  /* To do: 
    use an event handler to execute a function when the mouse pointer leaves a city.
    The function should 
    - change the city's background color back to the original style
    - get the info DOM element and wite an empty string to it to remove the city's name. 

    Hint: To change the backgroud color back, you can remove the class you created before from the city
		*/

  /* start answer */
    city.addEventListener("mouseleave", function() {
    this.classList.add('city');
    this.classList.remove('citySelect')
    document.getElementById("info").innerHTML = "Cidades";
  });

  /* end answer */

}	