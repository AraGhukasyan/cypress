// <reference types="cypress" />

describe('Shopping Cart and Order Test', () => {
  it('should add a product to the cart and make an order', () => {
    // Visit the website 
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Click the + button to increase the quantity
    cy.get('#root > div > div.products-wrapper > div > div:nth-child(6) > div.stepper-input > a.increment').click();

    // Click the "ADD TO CART" button
    cy.get('#root > div > div.products-wrapper > div > div:nth-child(6) > div.product-action > button').click();

    // Assert that the cart icon is visible
    cy.get('.cart-icon img').should('be.visible');

    // Click on the cart icon
    cy.get('.cart-icon img').click();

    // Assert that the "PROCEED TO CHECKOUT" button is visible and clickable
    cy.contains('PROCEED TO CHECKOUT').should('be.visible', 'not.be.disabled');

    // Click on the "PROCEED TO CHECKOUT" button
    cy.contains('PROCEED TO CHECKOUT').click();

    // Assert that the "Place Order" button is visible and clickable
    cy.contains('Place Order').should('be.visible', 'not.be.disabled');

    // Click on the "Place Order" button
    cy.contains('Place Order').click();

    // Fill in the form and complete the order
    // Assert that the country select dropdown is visible
    cy.get('#root > div > div > div > div > div > select').should('be.visible');

    // Select a country from the dropdown
    cy.get('#root > div > div > div > div > div > select').select("Armenia");

    // Assert that the terms and conditions checkbox is visible and check it
    cy.get('#root > div > div > div > div > input').should('be.visible', 'not.be.disabled').check();

    // Assert that the "Proceed" button is visible and click it
    cy.get('#root > div > div > div > div > button').should('be.visible').click();
  });
}); 
