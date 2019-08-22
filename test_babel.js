"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 2;
console.log(a);

var App = function App() {
  _classCallCheck(this, App);

  this.name = this.name.bind(this);
};
