@smoke
Feature: Filter Products Functionality
  As a user
  I want to filter products
  So that I can find specific items

  Background:
    Given I logged in with valid credentials
    And I am on the Products page

  @positive
  Scenario: Successful filter by Price Range
    When I select the Price filter from low to high
    Then I should see the first product priced at "$7.99"




