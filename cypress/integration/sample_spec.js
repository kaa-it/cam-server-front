describe('My First Test', function() {
  it('Visit my site', function() {
    cy.visit('http://192.168.11.69:8080')

    cy.contains('menu').click()
    cy.contains('cloud').click()

    cy.url().should('include', '/settings/cloud')
  })
})