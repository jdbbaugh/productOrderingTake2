import reviewData from "./reviewData"
import review from "./review"
import product from "./product"

const reviewList = {
  reviewify (productIdentifierFromProduct) {
    console.log(productIdentifierFromProduct)
    reviewData.getReviewData()
    .then(reviewObj => {
      let reviewDocFragment = document.createDocumentFragment();

      reviewObj.forEach(sendReviews => {
        console.log(sendReviews.productId)
        if (productIdentifierFromProduct === sendReviews.productId) {
        let reviewHTML = review.reviewBuilder(sendReviews);
        reviewDocFragment.appendChild(reviewHTML);
        }
      })
      const parentConatiner = document.querySelector(".output");
      const reviewContainer = document.createElement("article");
      reviewContainer.textContent = "REVIEWS"
      reviewContainer.setAttribute("id", "review-container")
      reviewContainer.appendChild(reviewDocFragment);
      parentConatiner.appendChild(reviewContainer);

      return reviewContainer;
    })
  }
}

export default reviewList