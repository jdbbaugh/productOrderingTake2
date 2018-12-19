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
    productTitle.setAttribute("class", "productTitle");
    let productDescription = document.createElement("p");
    productDescription.textContent = `Description: ${productObj.description}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7QUFDQTs7OztBQUVBLGFBQUksUUFBSjs7QUFDQSxxQkFBWSxVQUFaOzs7Ozs7Ozs7QUNKQSxNQUFNLEdBQUcsR0FBRztBQUNWLEVBQUEsUUFBUSxHQUFJO0FBQ1YsVUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBckI7QUFDQSxVQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsSUFBQSxNQUFNLENBQUMsWUFBUCxDQUFvQixJQUFwQixFQUEwQixrQkFBMUI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLENBQXlCLE1BQXpCO0FBQ0EsUUFBSSxXQUFXLEdBQUcsQ0FBQyxZQUFELEVBQWUsUUFBZixFQUF5QixPQUF6QixFQUFrQyxFQUFsQyxFQUFzQyxRQUF0QyxDQUFsQjtBQUNBLElBQUEsV0FBVyxDQUFDLE9BQVosQ0FBb0IsZ0JBQWdCLElBQUk7QUFDdEMsWUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBaEI7QUFDQSxNQUFBLE9BQU8sQ0FBQyxXQUFSLEdBQXNCLGdCQUF0QjtBQUNBLE1BQUEsT0FBTyxDQUFDLFlBQVIsQ0FBcUIsT0FBckIsRUFBK0IsT0FBTSxnQkFBaUIsRUFBdEQ7QUFDQSxNQUFBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLE9BQW5CO0FBQ0QsS0FMRDtBQU9EOztBQWRTLENBQVo7ZUFnQmUsRzs7Ozs7Ozs7Ozs7QUNoQmY7Ozs7QUFFQSxNQUFNLE9BQU8sR0FBRztBQUNkLEVBQUEsY0FBYyxDQUFFLFVBQUYsRUFBYztBQUMxQixJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBWjtBQUNBLFFBQUksY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXJCO0FBQ0EsSUFBQSxjQUFjLENBQUMsWUFBZixDQUE0QixJQUE1QixFQUFtQyxXQUFVLFVBQVUsQ0FBQyxFQUFHLEVBQTNEO0FBRUEsUUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbkI7QUFDQSxJQUFBLFlBQVksQ0FBQyxZQUFiLENBQTBCLEtBQTFCLEVBQWlDLFVBQVUsQ0FBQyxLQUE1QztBQUNBLElBQUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUMsT0FBbkM7QUFFQSxRQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsR0FBMkIsVUFBVSxDQUFDLEtBQXRDO0FBQ0EsSUFBQSxZQUFZLENBQUMsWUFBYixDQUEwQixPQUExQixFQUFtQyxjQUFuQztBQUVBLFFBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBekI7QUFDQSxJQUFBLGtCQUFrQixDQUFDLFdBQW5CLEdBQWtDLGdCQUFlLFVBQVUsQ0FBQyxXQUFZLEVBQXhFO0FBRUEsUUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbkI7QUFDQSxJQUFBLFlBQVksQ0FBQyxXQUFiLEdBQTRCLFVBQVMsVUFBVSxDQUFDLEtBQU0sRUFBdEQ7QUFFQSxRQUFJLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUF0QjtBQUNBLElBQUEsZUFBZSxDQUFDLFdBQWhCLEdBQStCLGNBQWEsVUFBVSxDQUFDLFFBQVMsRUFBaEU7QUFFQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLFlBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixZQUEzQjtBQUNBLElBQUEsY0FBYyxDQUFDLFdBQWYsQ0FBMkIsWUFBM0I7QUFDQSxJQUFBLGNBQWMsQ0FBQyxXQUFmLENBQTJCLGVBQTNCO0FBQ0EsSUFBQSxjQUFjLENBQUMsV0FBZixDQUEyQixrQkFBM0I7QUFHQSxXQUFPLGNBQVA7QUFDRDs7QUEvQmEsQ0FBaEI7ZUFrQ2UsTzs7Ozs7Ozs7OztBQ3BDZixNQUFNLFdBQVcsR0FBRztBQUNsQixFQUFBLGNBQWMsR0FBRztBQUNmLFdBQU8sS0FBSyxDQUFDLCtCQUFELENBQUwsQ0FDTixJQURNLENBQ0QsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFULEVBRFgsQ0FBUDtBQUVEOztBQUppQixDQUFwQjtlQU9lLFc7Ozs7Ozs7Ozs7O0FDUGY7O0FBQ0E7Ozs7QUFFQSxNQUFNLFdBQVcsR0FBRztBQUNsQixFQUFBLFVBQVUsR0FBSTtBQUNaLHlCQUFZLGNBQVosR0FDQyxJQURELENBQ00sVUFBVSxJQUFJO0FBQ2xCLFVBQUksa0JBQWtCLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQXpCO0FBRUEsTUFBQSxVQUFVLENBQUMsT0FBWCxDQUFtQixXQUFXLElBQUk7QUFDaEMsWUFBSSxXQUFXLEdBQUcsaUJBQVEsY0FBUixDQUF1QixXQUF2QixDQUFsQjs7QUFDQSxRQUFBLGtCQUFrQixDQUFDLFdBQW5CLENBQStCLFdBQS9CO0FBQ0QsT0FIRDtBQUlBLFVBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXBCO0FBQ0EsTUFBQSxhQUFhLENBQUMsV0FBZCxDQUEwQixrQkFBMUI7QUFDRCxLQVZEO0FBV0Q7O0FBYmlCLENBQXBCO2VBZWUsVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5uYXYuYnVpbGROYXYoKTtcbnByb2R1Y3RMaXN0LnByb2R1Y3RpZnkoKTsiLCJjb25zdCBuYXYgPSB7XG4gIGJ1aWxkTmF2ICgpIHtcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmJhci1jb250YWluZXJcIik7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgbGV0IG5hdkNvbnRlbnRzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIk9yZGVyc1wiLCBcIkJldHN5XCIsIFwiXCIsIFwiTG9nT3V0XCJdO1xuICAgIG5hdkNvbnRlbnRzLmZvckVhY2gobmF2QmFyQ2F0ZWdvcmllcyA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gbmF2QmFyQ2F0ZWdvcmllc1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgbmF2LSR7bmF2QmFyQ2F0ZWdvcmllc31gKVxuICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pXG5cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmF2IiwiaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3RMaXN0XCJcblxuY29uc3QgcHJvZHVjdCA9IHtcbiAgcHJvZHVjdEJ1aWxkZXIgKHByb2R1Y3RPYmopIHtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0T2JqKVxuICAgIGxldCBwcm9kdWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIHByb2R1Y3RBcnRpY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwcm9kdWN0LSR7cHJvZHVjdE9iai5pZH1gKVxuICAgIFxuICAgIGxldCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2R1Y3RJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJvZHVjdE9iai5pbWFnZSk7XG4gICAgcHJvZHVjdEltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1hZ2VcIik7XG5cbiAgICBsZXQgcHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2R1Y3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2R1Y3RPYmoudGl0bGU7XG4gICAgcHJvZHVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdFRpdGxlXCIpO1xuXG4gICAgbGV0IHByb2R1Y3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2R1Y3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtwcm9kdWN0T2JqLmRlc2NyaXB0aW9ufWA7XG5cbiAgICBsZXQgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gYFByaWNlOiAke3Byb2R1Y3RPYmoucHJpY2V9YDtcblxuICAgIGxldCBwcm9kdWN0UXVhbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9kdWN0UXVhbnRpdHkudGV4dENvbnRlbnQgPSBgQXZhaWxhYmxlOiAke3Byb2R1Y3RPYmoucXVhbnRpdHl9YDtcblxuICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XG4gICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdFRpdGxlKTtcbiAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0UHJpY2UpO1xuICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RRdWFudGl0eSk7XG4gICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdERlc2NyaXB0aW9uKTtcbiAgICBcblxuICAgIHJldHVybiBwcm9kdWN0QXJ0aWNsZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0IiwiY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gIGdldFByb2R1Y3RJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0XCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdERhdGEiLCJpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4vcHJvZHVjdERhdGFcIlxuaW1wb3J0IHByb2R1Y3QgZnJvbSBcIi4vcHJvZHVjdFwiXG5cbmNvbnN0IHByb2R1Y3RMaXN0ID0ge1xuICBwcm9kdWN0aWZ5ICgpIHtcbiAgICBwcm9kdWN0RGF0YS5nZXRQcm9kdWN0SW5mbygpXG4gICAgLnRoZW4ocHJvZHVjdE9iaiA9PiB7XG4gICAgICBsZXQgcHJvZHVjdERvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICBwcm9kdWN0T2JqLmZvckVhY2gocHJvZHVjdEJpdHMgPT4ge1xuICAgICAgICBsZXQgcHJvZHVjdEhUTUwgPSBwcm9kdWN0LnByb2R1Y3RCdWlsZGVyKHByb2R1Y3RCaXRzKTtcbiAgICAgICAgcHJvZHVjdERvY0ZyYWdtZW50LmFwcGVuZENoaWxkKHByb2R1Y3RIVE1MKTtcbiAgICAgIH0pXG4gICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpO1xuICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0RG9jRnJhZ21lbnQpO1xuICAgIH0pXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdCJdfQ==
