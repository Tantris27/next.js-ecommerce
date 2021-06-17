describe('Cart Test', () => {
  it('Add to cart, change quantity and remove from cart', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('[data-cy="product-page-7"]').click();

    cy.get('[data-cy="product-7-h1"]').should('be.visible');
    cy.get('[data-cy="product-page-7-add-button"]').click();
    cy.visit('http://localhost:3000/products');
    cy.get('[data-cy="product-page-7"]').click();
    cy.get('[data-cy="product-page-7-add-button"]').click();
    cy.get('[data-cy="header-shoppingCart-link"]').click();

    cy.get('[data-cy="shoppingCart-h1"]').should('be.visible');
    cy.get('[data-cy="0-amount-input"]').type('10');
  });
});
