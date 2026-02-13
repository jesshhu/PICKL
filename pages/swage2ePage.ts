import { Locator, Page } from '@playwright/test'

/**
 * Page Object Model for the Login page
 * URL: https://www.saucedemo.com/inventory.html
 */
export class E2ePage {
  readonly page: Page
  readonly addToCartButtonfirstprod: Locator
  readonly shopLink: Locator
  readonly checkoutButton: Locator
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly postalCodeInput: Locator
  readonly continueButton: Locator
  readonly overviewHeader: Locator
  readonly finishButton: Locator
  readonly completeTitle: Locator

  constructor(page: Page) {
    this.page = page
    this.addToCartButtonfirstprod = page.locator(
      'button[data-test="add-to-cart-sauce-labs-onesie"]',
    )
    this.shopLink = page.locator('a.shopping_cart_link[data-test="shopping-cart-link"]')
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' })
    this.firstNameInput = page.locator('#first-name')
    this.lastNameInput = page.locator('#last-name')
    this.postalCodeInput = page.locator('#postal-code')
    this.continueButton = page.getByRole('button', { name: 'Continue' })
    this.overviewHeader = page.locator('span:has-text("Checkout: Overview")')
    this.finishButton = page.locator('[data-test="finish"]')
    this.completeTitle = page.locator('.title')
  }

  /**
   * Click the "Add to Cart" first product button
   */
  async clickAddToCart() {
    await this.addToCartButtonfirstprod.click()
  }

  /**
   * Click the "Shop" link icon
   */
  async clickShop() {
    await this.shopLink.click()
  }

  /**
   * Click the "Checkout" button
   */
  async clickCheckout() {
    await this.checkoutButton.click()
  }

  /**
   * Enter username into the username field
   * @param firstname - The first name to enter
   */
  async enterFirstName(firstname: string) {
    await this.firstNameInput.fill(firstname)
  }

  /**
   * Enter last name into the last name field
   * @param lastname - The last name to enter
   */
  async enterLastName(lastname: string) {
    await this.lastNameInput.fill(lastname)
  }

  /**
   * Enter postal code into the postal code field
   * @param postalCode - The postal code to enter
   */
  async enterPostalCode(postalCode: string) {
    await this.postalCodeInput.fill(postalCode)
  }

  /**
   * Click the "Continue" button
   */
  async clickContinue() {
    await this.continueButton.click()
  }

  /**
   * Click the "Finish" button
   */
  async clickFinish() {
    await this.finishButton.click()
  }
}
