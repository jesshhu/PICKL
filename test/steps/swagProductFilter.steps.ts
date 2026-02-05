import { Given, Then, When } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { LoginPage } from '../../pages/swagLoginPage.js'
import { ICustomWorld } from '../support/world.js'

Given('I am on the login swag page', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const loginPage = new LoginPage(this.page)
  await loginPage.goto()
})

When('I enter username swag {string}', async function (this: ICustomWorld, username: string) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const loginPage = new LoginPage(this.page)
  await loginPage.enterUsername(username)
})

When('I enter password swag {string}', async function (this: ICustomWorld, password: string) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const loginPage = new LoginPage(this.page)
  await loginPage.enterPassword(password)
})

When('I click the login button swag', async function (this: ICustomWorld) {
  if (!this.page) {
    throw new Error('Page is not initialized')
  }

  const loginPage = new LoginPage(this.page)
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
