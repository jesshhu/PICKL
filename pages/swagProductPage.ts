import { Locator, Page } from '@playwright/test'

/**
 * Page Object Model for the Login page
 * URL: https://www.saucedemo.com/inventory.html
 */
export class ProductsPage {
  readonly page: Page
  readonly filterDropdown: Locator
  readonly productPrices: Locator

  constructor(page: Page) {
    this.page = page
    this.filterDropdown = page.getByRole('combobox')
    this.productPrices = page.locator('[data-test^="inventory-item-price"]')
  }

  /**
   * Select sort option from filter dropdown
   * @param value - option value (az, za, lohi, hilo)
   */
  async selectFilter(value: string) {
    await this.filterDropdown.selectOption(value)
  }

  /**
   * Select price low to high
   */
  async sortLowToHigh() {
    await this.filterDropdown.selectOption('lohi')
  }

  /**
   * Select price high to low
   */
  async sortHighToLow() {
    await this.filterDropdown.selectOption('hilo')
  }

  async getFirstProductPrice(): Promise<string> {
    // const priceText = await this.productPrices.first().innerText()

    // This handles cases where HTML is like: <div> $ \n 7.99 </div>
    // return priceText.replace(/\n/g, '').trim()
    return this.productPrices.first().innerText()
  }
}
