const stickyVariables = {};

Cypress.Commands.add('stickyVariable', (name, value) => {
  if (value) {
    stickyVariables[name] = value;
  }
  return stickyVariables[name];
});