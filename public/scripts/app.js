"use strict";

//Create app object title/subtitle
//use title/subtyitle in the template
//render the template
var template = React.createElement("div", null, React.createElement("h1", null, "Sa\xFAl Ca\xF1edo Castillo"), React.createElement("p", null, "This is some info"), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two")));
var user = {
  name: "Saúl Cañedo Castillo",
  age: 21,
  location: 'Mexicali'
};
var app = {
  Title: "Eternal Sunshine",
  SubTitle: "Jim Carrey"
};
var userName = 'Saúl Cañedo Castillo';
var userAge = 21;
var userLocation = 'Mexico';
var templateTwo = React.createElement("div", null, React.createElement("h1", null, user.name), React.createElement("p", null, "Age: ", user.age), React.createElement("p", null, "Location: ", user.location));

var getLocation = function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'unknown';
  }
};

var templateThree = React.createElement("div", null, React.createElement("h1", null, app.Title), React.createElement("h2", null, app.SubTitle)); // create my own template
// create a new Template var jsx expression
// root element
// h1 => Saul Canedo Castillo
// p => add Age: 21
// p => Location: Mexicali
// Render template Two insted of template

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
