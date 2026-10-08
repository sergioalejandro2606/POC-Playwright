import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { LoginData } from '../data/LoginData';
import { AddEmployeeData } from '../data/AddEmployeeData';
import { UserMenuPage } from '../pages/UserMenuPage';

const login = LoginData.successfulLogin;
const employeeData = AddEmployeeData.successfulCreation;
const employeeEmptyData = AddEmployeeData.emptyRequiredFields;

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();

  await loginPage.login(
    login.username,
    login.password
  );
});

test.afterEach(async ({ page }) => {
  const userMenuPage = new UserMenuPage(page);

  await userMenuPage.logout();

  await expect(page).toHaveURL(/auth/);
});

test(
  `${employeeData.testCaseId} - ${employeeData.description}`,
  async ({ page }) => {

    const pimPage = new PIMPage(page);
    const addEmployeePage = new AddEmployeePage(page);

    await pimPage.goToAddEmployee();

    await addEmployeePage.createEmployee(employeeData);

    await expect(
      addEmployeePage.getSuccessMessage()
    ).toBeVisible();
  }
);

test(
  `${employeeEmptyData.testCaseId} - ${employeeEmptyData.description}`,
  async ({ page }) => {

    const pimPage = new PIMPage(page);
    const addEmployeePage = new AddEmployeePage(page);

    await pimPage.goToAddEmployee();

    await addEmployeePage.save();

    await expect(
      addEmployeePage.getRequiredMessages()
    ).toHaveCount(4);
  }
);
