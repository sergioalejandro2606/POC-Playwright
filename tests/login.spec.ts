import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginData } from '../data/LoginData';

const successfulLogin = LoginData.successfulLogin;
const invalidLogin = LoginData.invalidLogin;

test(
  `${successfulLogin.testCaseId} - ${successfulLogin.description}`,
  async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      successfulLogin.username,
      successfulLogin.password
    );

    await expect(page).toHaveURL(/dashboard/);
  }
);

test(
  `${invalidLogin.testCaseId} - ${invalidLogin.description}`,
  async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      invalidLogin.username,
      invalidLogin.password
    );

    await expect(loginPage.getErrorMessage())
      .toBeVisible();
  }
);