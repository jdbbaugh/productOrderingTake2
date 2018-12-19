(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.buildNav();

_productList.default.productify();

},{"./nav":2,"./productList":5}],2:[function(require,module,exports){
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

var _productList = _interopRequireDefault(require("./productList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const product = {
  productBuilder(productObj) {
    console.log(productObj);
    let productArticle = document.createElement("article");
    productArticle.setAttribute("id", `product-${productObj.id}`);
    let productImage = document.createElement("img");
    productImage.setAttribute("src", productObj.image);
    productImage.setAttribute("class", "image");
    let productTitle = document.createElement("h3");
    productTitle.textContent = productObj.title;
    let productDescription = document.createElement("p");
    productDescription.textContent = productObj.description;
    let productPrice = document.createElement("p");
    productPrice.textContent = `Price: ${productObj.price}`;
    let productQuantity = document.createElement("p");
    productQuantity.textContent = `Available: ${productObj.quantity}`;
    productArticle.appendChild(productImage);
    productArticle.appendChild(productTitle);
    productArticle.appendChild(productPrice);
    productArticle.appendChild(productQuantity);
    productArticle.appendChild(productDescription);
    return productArticle;
  }

};
var _default = product;
exports.default = _default;

},{"./productList":5}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _productData = _interopRequireDefault(require("./productData"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productList = {
  productify() {
    _productData.default.getProductInfo().then(productObj => {
      let productDocFragment = document.createDocumentFragment();
      productObj.forEach(productBits => {
        let productHTML = _product.default.productBuilder(productBits);

        productDocFragment.appendChild(productHTML);
      });
      let outputArticle = document.querySelector(".output");
      outputArticle.appendChild(productDocFragment);
    });
  }

};
var _default = productList;
exports.default = _default;

},{"./product":3,"./productData":4}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUVBLGFBQUksUUFBSjs7QUFDQSxxQkFBWSxVQUFaOzs7Ozs7Ozs7QUNKQSxNQUFNLEdBQUcsR0FBRztBQUNWLEVBQUEsUUFBUSxHQUFJO0FBQ1YsVUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFDQSxVQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsSUFBQSxNQUFNLENBQUMsWUFBUCxDQUFvQixJQUFwQixFQUEwQixrQkFBMUI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLE1BQXpCO0FBQ0EsUUFBSSxXQUFXLEdBQUcsQ0FBQyxZQUFELEVBQWUsUUFBZixFQUF5QixPQUF6QixFQUFrQyxFQUFsQyxFQUFzQyxRQUF0QyxDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLE9BQVosQ0FBb0IsZ0JBQWdCLElBQUk7QUFDdEMsWUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBaEI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxXQUFSLEdBQXNCLGdCQUF0QjtBQUNBLE1BQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsT0FBckIsRUFBK0IsT0FBTSxnQkFBaUIsRUFBdEQ7QUFDQSxNQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLE9BQW5CO0FBQ0QsS0FMRDtBQU9EOztBQWRTLENBQVo7ZUFnQmUsRzs7Ozs7Ozs7Ozs7QUNoQmY7Ozs7QUFFQSxNQUFNLE9BQU8sR0FBRztBQUNkLEVBQUEsY0FBYyxDQUFFLFVBQUYsRUFBYztBQUMxQixJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBWjtBQUNBLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXJCO0FBQ0EsSUFBQSxjQUFjLENBQUMsWUFBZixDQUE0QixJQUE1QixFQUFtQyxXQUFVLFVBQVUsQ0FBQyxFQUFHLEVBQTNEO0FBRUEsUUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFDQSxJQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLEtBQTFCLEVBQWlDLFVBQVUsQ0FBQyxLQUE1QztBQUNBLElBQUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsT0FBbkM7QUFFQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsR0FBMkIsVUFBVSxDQUFDLEtBQXRDO0FBRUEsUUFBSSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUF6QjtBQUNBLElBQUEsa0JBQWtCLENBQUMsV0FBbkIsR0FBaUMsVUFBVSxDQUFDLFdBQTVDO0FBRUEsUUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbkI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLEdBQTRCLFVBQVMsVUFBVSxDQUFDLEtBQU0sRUFBdEQ7QUFFQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLEdBQStCLGNBQWEsVUFBVSxDQUFDLFFBQVMsRUFBaEU7QUFFQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFlBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixZQUEzQjtBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsWUFBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGVBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixrQkFBM0I7QUFHQSxXQUFPLGNBQVA7QUFDRDs7QUE5QmEsQ0FBaEI7ZUFpQ2UsTzs7Ozs7Ozs7OztBQ25DZixNQUFNLFdBQVcsR0FBRztBQUNsQixFQUFBLGNBQWMsR0FBRztBQUNmLFdBQU8sS0FBSyxDQUFDLCtCQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVEOztBQUppQixDQUFwQjtlQU9lLFc7Ozs7Ozs7Ozs7O0FDUGY7O0FBQ0E7Ozs7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNsQixFQUFBLFVBQVUsR0FBSTtBQUNaLHlCQUFZLGNBQVosR0FDQyxJQURELENBQ00sVUFBVSxJQUFJO0FBQ2xCLFVBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXpCO0FBRUEsTUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixXQUFXLElBQUk7QUFDaEMsWUFBSSxXQUFXLEdBQUcsaUJBQVEsY0FBUixDQUF1QixXQUF2QixDQUFsQjs7QUFDQSxRQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLFdBQS9CO0FBQ0QsT0FIRDtBQUlBLFVBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsTUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixrQkFBMUI7QUFDRCxLQVZEO0FBV0Q7O0FBYmlCLENBQXBCO2VBZWUsVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5uYXYuYnVpbGROYXYoKTtcbnByb2R1Y3RMaXN0LnByb2R1Y3RpZnkoKTsiLCJjb25zdCBuYXYgPSB7XG4gIGJ1aWxkTmF2ICgpIHtcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmJhci1jb250YWluZXJcIik7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgbGV0IG5hdkNvbnRlbnRzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIk9yZGVyc1wiLCBcIkJldHN5XCIsIFwiXCIsIFwiTG9nT3V0XCJdO1xuICAgIG5hdkNvbnRlbnRzLmZvckVhY2gobmF2QmFyQ2F0ZWdvcmllcyA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gbmF2QmFyQ2F0ZWdvcmllc1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgbmF2LSR7bmF2QmFyQ2F0ZWdvcmllc31gKVxuICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pXG5cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmF2IiwiaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3RMaXN0XCJcblxuY29uc3QgcHJvZHVjdCA9IHtcbiAgcHJvZHVjdEJ1aWxkZXIgKHByb2R1Y3RPYmopIHtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0T2JqKVxuICAgIGxldCBwcm9kdWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIHByb2R1Y3RBcnRpY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwcm9kdWN0LSR7cHJvZHVjdE9iai5pZH1gKVxuICAgIFxuICAgIGxldCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2R1Y3RJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJvZHVjdE9iai5pbWFnZSk7XG4gICAgcHJvZHVjdEltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1hZ2VcIik7XG5cbiAgICBsZXQgcHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2R1Y3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2R1Y3RPYmoudGl0bGU7XG5cbiAgICBsZXQgcHJvZHVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvZHVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvZHVjdE9iai5kZXNjcmlwdGlvbjtcblxuICAgIGxldCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBgUHJpY2U6ICR7cHJvZHVjdE9iai5wcmljZX1gO1xuXG4gICAgbGV0IHByb2R1Y3RRdWFudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2R1Y3RRdWFudGl0eS50ZXh0Q29udGVudCA9IGBBdmFpbGFibGU6ICR7cHJvZHVjdE9iai5xdWFudGl0eX1gO1xuXG4gICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdEltYWdlKTtcbiAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0VGl0bGUpO1xuICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZSk7XG4gICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdFF1YW50aXR5KTtcbiAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0RGVzY3JpcHRpb24pO1xuICAgIFxuXG4gICAgcmV0dXJuIHByb2R1Y3RBcnRpY2xlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3QiLCJjb25zdCBwcm9kdWN0RGF0YSA9IHtcbiAgZ2V0UHJvZHVjdEluZm8oKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Byb2R1Y3RcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0RGF0YSIsImltcG9ydCBwcm9kdWN0RGF0YSBmcm9tIFwiLi9wcm9kdWN0RGF0YVwiXG5pbXBvcnQgcHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0XCJcblxuY29uc3QgcHJvZHVjdExpc3QgPSB7XG4gIHByb2R1Y3RpZnkgKCkge1xuICAgIHByb2R1Y3REYXRhLmdldFByb2R1Y3RJbmZvKClcbiAgICAudGhlbihwcm9kdWN0T2JqID0+IHtcbiAgICAgIGxldCBwcm9kdWN0RG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgIHByb2R1Y3RPYmouZm9yRWFjaChwcm9kdWN0Qml0cyA9PiB7XG4gICAgICAgIGxldCBwcm9kdWN0SFRNTCA9IHByb2R1Y3QucHJvZHVjdEJ1aWxkZXIocHJvZHVjdEJpdHMpO1xuICAgICAgICBwcm9kdWN0RG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQocHJvZHVjdEhUTUwpO1xuICAgICAgfSlcbiAgICAgIGxldCBvdXRwdXRBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4gICAgICBvdXRwdXRBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3REb2NGcmFnbWVudCk7XG4gICAgfSlcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3RMaXN0Il19
