import reviewList from "./reviewList"

const review = {
  reviewBuilder (reviewObj) {
    // console.log(reviewObj);
    const reviewElement = document.createElement("p");
    reviewElement.setAttribute("class", "product-review");
    reviewElement.textContent = reviewObj.review;
    
    return reviewElement
  }
}

export default review