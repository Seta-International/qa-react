import '@testing-library/cypress/add-commands'

Cypress.Commands.add('login', () => {
  cy.log(Cypress.env('username'))
  cy.log(Cypress.env('password'))
  cy.visit('https://blueeyes.com');
  cy.request('POST', Cypress.env('loginUrl'), {
    userName: Cypress.env('username'),
    password: Cypress.env('password'),
  }).then((res) => {
    // api handle
    Cypress.env('dummyToken', res.body.accessToken); // set token to cypress env
    return console.log('token: ', res.body.accessToken);
  });
});
