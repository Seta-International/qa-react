/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('cypress testing library', () => {
    cy.findAllByText('New Quote').should('exist')
  })
})