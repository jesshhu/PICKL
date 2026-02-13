import { Locator, Page } from '@playwright/test'

/**
 * Page Object Model for the Login page
 * URL: s://www.saucedemo.com/
 */
export class LoginPage {
  readonly page: Page
  readonly usernameInput: Locator
  readonly passwordInput: Locator
  readonly loginButton: Locator
  readonly ErrorMessage: Locator
  readonly EmptyErrorMessage: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.getByRole('textbox', { name: 'Username' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.ErrorMessage = page.getByRole('heading', {
      name: 'Epic sadface: Username and password do not match any user in this service',
    })
    this.EmptyErrorMessage = page.getByRole('heading', {
      name: 'Epic sadface: Username is required',
    })
  }
  /**
   * Navigate to the login page
   */
  async goto() {
    await this.page.goto('/')
  }
  /**
   * Enter username into the username field
   * @param username - The username to enter
   */
  async enterUsername(username: string) {
    await this.usernameInput.fill(username)
  }

  /**
   * Enter password into the password field
   * @param password - The password to enter
   */
  async enterPassword(password: string) {
    await this.passwordInput.fill(password)
  }

  /**
   * Click the login button
   */
  async clickLogin() {
    await this.loginButton.click()
  }
  /**
   * Perform complete login action
   * @param username - The username to login with
   * @param password - The password to login with
   */
  async login(username: string, password: string) {
    await this.enterUsername(username)
    await this.enterPassword(password)
    await this.clickLogin()
    // wait until the Products page URL is loaded
    await this.page.waitForURL('https://www.saucedemo.com/inventory.html')
  }
  /**
   * Get the error message text
   * @returns The error message text
   */
  async getErrorMessage(): Promise<string> {
    const text = await this.ErrorMessage.textContent()
    return text?.replace('×', '').trim() ?? ''
  }

  /**
   * Get the empty error message text
   * @returns The empty error message text
   */
  async getEmptyErrorMessage(): Promise<string> {
    const text = await this.EmptyErrorMessage.textContent()
    return text?.replace('×', '').trim() ?? ''
  }

  async isOnLoginPage(): Promise<boolean> {
    return this.loginButton.isVisible()
  }
}
