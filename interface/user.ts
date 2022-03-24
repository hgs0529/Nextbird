export interface User {
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  isLoggingOut: boolean;
  me: {
    id: string;
    nickname: string;
  };
  signUpData: {};
  loginData: {};
}
