export class RegistrationModel {
  fullName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export class LoginModel {
  username: string;
  password: string;
  rememberMe: boolean;
}
