import { type Locator, type Page } from '@playwright/test';

export class UserMenuPage {
  readonly page: Page;

  readonly userMenu: Locator;
  readonly logoutOption: Locator;

  constructor(page: Page) {
    this.page = page;

    this.userMenu = page
      .getByRole('listitem')
      .filter({
        hasText: process.env.ORANGE_NAME!
      })
      .locator('i');

    this.logoutOption = page.getByRole(
      'menuitem',
      { name: 'Logout' }
    );
  }

  async logout(): Promise<void> {
    await this.userMenu.click();
    await this.logoutOption.click();
  }
}
