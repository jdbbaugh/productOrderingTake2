(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.buildNav();

_productList.default.productify();

},{"./nav":2,"./productList":4}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const productData = {
  getProductInfo() {
    return fetch("http://localhost:8088/product").then(response => response.json());
  }

};
var _default = productData;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productData = _interopRequireDefault(require("./productData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productList = {
  productify() {
    _productData.default.getProductInfo().then(productObj => {
      let productDocFragment = document.createDocumentFragment();
      productObj.forEach(productBits => {
        let productHTML = product.productBuilder(productBits);
        productDocFragment.appendChild(productHTML);
      });
      let outputArticle = document.querySelector(".output");
      outputArticle.appendChild(productDocFragment);
    });
  }

};
var _default = productList;
exports.default = _default;

},{"./productData":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUVBLGFBQUksUUFBSjs7QUFDQSxxQkFBWSxVQUFaOzs7Ozs7Ozs7QUNKQSxNQUFNLEdBQUcsR0FBRztBQUNWLEVBQUEsUUFBUSxHQUFJO0FBQ1YsVUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFDQSxVQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsSUFBQSxNQUFNLENBQUMsWUFBUCxDQUFvQixJQUFwQixFQUEwQixrQkFBMUI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLE1BQXpCO0FBQ0EsUUFBSSxXQUFXLEdBQUcsQ0FBQyxZQUFELEVBQWUsUUFBZixFQUF5QixPQUF6QixFQUFrQyxFQUFsQyxFQUFzQyxRQUF0QyxDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLE9BQVosQ0FBb0IsZ0JBQWdCLElBQUk7QUFDdEMsWUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBaEI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxXQUFSLEdBQXNCLGdCQUF0QjtBQUNBLE1BQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsT0FBckIsRUFBK0IsT0FBTSxnQkFBaUIsRUFBdEQ7QUFDQSxNQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLE9BQW5CO0FBQ0QsS0FMRDtBQU9EOztBQWRTLENBQVo7ZUFnQmUsRzs7Ozs7Ozs7OztBQ2hCZixNQUFNLFdBQVcsR0FBRztBQUNsQixFQUFBLGNBQWMsR0FBRztBQUNmLFdBQU8sS0FBSyxDQUFDLCtCQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVEOztBQUppQixDQUFwQjtlQU9lLFc7Ozs7Ozs7Ozs7O0FDUGY7Ozs7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNsQixFQUFBLFVBQVUsR0FBSTtBQUNaLHlCQUFZLGNBQVosR0FDQyxJQURELENBQ00sVUFBVSxJQUFJO0FBQ2xCLFVBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXpCO0FBRUEsTUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixXQUFXLElBQUk7QUFDaEMsWUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQVIsQ0FBdUIsV0FBdkIsQ0FBbEI7QUFDQSxRQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLFdBQS9CO0FBQ0QsT0FIRDtBQUlBLFVBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsTUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixrQkFBMUI7QUFDRCxLQVZEO0FBV0Q7O0FBYmlCLENBQXBCO2VBZWUsVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5uYXYuYnVpbGROYXYoKTtcbnByb2R1Y3RMaXN0LnByb2R1Y3RpZnkoKTsiLCJjb25zdCBuYXYgPSB7XG4gIGJ1aWxkTmF2ICgpIHtcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmJhci1jb250YWluZXJcIik7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgbGV0IG5hdkNvbnRlbnRzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIk9yZGVyc1wiLCBcIkJldHN5XCIsIFwiXCIsIFwiTG9nT3V0XCJdO1xuICAgIG5hdkNvbnRlbnRzLmZvckVhY2gobmF2QmFyQ2F0ZWdvcmllcyA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gbmF2QmFyQ2F0ZWdvcmllc1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgbmF2LSR7bmF2QmFyQ2F0ZWdvcmllc31gKVxuICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pXG5cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmF2IiwiY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gIGdldFByb2R1Y3RJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0XCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdERhdGEiLCJpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4vcHJvZHVjdERhdGFcIlxuXG5jb25zdCBwcm9kdWN0TGlzdCA9IHtcbiAgcHJvZHVjdGlmeSAoKSB7XG4gICAgcHJvZHVjdERhdGEuZ2V0UHJvZHVjdEluZm8oKVxuICAgIC50aGVuKHByb2R1Y3RPYmogPT4ge1xuICAgICAgbGV0IHByb2R1Y3REb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgcHJvZHVjdE9iai5mb3JFYWNoKHByb2R1Y3RCaXRzID0+IHtcbiAgICAgICAgbGV0IHByb2R1Y3RIVE1MID0gcHJvZHVjdC5wcm9kdWN0QnVpbGRlcihwcm9kdWN0Qml0cyk7XG4gICAgICAgIHByb2R1Y3REb2NGcmFnbWVudC5hcHBlbmRDaGlsZChwcm9kdWN0SFRNTCk7XG4gICAgICB9KVxuICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICAgIG91dHB1dEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdERvY0ZyYWdtZW50KTtcbiAgICB9KVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3QiXX0=
