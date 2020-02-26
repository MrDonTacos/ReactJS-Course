"use strict";

//Create app object title/subtitle
//use title/subtyitle in the template
//render the template
var template = React.createElement("div", null, React.createElement("h1", null, "Sa\xFAl Ca\xF1edo Castillo"), React.createElement("p", null, "This is some info"), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two")));
var user = [{
  name: "Saúl Cañedo Castillo",
  age: 21,
  location: 'Mexicali'
}, {
  name: "Osvaldo Cañedo Castillo",
  age: 24,
  location: 'Mexicali'
}];
var app = {
  Title: "Eternal Sunshine",
  SubTitle: "Jim Carrey"
}; // var userName = 'Saúl Cañedo Castillo'
// var userAge = 21;
// var userLocation = 'Mexico'

var templateTwo = React.createElement("div", null, React.createElement("h1", null, user.name), React.createElement("p", null, "Age: ", user.age), React.createElement("p", null, "Location: ", user.location));

var getLocation = function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'unknown';
  }
};

var templateThree = user.map(function (element) {
  React.createElement("div", null, React.createElement("h1", null, element.name), React.createElement("h2", null, element.age), console.log(element.age));
});
var count = 0;

var addOne = function addOne() {
  count += 1;
  renderThings();
};

var minus = function minus() {
  count -= 1;
  renderThings();
};

var reset = function reset() {
  count = 0;
  renderThings();
};

var appRoot = document.getElementById('app');

var renderThings = function renderThings() {
  var templateFour = React.createElement("div", null, React.createElement("h1", null, "Count: ", count), React.createElement("button", {
    onClick: addOne
  }, "+1"), React.createElement("button", {
    onClick: minus
  }, "-1"), React.createElement("button", {
    onClick: reset
  }, "0"));
  ReactDOM.render(templateFour, appRoot);
};

renderThings(); // create my own template
// create a new Template var jsx expression
// root element
// h1 => Saul Canedo Castillo
// p => add Age: 21
// p => Location: Mexicali
// Render template Two insted of template

console.log(templateThree);
