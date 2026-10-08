import { type Locator, type Page } from '@playwright/test';

export class EmployeeListPage {
  readonly page: Page;

  readonly employeeNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.employeeNameInput = page.getByRole('textbox', {
      name: 'Type for hints...'
    }).first();

    this.employeeIdInput = page.getByRole('textbox').nth(2);

    this.searchButton = page.getByRole('button', {
      name: 'Search'
    });
  }

  async searchEmployee(
    employeeName: string,
    employeeId: string
  ): Promise<void> {
    await this.employeeNameInput.fill(employeeName);
    await this.employeeIdInput.fill(employeeId);
    await this.searchButton.click();
  }

  getEmployeeIdCell(employeeId: string): Locator {
    return this.page.getByRole('cell', {
      name: employeeId
    });
  }

  getFirstNameCell(firstName: string): Locator {
    return this.page.getByRole('cell', {
      name: firstName
    });
  }

  getLastNameCell(lastName: string): Locator {
    return this.page.getByRole('cell', {
      name: lastName
    });
  }
}
