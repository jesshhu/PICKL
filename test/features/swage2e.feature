@smoke
Feature: Add to Cart and Checkout Functionality
  As a user
  I want to filter products
  So that I can find specific items, add them to the cart, and checkout

  Background:
    Given I logged in with valid credentials
    And I am on the Products page

  @positive
Scenario: Sort products by price from low to high and checkout
  When I select the Price filter from low to high
  Then I should see the first product priced at "$7.99"
  And I add the first product to the cart
  And I proceed to checkout
  Then I should see the checkout page
  And I should successfully complete the purchase




