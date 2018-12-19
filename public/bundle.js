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

    _reviewList.default.reviewify();

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
  reviewify() {
    _reviewData.default.getReviewData().then(reviewObj => {
      let reviewDocFragment = document.createDocumentFragment();
      reviewObj.forEach(sendReviews => {
        let reviewHTML = _review.default.reviewBuilder(sendReviews);

        reviewDocFragment.appendChild(reviewHTML);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdC5qcyIsIi4uL3NjcmlwdHMvcHJvZHVjdERhdGEuanMiLCIuLi9zY3JpcHRzL3Byb2R1Y3RMaXN0LmpzIiwiLi4vc2NyaXB0cy9yZXZpZXcuanMiLCIuLi9zY3JpcHRzL3Jldmlld0RhdGEuanMiLCIuLi9zY3JpcHRzL3Jldmlld0xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOzs7O0FBR0EsYUFBSSxRQUFKOztBQUNBLHFCQUFZLFVBQVo7Ozs7Ozs7OztBQ0xBLE1BQU0sR0FBRyxHQUFHO0FBQ1YsRUFBQSxRQUFRLEdBQUk7QUFDVixVQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixTQUF2QixDQUFyQjtBQUNBLFVBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxJQUFBLE1BQU0sQ0FBQyxZQUFQLENBQW9CLElBQXBCLEVBQTBCLGtCQUExQjtBQUNBLElBQUEsWUFBWSxDQUFDLFdBQWIsQ0FBeUIsTUFBekI7QUFDQSxRQUFJLFdBQVcsR0FBRyxDQUFDLFlBQUQsRUFBZSxRQUFmLEVBQXlCLE9BQXpCLEVBQWtDLEVBQWxDLEVBQXNDLFFBQXRDLENBQWxCO0FBQ0EsSUFBQSxXQUFXLENBQUMsT0FBWixDQUFvQixnQkFBZ0IsSUFBSTtBQUN0QyxZQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFoQjtBQUNBLE1BQUEsT0FBTyxDQUFDLFdBQVIsR0FBc0IsZ0JBQXRCO0FBQ0EsTUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixPQUFyQixFQUErQixPQUFNLGdCQUFpQixFQUF0RDtBQUNBLE1BQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsT0FBbkI7QUFDRCxL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LFdBQWhCLENBQTRCLGVBQTVCO0FBRUEsYUFBTyxlQUFQO0FBQ0QsS0FoQkQ7QUFpQkQ7O0FBbkJnQixDQUFuQjtlQXNCZSxVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IG5hdiBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCBwcm9kdWN0TGlzdCBmcm9tIFwiLi9wcm9kdWN0TGlzdFwiXG5cblxubmF2LmJ1aWxkTmF2KCk7XG5wcm9kdWN0TGlzdC5wcm9kdWN0aWZ5KCk7XG4iLCJjb25zdCBuYXYgPSB7XG4gIGJ1aWxkTmF2ICgpIHtcbiAgICBjb25zdCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hdmJhci1jb250YWluZXJcIik7XG4gICAgbmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgbGV0IG5hdkNvbnRlbnRzID0gW1wiQ2F0ZWdvcmllc1wiLCBcIk9yZGVyc1wiLCBcIkJldHN5XCIsIFwiXCIsIFwiTG9nT3V0XCJdO1xuICAgIG5hdkNvbnRlbnRzLmZvckVhY2gobmF2QmFyQ2F0ZWdvcmllcyA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gbmF2QmFyQ2F0ZWdvcmllc1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgbmF2LSR7bmF2QmFyQ2F0ZWdvcmllc31gKVxuICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pXG5cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgbmF2IiwiaW1wb3J0IHByb2R1Y3RMaXN0IGZyb20gXCIuL3Byb2R1Y3RMaXN0XCJcbmltcG9ydCByZXZpZXdMaXN0IGZyb20gXCIuL3Jldmlld0xpc3RcIlxuXG5jb25zdCBwcm9kdWN0ID0ge1xuICBwcm9kdWN0QnVpbGRlciAocHJvZHVjdE9iaikge1xuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RPYmopXG4gICAgbGV0IHByb2R1Y3RBcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgcHJvZHVjdEFydGljbGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByb2R1Y3QtJHtwcm9kdWN0T2JqLmlkfWApXG4gICAgXG4gICAgbGV0IHByb2R1Y3RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcHJvZHVjdEltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBwcm9kdWN0T2JqLmltYWdlKTtcbiAgICBwcm9kdWN0SW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpbWFnZVwiKTtcblxuICAgIGxldCBwcm9kdWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgcHJvZHVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvZHVjdE9iai50aXRsZTtcbiAgICBwcm9kdWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9kdWN0VGl0bGVcIik7XG5cbiAgICBsZXQgcHJvZHVjdERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvZHVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYERlc2NyaXB0aW9uOiAke3Byb2R1Y3RPYmouZGVzY3JpcHRpb259YDtcblxuICAgIGxldCBwcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9kdWN0UHJpY2UudGV4dENvbnRlbnQgPSBgUHJpY2U6ICR7cHJvZHVjdE9iai5wcmljZX1gO1xuXG4gICAgbGV0IHByb2R1Y3RRdWFudGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2R1Y3RRdWFudGl0eS50ZXh0Q29udGVudCA9IGBBdmFpbGFibGU6ICR7cHJvZHVjdE9iai5xdWFudGl0eX1gO1xuXG4gICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdEltYWdlKTtcbiAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0VGl0bGUpO1xuICAgIHByb2R1Y3RBcnRpY2xlLmFwcGVuZENoaWxkKHByb2R1Y3RQcmljZSk7XG4gICAgcHJvZHVjdEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdFF1YW50aXR5KTtcbiAgICBwcm9kdWN0QXJ0aWNsZS5hcHBlbmRDaGlsZChwcm9kdWN0RGVzY3JpcHRpb24pO1xuICAgIHJldmlld0xpc3QucmV2aWV3aWZ5KCk7XG4gICAgXG5cbiAgICByZXR1cm4gcHJvZHVjdEFydGljbGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdCIsImNvbnN0IHByb2R1Y3REYXRhID0ge1xuICBnZXRQcm9kdWN0SW5mbygpIHtcbiAgICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvcHJvZHVjdFwiKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByb2R1Y3REYXRhIiwiaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuL3Byb2R1Y3REYXRhXCJcbmltcG9ydCBwcm9kdWN0IGZyb20gXCIuL3Byb2R1Y3RcIlxuXG5jb25zdCBwcm9kdWN0TGlzdCA9IHtcbiAgcHJvZHVjdGlmeSAoKSB7XG4gICAgcHJvZHVjdERhdGEuZ2V0UHJvZHVjdEluZm8oKVxuICAgIC50aGVuKHByb2R1Y3RPYmogPT4ge1xuICAgICAgbGV0IHByb2R1Y3REb2NGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgcHJvZHVjdE9iai5mb3JFYWNoKHByb2R1Y3RCaXRzID0+IHtcbiAgICAgICAgbGV0IHByb2R1Y3RIVE1MID0gcHJvZHVjdC5wcm9kdWN0QnVpbGRlcihwcm9kdWN0Qml0cyk7XG4gICAgICAgIHByb2R1Y3REb2NGcmFnbWVudC5hcHBlbmRDaGlsZChwcm9kdWN0SFRNTCk7XG4gICAgICB9KVxuICAgICAgbGV0IG91dHB1dEFydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbiAgICAgIG91dHB1dEFydGljbGUuYXBwZW5kQ2hpbGQocHJvZHVjdERvY0ZyYWdtZW50KTtcbiAgICB9KVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcHJvZHVjdExpc3QiLCJpbXBvcnQgcmV2aWV3TGlzdCBmcm9tIFwiLi9yZXZpZXdMaXN0XCJcblxuY29uc3QgcmV2aWV3ID0ge1xuICByZXZpZXdCdWlsZGVyIChyZXZpZXdPYmopIHtcbiAgICAvLyBjb25zb2xlLmxvZyhyZXZpZXdPYmopO1xuICAgIGNvbnN0IHJldmlld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICByZXZpZXdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvZHVjdC1yZXZpZXdcIik7XG4gICAgcmV2aWV3RWxlbWVudC50ZXh0Q29udGVudCA9IHJldmlld09iai5yZXZpZXc7XG4gICAgXG4gICAgcmV0dXJuIHJldmlld0VsZW1lbnRcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXciLCJjb25zdCByZXZpZXdEYXRhID0ge1xuICBnZXRSZXZpZXdEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9yZXZpZXdcIilcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCByZXZpZXdEYXRhIiwiaW1wb3J0IHJldmlld0RhdGEgZnJvbSBcIi4vcmV2aWV3RGF0YVwiXG5pbXBvcnQgcmV2aWV3IGZyb20gXCIuL3Jldmlld1wiXG5pbXBvcnQgcHJvZHVjdCBmcm9tIFwiLi9wcm9kdWN0XCJcblxuY29uc3QgcmV2aWV3TGlzdCA9IHtcbiAgcmV2aWV3aWZ5ICgpIHtcbiAgICByZXZpZXdEYXRhLmdldFJldmlld0RhdGEoKVxuICAgIC50aGVuKHJldmlld09iaiA9PiB7XG4gICAgICBsZXQgcmV2aWV3RG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgIHJldmlld09iai5mb3JFYWNoKHNlbmRSZXZpZXdzID0+IHtcbiAgICAgICAgbGV0IHJldmlld0hUTUwgPSByZXZpZXcucmV2aWV3QnVpbGRlcihzZW5kUmV2aWV3cyk7XG4gICAgICAgIHJldmlld0RvY0ZyYWdtZW50LmFwcGVuZENoaWxkKHJldmlld0hUTUwpO1xuICAgICAgfSlcbiAgICAgIGNvbnN0IHBhcmVudENvbmF0aW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpO1xuICAgICAgY29uc3QgcmV2aWV3Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIik7XG4gICAgICByZXZpZXdDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlJFVklFV1NcIlxuICAgICAgcmV2aWV3Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmV2aWV3LWNvbnRhaW5lclwiKVxuICAgICAgcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0RvY0ZyYWdtZW50KTtcbiAgICAgIHBhcmVudENvbmF0aW5lci5hcHBlbmRDaGlsZChyZXZpZXdDb250YWluZXIpO1xuXG4gICAgICByZXR1cm4gcmV2aWV3Q29udGFpbmVyO1xuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmV2aWV3TGlzdCJdfQ==
