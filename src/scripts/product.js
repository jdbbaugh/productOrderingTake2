import productList from "./productList"

const product = {
  productBuilder (productObj) {
    console.log(productObj)
    let productArticle = document.createElement("article");
    productArticle.setAttribute("id", `product-${productObj.id}`)
    
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
}

export default product