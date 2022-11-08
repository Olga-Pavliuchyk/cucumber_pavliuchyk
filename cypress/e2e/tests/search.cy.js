import authorizationPage from "../../pages/loginPage"

describe('Search', () => {

    it('Check search result', () => {
        cy.visit('/');
        cy.get('#search_query_top').type('Printed Summer Dress');
        cy.get('')






        // cy.visit('/');
        // cy.get('.login').click();
        // cy.get('#email').type('email');
        // cy.get('#passwd').type('password');
        // cy.get('#SubmitLogin').click();
        // cy.get('.alert li').contains('Invalid email address');


      });
    
})