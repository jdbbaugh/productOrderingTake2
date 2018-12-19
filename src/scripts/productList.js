import productData from "./productData"

const productList = {
  productify () {
    productData.getProductInfo()
    .then(productObj => {
      let productDocFragment = document.createDocumentFragment();

      productObj.forEach(productBits => {
        let productHTML = product.productBuilder(productBits);
        productDocFragment.appendChild(productHTML);
      })
      let outputArticle = document.querySelector(".output");
      outputArticle.appendChild(productDocFragment);
    })
  }
};
export default productList