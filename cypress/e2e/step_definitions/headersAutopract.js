import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import header from "../../pages/pageAutopract"
Given("Open product", () => {
    cy.visit("/").viewport(1920,1080);
  });
When("Open section {string} in shop header", (sectionName) =>{
    header.openShopMenu(sectionName);
});
When("Close modal letter", () => {
    cy.get(header.selectors.closeButtonStartModal).click();
});
When("Open first result filter",() =>{
    cy.get(header.selectors.elementFirstBlockResult).click();
})
When("Click button add to card",() =>{
    cy.get(header.selectors.buttonAddToCard).click();
})
When("Section is open", () =>{
    cy.get(header.selectors.containerPage).should("be.visible");
});






// import {Given,When,Then,And} from "@badeball/cypress-cucumber-preprocessor";
// import header from "../../pages/pageAutopract"

// Given("Open product", () =>{
//     cy.visit('/');
// })

// When("Open section {string} in shop header", (sectionName) =>{
//     header.openShopMenu(sectionName);
// })

// When("Close modal letter", () =>{
//     cy.get(header.selectors.closeButtonStartModal).click();
// })

// Then("Section is open", () =>{
//     cy.get(header.selectors.title).should("be.visible");
// })

// When("Open first result filter", () => {
//     cy.get(header.selectors.elementFirstResult).click();
// })