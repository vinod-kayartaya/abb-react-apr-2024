describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should check the header', () => {
    cy.get('h1').should('exist');
  });

  it('should test that customer form exists', () => {
    cy.get('#root > div:nth-child(3) > div > div:nth-child(1) > h3').should(
      'have.text',
      'Customer form'
    );
  });

  it('should check the number of existing customers', () => {
    cy.get('ul.list-group>li.list-group-item')
      .its('length')
      .should('equals', 2);
  });

  it('should add a new customer', () => {
    cy.get('ul.list-group>li.list-group-item')
      .its('length')
      .should('equals', 2);

    cy.get('#nameInput').type('Ravi kumar');
    cy.get('#emailInput').type('ravikumar@xmpl.com');
    cy.get('#phoneInput').type('9080706050');
    cy.get('#cityInput').type('{selectAll}Delhi');
    cy.get('form>button[type=submit]').click();

    cy.get('ul.list-group>li.list-group-item')
      .its('length')
      .should('equals', 3);
  });
});
