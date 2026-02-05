@smoke
Feature: Login Functionality
  As a user
  I want to login to the application
  So that I can access Products page

  Background:
    Given I am on the login swag page

  @positive
  Scenario: Successful login with valid credentials
    When I enter username swag "standard_user"
    And I enter password swag "secret_sauce"
    And I click the login button swag
    Then I should see the Products page

  @negative
  Scenario: Failed login with invalid username
    When I enter username swag "invaliduser"
    And I enter password swag "secret_sauce"
    And I click the login button swag
    Then I should see swag error message "Epic sadface: Username and password do not match any user in this service"
    And I should remain on the login swag page

  @negative
  Scenario: Failed login with invalid password
    When I enter username swag "standard_user"
    And I enter password swag "wrongpassword"
    And I click the login button swag
    Then I should see swag error message "Epic sadface: Username and password do not match any user in this service"
    And I should remain on the login swag page

  @negative
  Scenario: Failed login with empty credentials
    When I click the login button swag
    Then I should see swag empty error message "Epic sadface: Username is required"
    And I should remain on the login swag page
