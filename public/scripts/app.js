"use strict";

//Create app object title/subtitle
//use title/subtyitle in the template
//render the template
var appRoot = document.getElementById('app');
var app = {
  Title: "Indecision app",
  SubTitle: "Put something Here",
  Options: ["Uno", "Dos"]
};

var reset = function reset() {
  app.Options.pop();
  renderizado();
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.option.value;
  console.log(option);

  if (option) {
    app.Options.push(option);
    e.target.elements.option.value = '';
    renderizado();
  }
};

var renderizado = function renderizado() {
  var template = React.createElement("div", null, React.createElement("h1", null, "Sa\xFAl Ca\xF1edo Castillo"), React.createElement("p", null, "This is some info"), React.createElement("p", null, app.Options.length), React.createElement("ol", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two")), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option"), React.createElement("br", null), React.createElement("button", {
    onClick: reset
  }, "Reset Options")));
  ReactDOM.render(template, appRoot);
};

renderizado();
