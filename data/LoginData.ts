export interface LoginData {
  testCaseId: string;
  description: string;
  username: string;
  password: string;
}

export const LoginData = {
  successfulLogin: {
    testCaseId: 'TC-001',
    description: 'Iniciar sesión correctamente',
    username: process.env.ORANGE_USERNAME!,
    password: process.env.ORANGE_PASSWORD!
  } satisfies LoginData,

  invalidLogin: {
    testCaseId: 'TC-005',
    description: 'Iniciar sesión con credenciales inválidas',
    username: 'usuario_invalido',
    password: 'password_invalido'
  } satisfies LoginData
};