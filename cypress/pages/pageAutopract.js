class header {
    selectors = {
      headerMenuShop: '#mainnav > ul > li:nth-child(3) > ul',
      selectorSectionShopMenu: "#mainnav > ul > li:nth-child(3) > ul > li > a",
      closeButtonStartModal: "[aria-label='Close']",
      containerPage: "section",
      elementFirstBlockResult: "#products > div > div > div:nth-child(1) > div > app-product-box-one > div > div.img-wrapper > div.front > a > img",
      buttonAddToCard: ".product-buttons a:nth-child(1)"
    }
  /**
   * Open shop page
   */
   openShopMenu(nameSection) {
      cy.get(this.selectors.headerMenuShop).invoke("show");
      cy.get(this.selectors.selectorSectionShopMenu).contains(nameSection).click();
  }
}
module.exports = new header();



// class header {
//     selectors = {
//         headerMenuShop: '#mainnav > ul > li:nth-child(3) > ul',
//         selectorSectionShopMenu: "#mainnav > ul > li:nth-child(3) > ul > li > a",
//         closeButtonStartModal: "[aria-label='Close']",
//         title: "body > app-root > app-shop > app-collection-left-sidebar > section > div > div > div > div.collection-content.col > div > div > div > div.top-banner-wrapper > div > h4",
//         elementFirstResult: "#products > div > div > div:nth-child(1) > div > app-product-box-one > div > div.img-wrapper > div.front > a > img",
//         addToCartButton: "[class='product-buttons'] > a:first-child"
//     }


// openShopMenu(nameSection) {
//     cy.get(this.selectors.headerMenuShop).invoke("show");
//     cy.get(this.selectors.selectorSectionShopMenu).contains(nameSection).click();
// }
// } module.exports = new header();