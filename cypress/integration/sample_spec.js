describe('My First Test', function() {
  it('Visit my site', function() {
    cy.visit('http://localhost:8080')

    cy.contains('menu').click()
    cy.contains('cloud').click()

    cy.url().should('include', '/settings/cloud')
  })
})