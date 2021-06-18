describe('Cart Test', () => {
  it('Add to cart, change quantity and remove from cart', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('[data-cy="product-page-7"]').click();

    cy.get('[data-cy="product-7-h1"]').should('be.visible');
    cy.get('[data-cy="product-page-7-add-button"]').click();
    // cy.visit('http://localhost:3000/products');
    // cy.get('[data-cy="product-page-7-add-button"]').click();
    cy.get('[data-cy="header-shoppingCart-link"]').click();

    cy.get('[data-cy="shoppingCart-h1"]').should('be.visible');
    cy.get('[data-cy="undefined-amount-input"]').type('10');
    cy.get('[data-cy="undefined-amount-button"]').click();
    cy.get('[data-cy="4-delete-button"]').click();
    cy.get('[data-cy="7-delete-button"]').click();
    cy.get('[data-cy="2-delete-button"]').click();
  });
});
