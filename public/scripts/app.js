"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var num = 0;
var option = ['Option one', 'Option two', 'Option Three'];
var obj = {
  name: 'Osvaldo',
  getName: function getName() {
    return this.name;
  }
};
var getName = obj.getName.bind(obj);
console.log(getName());

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return React.createElement("div", null, React.createElement("h1", null, "Title: ", props.title), React.createElement("h2", null, "Subtitle: ", props.subtitle));
    }
  }]);

  return Header;
}(React.Component);

var renderizar = function renderizar() {
  var IndecisionApp =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(IndecisionApp, _React$Component2);

    function IndecisionApp() {
      _classCallCheck(this, IndecisionApp);

      return _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).apply(this, arguments));
    }

    _createClass(IndecisionApp, [{
      key: "render",
      value: function render() {
        return React.createElement("div", null, React.createElement(Header, {
          title: num,
          subtitle: num - 1
        }), React.createElement(Option, null), React.createElement("br", null), React.createElement(Action, null), React.createElement("br", null), React.createElement(AddOption, null), React.createElement("br", null), React.createElement(Sumar, null));
      }
    }]);

    return IndecisionApp;
  }(React.Component);

  ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
};

var Action =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, _getPrototypeOf(Action).apply(this, arguments));
  }

  _createClass(Action, [{
    key: "adivinar",
    value: function adivinar() {
      var alerta = Math.floor(Math.random() * option.length);
      var mensaje = option[alerta];
      alert(mensaje);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.adivinar
      }, "What should I Do"));
    }
  }]);

  return Action;
}(React.Component);

var AddOption =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(AddOption, _React$Component4);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, _getPrototypeOf(AddOption).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: "createOption",
    value: function createOption(e) {
      e.preventDefault();
      var er = e.target.elements.option.value.trim;
      if (er == '') option.push(er);
      e.target.elements.option.er = '';
      renderizar();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        onSubmit: this.createOption
      }, React.createElement("input", {
        type: "text",
        name: "option"
      }), React.createElement("button", null, "Add Option"));
    }
  }]);

  return AddOption;
}(React.Component);

var Option =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Option component here:", React.createElement(Options, {
        options: option
      }));
    }
  }]);

  return Option;
}(React.Component);

var Options =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(Options, _React$Component6);

  function Options(props) {
    var _this;

    _classCallCheck(this, Options);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Options).call(this, props));
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Options, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      // alert('Are you shure you want to eliminate all?')
      console.log(this.props.options);
    }
  }, {
    key: "eliminate",
    value: function eliminate() {
      option = [];
      renderizar();
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("button", {
        onClick: this.handleRemoveAll.bind(this)
      }, "Remove all"), React.createElement("ol", null, this.props.options.map(function (texto, i) {
        return React.createElement("li", {
          key: i
        }, texto);
      })));
    }
  }]);

  return Options;
}(React.Component);

var sumar = function sumar() {
  num++;
  renderizar();
};

var Sumar =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(Sumar, _React$Component7);

  function Sumar() {
    _classCallCheck(this, Sumar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sumar).apply(this, arguments));
  }

  _createClass(Sumar, [{
    key: "render",
    value: function render() {
      return React.createElement("button", {
        onClick: sumar
      }, "Sumar");
    }
  }]);

  return Sumar;
}(React.Component);

renderizar(); //React.Component really important
