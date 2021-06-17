describe('Can navigate around pages', () => {
  it('can visit all pages and load all page content', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Online Bookstore');

    cy.get('[data-cy="header-about-link"]').click();
    cy.get('[data-cy="about-page-h1"]').should('be.visible');

    cy.get('[data-cy="header-shoppingCart-link"]').click();
    cy.get('[data-cy="shoppingCart-h1"]').should('be.visible');

    cy.get('[data-cy="header-products-link"]').click();
    cy.get('[data-cy="products-h1"]').should('be.visible');

    cy.get('[data-cy="product-page-7"]').click();
    cy.get('[data-cy="product-7-h1"]').should('be.visible');

    cy.visit('http://localhost:3000/products/99');
    cy.get('[data-cy="product-page-not-found"]').should('be.visible');
  });
});
