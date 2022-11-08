import {Given,When,Then,And} from "@badeball/cypress-cucumber-preprocessor";
import authorizationPage from "../../pages/loginPage"

Given('Open producdfgdgt', () =>{
    cy.visit('/');
})

When('Select authorization in the header', () =>{
    authorizationPage.fillAuthorizationForm('userEmail@yopmail', 'userPass');
})

When('Log in form with email {string}, pass {string} and click on the login button', (email, pass) =>{
    authorizationPage.fillAuthorizationForm(email, pass);
})

Then('The error message {string} is displayed', (ms) =>{
    cy.get(authorizationPage.selectors.errorAlertDescription).contains(ms);
})