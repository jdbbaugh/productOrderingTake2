const nav = {
  buildNav () {
    const navContainer = document.querySelector(".output");
    const navBar = document.createElement("nav");
    navBar.setAttribute("id", "navbar-container");
    navContainer.appendChild(navBar);
    let navContents = ["Categories", "Orders", "Betsy", "", "LogOut"];
    navContents.forEach(navBarCategories => {
      const element = document.createElement("p");
      element.textContent = navBarCategories
      element.setAttribute("class", `nav-${navBarCategories}`)
      navBar.appendChild(element);
    })

  }
}
export default nav