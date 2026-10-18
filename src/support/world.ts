import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    // Playwright defaults to headless; pass HEADLESS=false locally to watch the run
    const headless = process.env.HEADLESS !== 'false';
    this.browser = await chromium.launch({ headless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.loginPage = new LoginPage(this.page);
  }

  async cleanup() {
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);
