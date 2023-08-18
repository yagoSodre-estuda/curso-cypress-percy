import '@percy/cypress'

Cypress.Commands.add('fillMandatoryFields', () => {
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#email').type('john@doe.com');
    cy.get('#agree').check();
});

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.fillMandatoryFields();
    cy.contains('Confirm Tickets').click();
});