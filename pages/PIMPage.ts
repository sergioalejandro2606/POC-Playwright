import { type Locator, type Page } from '@playwright/test';

export class PIMPage {
  readonly page: Page;

  readonly pimLink: Locator;
  readonly addEmployeeLink: Locator;
  readonly employeeListLink: Locator;

  constructor(page: Page) {
    this.page = page;

    this.pimLink = page.getByRole('link', {
      name: 'PIM'
    });

    this.addEmployeeLink = page.getByRole('link', {
      name: 'Add Employee'
    });

    this.employeeListLink = page.getByRole('link', {
      name: 'Employee List'
    });
  }

  async goToAddEmployee(): Promise<void> {
    await this.pimLink.click();
    await this.addEmployeeLink.click();
  }

  async goToEmployeeList(): Promise<void> {
    await this.pimLink.click();
    await this.employeeListLink.click();
  }
}