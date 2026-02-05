@smoke
Feature: Filter Products Functionality
  As a user
  I want to filter products
  So that I can find specific items

  Background:
    Given I am on the Products page

  @positive
  Scenario: Successful filter by Price Range
    When I select the Price filter
    And I select Price Range "low to high"
    Then I should see products sorted by price in ascending order
    And I should see the first product priced at "$7.99"



