const generateCPF = require('../support/utils/cpfGenerator');

describe('template spec', () => {
  it('Deve preencher o formulário com um CPF válido', () => {
    const cpf = generateCPF();
    cy.log(`CPF Gerado: ${cpf}`);
  cy.request({
  method: 'POST',
  url: 'https://fakerestapi.azurewebsites.net/api/v1/Activities',
  headers: {
    'accept': 'text/plain; v=1.0',
    'Content-Type': 'application/json; v=1.0'
  },
  body: {
    id: 0,
    title: "string",
    dueDate: "2024-08-16T17:34:32.788Z",
    completed: true
  }
}).then((response) => {
  expect(response.status).to.eq(200); 
  cy.log(response.body);
});

  }) })


  // cypress/e2e/someTest.cy.js
// const generateCPF = require('../support/utils/cpfGenerator');

// describe('Testes com CPF Gerado', () => {
//   it('Deve preencher o formulário com um CPF válido', () => {
//     const cpf = generateCPF();
//     cy.log(`CPF Gerado: ${cpf}`);
    
//     cy.visit('/formulario');
//     cy.get('#cpf').type(cpf);
//     // Outros passos do teste...
//   });
// });
