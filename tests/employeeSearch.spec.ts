import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
import { EmployeeListPage } from '../pages/EmployeeListPage';
import { LoginData } from '../data/LoginData';
import { employeeSearchData } from '../data/EmployeeSearchData';
import { UserMenuPage } from '../pages/UserMenuPage';

const login = LoginData.successfulLogin;
const employee = employeeSearchData.existingEmployee;

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
  `${employee.testCaseId} - ${employee.description}`,
  async ({ page }) => {

    const pimPage = new PIMPage(page);
    const employeeListPage = new EmployeeListPage(page);

    await pimPage.goToEmployeeList();

    await employeeListPage.searchEmployee(
      employee.employeeName,
      employee.employeeId
    );

    await expect(
      employeeListPage.getEmployeeIdCell(employee.employeeId)
    ).toHaveText(employee.employeeId);

    await expect(
      employeeListPage.getFirstNameCell(employee.firstName)
    ).toHaveText(employee.firstName);

    await expect(
      employeeListPage.getLastNameCell(employee.lastName)
    ).toHaveText(employee.lastName);
  }
);
