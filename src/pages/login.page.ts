import { Page, Locator, expect } from '@playwright/test';

/**
 * Page Object for the-internet.herokuapp.com login page.
 * All selectors and page interactions live here — step definitions
 * stay readable and UI changes only need edits in this file.
 */
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.submitButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async expectLoginSuccess() {
    // Playwright auto-waits: no manual sleeps needed
    await expect(this.page).toHaveURL(/.*\/secure/);
    await expect(this.flashMessage).toContainText('You logged into a secure area!');
  }

  async expectLoginFailure() {
    await expect(this.flashMessage).toContainText('Your username is invalid!');
  }
}
