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

var _reviewList = _interopRequireDefault(require("./reviewList"));

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

    _reviewList.default.reviewify(productObj.id);

    return productArticle;
  }

};
var _default = product;
exports.default = _default;

},{"./productList":5,"./reviewList":8}],4:[function(require,module,exports){
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

},{"./product":3,"./productData":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewList = _interopRequireDefault(require("./reviewList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const review = {
  reviewBuilder(reviewObj) {
    // console.log(reviewObj);
    const reviewElement = document.createElement("p");
    reviewElement.setAttribute("class", "product-review");
    reviewElement.textContent = reviewObj.review;
    return reviewElement;
  }

};
var _default = review;
exports.default = _default;

},{"./reviewList":8}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const reviewData = {
  getReviewData() {
    return fetch("http://localhost:8088/review").then(response => response.json());
  }

};
var _default = reviewData;
exports.default = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reviewData = _interopRequireDefault(require("./reviewData"));

var _review = _interopRequireDefault(require("./review"));

var _product = _interopRequireDefault(require("./product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const reviewList = {
  reviewify(productIdentifierFromProduct) {
    console.log(productIdentifierFromProduct);

    _reviewData.default.getReviewData().then(reviewObj => {
      let reviewDocFragment = document.createDocumentFragment();
      reviewObj.forEach(sendReviews => {
        console.log(sendReviews.productId);

        if (productIdentifierFromProduct === sendReviews.productId) {
          let reviewHTML = _review.default.reviewBuilder(sendReviews);

          reviewDocFragment.appendChild(reviewHTML);
        }
      });
      const parentConatiner = document.querySelector(".output");
      const reviewContainer = document.createElement("article");
      reviewContainer.textContent = "REVIEWS";
      reviewContainer.setAttribute("id", "review-container");
      reviewContainer.appendChild(reviewDocFragment);
      parentConatiner.appendChild(reviewContainer);
      return reviewContainer;
    });
  }

};
var _default = reviewList;
exports.default = _default;

},{"./product":3,"./review":6,"./reviewData":7}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXcuanMiLCIuLi9zY3JpcHRzL3Jldmlld0RhdGEuanMiLCIuLi9zY3JpcHRzL3Jldmlld0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBR0EsYUFBSSxRQUFKOztBQUNBLHFCQUFZLFVBQVo7Ozs7Ozs7OztBQ0xBLE1BQU0sR0FBRyxHQUFHO0FBQ1YsRUFBQSxRQUFRLEdBQUk7QUFDVixVQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFyQjtBQUNBLFVBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxJQUFBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLElBQXBCLEVBQTBCLGtCQUExQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsTUFBekI7QUFDQSxRQUFJLFdBQVcsR0FBRyxDQUFDLFlBQUQsRUFBZSxRQUFmLEVBQXlCLE9BQXpCLEVBQWtDLEVBQWxDLEVBQXNDLFFBQXRDLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixnQkFBZ0IsSUFBSTtBQUN0QyxZQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFoQjtBQUNBLE1BQUEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsZ0JBQXRCO0FBQ0EsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixPQUFyQixFQUErQixPQUFNLGdCQUFpQixFQUF0RDtBQUNBLE1BQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsT0FBbkI7QUFDRCxL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QUFULENBQXVCLFNBQXZCLENBQXhCO0FBQ0EsTUFBQSxlQUFlLENBQUMsV0FBaEIsR0FBOEIsU0FBOUI7QUFDQSxNQUFBLGVBQWUsQ0FBQyxZQUFoQixDQUE2QixJQUE3QixFQUFtQyxrQkFBbkM7QUFDQSxNQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixpQkFBNUI7QUFDQSxNQUFBLGVBQWUsQ0FBQyxXQUFoQixDQUE0QixlQUE1QjtBQUVBLGFBQU8sZUFBUDtBQUNELEtBbkJEO0FBb0JEOztBQXZCZ0IsQ0FBbkI7ZUEwQmUsVSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCI7XG5pbXBvcnQgcHJvZHVjdExpc3QgZnJvbSBcIi4vcHJvZHVjdExpc3RcIlxuXG5cbm5hdi5idWlsZE5hdigpO1xucHJvZHVjdExpc3QucHJvZHVjdGlmeSgpO1xuIiwiY29uc3QgbmF2ID0ge1xuICBidWlsZE5hdiAoKSB7XG4gICAgY29uc3QgbmF2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBuYXZCYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYXZiYXItY29udGFpbmVyXCIpO1xuICAgIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgIGxldCBuYXZDb250ZW50cyA9IFtcIkNhdGVnb3JpZXNcIiwgXCJPcmRlcnNcIiwgXCJCZXRzeVwiLCBcIlwiLCBcIkxvZ091dFwiXTtcbiAgICBuYXZDb250ZW50cy5mb3JFYWNoKG5hdkJhckNhdGVnb3JpZXMgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IG5hdkJhckNhdGVnb3JpZXNcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYG5hdi0ke25hdkJhckNhdGVnb3JpZXN9YClcbiAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KVxuXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IG5hdiIsImltcG9ydCBwcm9kdWN0TGlzdCBmcm9tIFwiLi9wcm9kdWN0TGlzdFwiXG5pbXBvcnQgcmV2aWV3TGlzdCBmcm9tIFwiLi9yZXZpZXdMaXN0XCJcblxuY29uc3QgcHJvZHVjdCA9IHtcbiAgcHJvZHVjdEJ1aWxkZXIgKHByb2R1Y3RPYmopIHtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0T2JqKVxuICAgIGxldCBwcm9kdWN0QXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpO1xuICAgIHByb2R1Y3RBcnRpY2xlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwcm9kdWN0LSR7cHJvZHVjdE9iai5pZH1gKVxuICAgIFxuICAgIGxldCBwcm9kdWN0SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2R1Y3RJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJvZHVjdE9iai5pbWFnZSk7XG4gICAgcHJvZHVjdEltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW1hZ2VcIik7XG5cbiAgICBsZXQgcHJvZHVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2R1Y3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2R1Y3RPYmoudGl0bGU7XG4gICAgcHJvZHVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdFRpdGxlXCIpO1xuXG4gICAgbGV0IHByb2R1Y3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2R1Y3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBEZXNjcmlwdGlvbjogJHtwcm9kdWN0T2JqLmRlc2NyaXB0aW9ufWA7XG5cbiAgICBsZXQgcHJvZHVjdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvZHVjdFByaWNlLnRleHRDb250ZW50ID0gYFByaWNlOiAke3Byb2R1Y3RPYmoucHJpY2V9YDtcblxuICAgIGxldCBwcm9kdWN0UXVhbnRpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9kdWN0UXVhbnRpdHkudGV4dENvbnRlbnQgPSBgQXZhaWxhYmxlOiAke3Byb2R1Y3RPYmoucXVhbnRpdHl9YDtcblxuICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RJbWFnZSk7XG4gICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdFRpdGxlKTtcbiAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0UHJpY2UpO1xuICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RRdWFudGl0eSk7XG4gICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdERlc2NyaXB0aW9uKTtcbiAgICByZXZpZXdMaXN0LnJldmlld2lmeShwcm9kdWN0T2JqLmlkKTtcbiAgICBcblxuICAgIHJldHVybiBwcm9kdWN0QXJ0aWNsZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0IiwiY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gIGdldFByb2R1Y3RJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wcm9kdWN0XCIpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgfSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdERhdGEiLCJpbXBvcnQgcHJvZHVjdERhdGEgZnJvbSBcIi4vcHJvZHVjdERhdGFcIlxuaW1wb3J0IHByb2R1Y3QgZnJvbSBcIi4vcHJvZHVjdFwiXG5cbmNvbnN0IHByb2R1Y3RMaXN0ID0ge1xuICBwcm9kdWN0aWZ5ICgpIHtcbiAgICBwcm9kdWN0RGF0YS5nZXRQcm9kdWN0SW5mbygpXG4gICAgLnRoZW4ocHJvZHVjdE9iaiA9PiB7XG4gICAgICBsZXQgcHJvZHVjdERvY0ZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICBwcm9kdWN0T2JqLmZvckVhY2gocHJvZHVjdEJpdHMgPT4ge1xuICAgICAgICBsZXQgcHJvZHVjdEhUTUwgPSBwcm9kdWN0LnByb2R1Y3RCdWlsZGVyKHByb2R1Y3RCaXRzKTtcbiAgICAgICAgcHJvZHVjdERvY0ZyYWdtZW50LmFwcGVuZENoaWxkKHByb2R1Y3RIVE1MKTtcbiAgICAgIH0pXG4gICAgICBsZXQgb3V0cHV0QXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpO1xuICAgICAgb3V0cHV0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0RG9jRnJhZ21lbnQpO1xuICAgIH0pXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBwcm9kdWN0TGlzdCIsImltcG9ydCByZXZpZXdMaXN0IGZyb20gXCIuL3Jldmlld0xpc3RcIlxuXG5jb25zdCByZXZpZXcgPSB7XG4gIHJldmlld0J1aWxkZXIgKHJldmlld09iaikge1xuICAgIC8vIGNvbnNvbGUubG9nKHJldmlld09iaik7XG4gICAgY29uc3QgcmV2aWV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHJldmlld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0LXJldmlld1wiKTtcbiAgICByZXZpZXdFbGVtZW50LnRleHRDb250ZW50ID0gcmV2aWV3T2JqLnJldmlldztcbiAgICBcbiAgICByZXR1cm4gcmV2aWV3RWxlbWVudFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldmlldyIsImNvbnN0IHJldmlld0RhdGEgPSB7XG4gIGdldFJldmlld0RhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Jldmlld1wiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJldmlld0RhdGEiLCJpbXBvcnQgcmV2aWV3RGF0YSBmcm9tIFwiLi9yZXZpZXdEYXRhXCJcbmltcG9ydCByZXZpZXcgZnJvbSBcIi4vcmV2aWV3XCJcbmltcG9ydCBwcm9kdWN0IGZyb20gXCIuL3Byb2R1Y3RcIlxuXG5jb25zdCByZXZpZXdMaXN0ID0ge1xuICByZXZpZXdpZnkgKHByb2R1Y3RJZGVudGlmaWVyRnJvbVByb2R1Y3QpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0SWRlbnRpZmllckZyb21Qcm9kdWN0KVxuICAgIHJldmlld0RhdGEuZ2V0UmV2aWV3RGF0YSgpXG4gICAgLnRoZW4ocmV2aWV3T2JqID0+IHtcbiAgICAgIGxldCByZXZpZXdEb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgcmV2aWV3T2JqLmZvckVhY2goc2VuZFJldmlld3MgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhzZW5kUmV2aWV3cy5wcm9kdWN0SWQpXG4gICAgICAgIGlmIChwcm9kdWN0SWRlbnRpZmllckZyb21Qcm9kdWN0ID09PSBzZW5kUmV2aWV3cy5wcm9kdWN0SWQpIHtcbiAgICAgICAgbGV0IHJldmlld0hUTUwgPSByZXZpZXcucmV2aWV3QnVpbGRlcihzZW5kUmV2aWV3cyk7XG4gICAgICAgIHJldmlld0RvY0ZyYWdtZW50LmFwcGVuZENoaWxkKHJldmlld0hUTUwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc3QgcGFyZW50Q29uYXRpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIik7XG4gICAgICBjb25zdCByZXZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKTtcbiAgICAgIHJldmlld0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiUkVWSUVXU1wiXG4gICAgICByZXZpZXdDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJyZXZpZXctY29udGFpbmVyXCIpXG4gICAgICByZXZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3RG9jRnJhZ21lbnQpO1xuICAgICAgcGFyZW50Q29uYXRpbmVyLmFwcGVuZENoaWxkKHJldmlld0NvbnRhaW5lcik7XG5cbiAgICAgIHJldHVybiByZXZpZXdDb250YWluZXI7XG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdMaXN0Il19
