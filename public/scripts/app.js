"use strict";

//Create app object title/subtitle
//use title/subtyitle in the template
//render the template
var appRoot = document.getElementById('app');
var app = {
  Title: "Indecision app",
  SubTitle: "Put something Here",
  Options: ["Saludos", "Mundo", "Segundo"]
};

var reset = function reset() {
  app.Options.pop();
  renderizado();
};

var makeADecision = function makeADecision() {
  var num = Math.floor(Math.random() * app.Options.length);
  var option = app.Options[num];
  alert(option);
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
  var template = React.createElement("div", null, React.createElement("h1", null, "Sa\xFAl Ca\xF1edo Castillo"), React.createElement("p", null, "This is some info"), React.createElement("p", null, app.Options.length), React.createElement("ol", null, app.Options.map(function (number, i) {
    return React.createElement("div", {
      key: i
    }, React.createElement("li", null, number));
  })), React.createElement("form", {
    onSubmit: onFormSubmit
  }, React.createElement("input", {
    type: "text",
    name: "option"
  }), React.createElement("button", null, "Add Option"), React.createElement("br", null), React.createElement("button", {
    onClick: reset
  }, "Reset Options"), React.createElement("br", null), React.createElement("button", {
    onClick: makeADecision
  }, "What do I choose?")));
  ReactDOM.render(template, appRoot);
};

renderizado();
