export interface EmployeeSearchData {
  testCaseId: string;
  description: string;
  employeeName: string;
  employeeId: string;
  firstName: string;
  lastName: string;
}

export const employeeSearchData = {
  existingEmployee: {
    testCaseId: 'TC-003',
    description: 'Consultar empleado existente',
    employeeName: 'Andres Franco',
    employeeId: '999098',
    firstName: 'Andres',
    lastName: 'Franco'
  } satisfies EmployeeSearchData
};
