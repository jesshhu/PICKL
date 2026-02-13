import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { LoginPage } from '../../pages/swagLoginPage.js'
import { ProductsPage } from '../../pages/swagProductPage.js'
import { E2ePage } from '../../pages/swage2ePage.js'
import { ICustomWorld } from '../support/world.js'

Given('I logged in with valid credentials', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const loginPage = new LoginPage(this.page)
  await loginPage.goto()

  await loginPage.enterUsername('standard_user')

  await loginPage.enterPassword('secret_sauce')

  await loginPage.clickLogin()
})

Then('I am on the Products page', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  // wait until page fully loads
  await this.page.waitForLoadState('load')

  // assert that URL is exactly the Products page
  await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
})

When('I select the Price filter from low to high', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const productsPage = new ProductsPage(this.page)
  await productsPage.sortLowToHigh()
})

Then(
  'I should see products sorted by price in ascending order',
  async function (this: ICustomWorld, expectedPrice: string) {
    if (!this.page) {
      throw new Error('Page is not initialized')
    }

    const productsPage = new ProductsPage(this.page)

    const actualPrice = await productsPage.getFirstProductPrice()
    expect(actualPrice).toBe(expectedPrice)
  },
)

Then(
  'I should see the first product priced at {string}',
  async function (this: ICustomWorld, expectedPrice: string) {
    if (!this.page) {
      throw new Error('Page is not initialized')
    }

    const productsPage = new ProductsPage(this.page)

    const actualPrice = await productsPage.getFirstProductPrice()
    expect(actualPrice).toBe(expectedPrice)
  },
)

Then('I add the first product to the cart', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const e2ePage = new E2ePage(this.page)
  await e2ePage.clickAddToCart()
  await e2ePage.clickShop()
})

Then('I proceed to checkout', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const e2ePage = new E2ePage(this.page)

  await e2ePage.clickCheckout()
})

Then('I should see the checkout page', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const e2ePage = new E2ePage(this.page)
  await e2ePage.enterFirstName('John')
  await e2ePage.enterLastName('Doe')
  await e2ePage.enterPostalCode('12345')
  await e2ePage.clickContinue()
})

Then('I should successfully complete the purchase', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const e2ePage = new E2ePage(this.page)
  await expect(e2ePage.completeTitle).toBeVisible()
})
