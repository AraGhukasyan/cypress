/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Shopping Cart and Order Test', () => {
  it('should add a product to the cart and make an order', () => {
    // visit the website 
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    //click the + button 
    cy.get('#root > div > div.products-wrapper > div > div:nth-child(6) > div.stepper-input > a.increment').click()
    //click the "ADD TO CART"
    cy.get('#root > div > div.products-wrapper > div > div:nth-child(6) > div.product-action > button').click()
    
     cy.get('.cart-icon img').click();
    cy.contains('PROCEED TO CHECKOUT').click();

     // Click on "Place Order" button
     cy.contains('Place Order').click();

    // Fill in the form and complete the order
     cy.get('#root > div > div > div > div > div > select').select("Armenia");
    cy.get('#root > div > div > div > div > input').click();
    cy.get('#root > div > div > div > div > button').click();
   });
}); 
