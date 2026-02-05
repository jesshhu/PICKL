import { Locator, Page } from '@playwright/test'

/**
 * Page Object Model for the Login page
 * URL: https://www.saucedemo.com/inventory.html
 */
export class ProductsPage {
  readonly page: Page
  readonly productHeading: Locator

  constructor(page: Page) {
    this.page = page
    this.productHeading = page.getByTestId('title')
  }

  async goto() {
    await this.page.goto('/')
  }

  async getProductHeading(): Promise<string> {
    return (await this.productHeading.textContent()) ?? ''
  }

  async isOnProductPage(): Promise<boolean> {
    await this.productHeading.waitFor()
    const heading = await this.getProductHeading()
    return heading.includes('Products')
  }
}
