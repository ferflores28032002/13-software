export interface UserLoginModel {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  is_active: boolean;
  roleId: number;
}

export interface UserSlice {
  token: string | null;
  user: UserLoginModel | null;
  setUser: (token: string, user: UserLoginModel) => void;
  logout: () => void;
}
