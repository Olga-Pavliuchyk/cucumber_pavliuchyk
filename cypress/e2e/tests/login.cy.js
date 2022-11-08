import authorizationPage from "../../pages/loginPage"

describe('login', () => {

    it('cucumber', () => {
        cy.visit('/');
        authorizationPage.openLoginPage();
        authorizationPage.fillAuthorizationForm('userEmail@yopmail', 'userPass');
        cy.get(authorizationPage.selectors.errorAlertDescription).contains('Invalid email address.');






        // cy.visit('/');
        // cy.get('.login').click();
        // cy.get('#email').type('email');
        // cy.get('#passwd').type('password');
        // cy.get('#SubmitLogin').click();
        // cy.get('.alert li').contains('Invalid email address');


      });
    
})