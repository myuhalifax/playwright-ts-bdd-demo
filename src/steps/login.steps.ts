import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';

Given('I navigate to the herokuapp login page', async function (this: CustomWorld) {
  await this.loginPage.goto();
});

When(
  'I enter username {string} and password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await this.loginPage.login(username, password);
  }
);

Then('I should see the secure area', async function (this: CustomWorld) {
  await this.loginPage.expectLoginSuccess();
});

Then('I should not see the secure area', async function (this: CustomWorld) {
  await this.loginPage.expectLoginFailure();
});
