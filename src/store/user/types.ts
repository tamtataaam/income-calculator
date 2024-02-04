export type UserInfo = {
  isActive: boolean;
  isAuthenticated: boolean;
  nickname: string;
  email: string;
  roleId: string;
};

export type UserState = {
  userInfo: UserInfo | null;
  registrationErrorMsg: string | null;
  registrationMsg: string | null;
  loginErrorMsg: string | null;
  userLoading: boolean;
};
