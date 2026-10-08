import { type Locator, type Page } from '@playwright/test';
import type { AddEmployeeData } from '../data/AddEmployeeData';

export class AddEmployeePage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly createLoginDetailsSwitch: Locator;
  readonly enabledCheckbox: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly saveButton: Locator;
  readonly successMessage: Locator;
  readonly requiredMessages: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.getByRole('textbox', {
      name: 'First Name'
    });

    this.lastNameInput = page.getByRole('textbox', {
      name: 'Last Name'
    });

    this.employeeIdInput = page.getByRole('textbox').nth(4);

    this.createLoginDetailsSwitch = page.locator(
      '.oxd-switch-input'
    );

    this.enabledCheckbox = page.getByLabel('', {
      exact: true
    });

    this.usernameInput = page.getByRole('textbox').nth(5);

    this.passwordInput = page.locator(
      'input[type="password"]'
    ).first();

    this.confirmPasswordInput = page.locator(
      'input[type="password"]'
    ).nth(1);

    this.saveButton = page.getByRole('button', {
      name: 'Save'
    });

    this.successMessage = page.getByText(
      'SuccessSuccessfully Saved×'
    );

    this.requiredMessages = page.getByText(
      'Required',
      { exact: true }
    );
  }

  async createEmployee(
    employeeData: AddEmployeeData
  ): Promise<void> {

    await this.firstNameInput.fill(
      employeeData.firstName
    );

    await this.lastNameInput.fill(
      employeeData.lastName
    );

    await this.employeeIdInput.fill(
      employeeData.employeeId
    );

    await this.createLoginDetailsSwitch.click();

    await this.enabledCheckbox.check();

    await this.usernameInput.fill(
      employeeData.username
    );

    await this.passwordInput.fill(
      employeeData.password
    );

    await this.confirmPasswordInput.fill(
      employeeData.password
    );

    await this.saveButton.click();
  }

  async save(): Promise<void> {
    await this.createLoginDetailsSwitch.click();
    
    await this.saveButton.click();
  }

  getSuccessMessage(): Locator {
    return this.successMessage;
  }

  getRequiredMessages(): Locator {
    return this.requiredMessages;
  }
}