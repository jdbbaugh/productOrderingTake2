(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.buildNav();

},{"./nav":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const nav = {
  buildNav() {
    const navContainer = document.querySelector(".output");
    const navBar = document.createElement("nav");
    navBar.setAttribute("id", "navbar-container");
    navContainer.appendChild(navBar);
    let navContents = ["Categories", "Orders", "Betsy", "", "LogOut"];
    navContents.forEach(navBarCategories => {
      const element = document.createElement("p");
      element.textContent = navBarCategories;
      element.setAttribute("class", `nav-${navBarCategories}`);
      navBar.appendChild(element);
    });
  }

};
var _default = nav;
exports.default = _default;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFFQSxhQUFJLFFBQUo7Ozs7Ozs7OztBQ0ZBLE1BQU0sR0FBRyxHQUFHO0FBQ1YsRUFBQSxRQUFRLEdBQUk7QUFDVixVQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFyQjtBQUNBLFVBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxJQUFBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLElBQXBCLEVBQTBCLGtCQUExQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsTUFBekI7QUFDQSxRQUFJLFdBQVcsR0FBRyxDQUFDLFlBQUQsRUFBZSxRQUFmLEVBQXlCLE9BQXpCLEVBQWtDLEVBQWxDLEVBQXNDLFFBQXRDLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixnQkFBZ0IsSUFBSTtBQUN0QyxZQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFoQjtBQUNBLE1BQUEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsZ0JBQXRCO0FBQ0EsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixPQUFyQixFQUErQixPQUFNLGdCQUFpQixFQUF0RDtBQUNBLE1BQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsT0FBbkI7QUFDRCxLQUxEO0FBT0Q7O0FBZFMsQ0FBWjtlQWdCZSxHIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIjtcblxubmF2LmJ1aWxkTmF2KCk7IiwiY29uc3QgbmF2ID0ge1xuICBidWlsZE5hdiAoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBuYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZiYXItY29udGFpbmVyXCIpO1xuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgIGxldCBuYXZDb250ZW50cyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJPcmRlcnNcIiwgXCJCZXRzeVwiLCBcIlwiLCBcIkxvZ091dFwiXTtcbiAgICBuYXZDb250ZW50cy5mb3JFYWNoKG5hdkJhckNhdGVnb3JpZXMgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG5hdkJhckNhdGVnb3JpZXNcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYG5hdi0ke25hdkJhckNhdGVnb3JpZXN9YClcbiAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KVxuXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5hdiJdfQ==
