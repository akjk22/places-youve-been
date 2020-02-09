function Places() {
    this.arrayVisited = [];
    this.currentId = 0;
  }

  function Destinations(location, landmarks, timeOfYears, notes) {
    this.location = location;
    this.landmark = landmarks;
    this.timeOfYear = timeOfYears;
    this.notes = notes;
  }

  Places.prototype.addDestination = function(destination) {
    destination.currentId = this.destinationId();
  this.arrayVisited.push(destination);
  }



  Places.prototype.destinationId = function() {
    this.currentId += 1;
    return this.currentId;
  }

  var places = new Places ();

  var destination1 = new Destinations("New York", "Statue of Liberty", "Spring", "City was a toilet");
  var destination2 = new Destinations("Florida", "Disney World", "Summer", "Beaches were beautiful");
  var destination3 = new Destinations("Las Vegas", "Casinos", "Winter", "Too crowded");

places.addDestination(destination1);
places.addDestination(destination2);
places.addDestination(destination3);

//console.log(places.arrayVisited);



Places.prototype.findPlace = function(id) {
    for (var i=0; i< this.arrayVisited.length; i++) {
      if (this.arrayVisited[i]) {     // <-- This line is new!
    //   console.log("current value is " + this.arrayVisited[i].id);
        if (this.arrayVisited[i].currentId == id) {  
          return this.arrayVisited[i];
        }
      }                          // <-- This line is also new!
    };
    return false;
  }


  Places.prototype.findPlaceByCity = function(location) {
    var details = [];
    for (var i=0; i< this.arrayVisited.length; i++) {   
        if (this.arrayVisited[i].location === location) {  
            details.push(this.arrayVisited[i].landmark);
            details.push(this.arrayVisited[i].timeOfYear);
            details.push(this.arrayVisited[i].notes);   
            return details;
        }
    };
    return false;
  }



  console.log(places.findPlace(1));

  console.log(places.currentId);


  Places.prototype.findLocation = function() {
    var locationOnly = [];
    for (var i=0; i< this.arrayVisited.length; i++) {                  
          //console.log(this.arrayVisited[i].location);          
          locationOnly.push(this.arrayVisited[i].location);
          //return this.arrayVisited[i].location;
    };
    return locationOnly;
  }


  //console.log(places.findLocation());

// Everything below this line is the user interface (or front-end) logic:
$(document).ready(function () {
    $('#formOne').submit(function () {
      var city = $("input:radio[name=city]:checked").val();
      
     //console.log(`city chosen is ${city}`)
      event.preventDefault();
 var details2 =[];
       details2 = places.findPlaceByCity(city);
       


    });
});