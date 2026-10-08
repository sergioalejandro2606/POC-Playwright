import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
import { AddEmployeePage } from '../pages/AddEmployeePage';
import { LoginData } from '../data/LoginData';
import { addEmployeeData } from '../data/AddEmployeeData';

const login = LoginData.successfulLogin;
const employeeData = addEmployeeData.successfulCreation;
const employeeEmptyData = addEmployeeData.emptyRequiredFields;

test(
  `${employeeData.testCaseId} - ${employeeData.description}`,
  async ({ page }) => {

    const loginPage = new LoginPage(page);
    const pimPage = new PIMPage(page);        
    const addEmployeePage = new AddEmployeePage(page);

    await loginPage.navigate();

    await loginPage.login(
      login.username,
      login.password
    );

    await pimPage.goToAddEmployee();

    await expect(page).toHaveURL(/dashboard/);

    await addEmployeePage.createEmployee(
      employeeData
    );

    await expect(
      addEmployeePage.getSuccessMessage()
    ).toBeVisible();
  }
);

test(
  `${employeeEmptyData.testCaseId} - ${employeeEmptyData.description}`,
  async ({ page }) => {

    const loginPage = new LoginPage(page);
    const pimPage = new PIMPage(page);
    const addEmployeePage = new AddEmployeePage(page);

    await loginPage.navigate();

    await loginPage.login(
      login.username,
      login.password
    );

    await pimPage.goToAddEmployee();

    await addEmployeePage.save();

    await expect(
      addEmployeePage.getRequiredMessages()
    ).toHaveCount(4);
  }
);
