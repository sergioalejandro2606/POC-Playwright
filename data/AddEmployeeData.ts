import { generateEmployeeId } from '../utils/testDataUtils';

export interface AddEmployeeData {
  testCaseId: string;
  description: string;
  firstName: string;
  lastName: string;
  employeeId: string;
  username: string;
  password: string;
}

export interface EmptyRequiredFieldsData {
  testCaseId: string;
  description: string;
}

const employeeId = generateEmployeeId();

export const addEmployeeData = {
  successfulCreation: {
    testCaseId: 'TC-002',
    description: 'Crear empleado correctamente',
    firstName: 'Andres',
    lastName: 'Franco',
    employeeId,
    username: `qaUser_${employeeId}`,
    password: 'admin123'
  } satisfies AddEmployeeData,

  emptyRequiredFields: {
    testCaseId: 'TC-004',
    description: 'Crear empleado con campos obligatorios vacíos'
  } satisfies EmptyRequiredFieldsData
};
