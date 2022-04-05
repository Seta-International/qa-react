/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
  })

  it('display correct quote data from api', () => {
    // login
    const token = Cypress.env('dummyToken');
    console.log('dummyToken', token);
    cy.intercept('/quote').as('getQuote');
    cy.get('[data-test="new-quote-button"]').click();
    cy.wait('@getQuote').then((data) => {
      cy.log(JSON.stringify(data.response.body))
      const { quote, author } = data.response.body;
      // javascript handle data
      cy.stickyVariable('quote', quote);
      cy.stickyVariable('author', author);
      cy.get('[data-test="quote"]').should('have.text', quote);
      cy.get('[data-test="quote-author"]').should('have.text', author);
    })
  })

  it('display correct quote data from api 2', () => {
    const oldQuote = cy.stickyVariable('quote');
    cy.log(oldQuote);
    cy.get('[data-test="quote"]').should('have.text', '');
  })
})