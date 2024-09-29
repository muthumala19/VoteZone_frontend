import { PayloadAction, createSlice } from '@reduxjs/toolkit';

enum Role {
  ADMIN = 'admin',
  OBSERVER = 'observer',
  NONE = '',
}
type newUser = {
  _id: string;
  name: string;
  password: string;
  email: string;
  role: Role;
  registered: boolean;
  isVerifiedUser: boolean;
};

type InitialDataTypeUser = {
  isLogged: boolean;
  role: Role;
  email?: string;
  password?: string;
  loginError?: boolean;
  newUser: newUser;
};

export const initialStateUser: InitialDataTypeUser = {
  isLogged: false,
  role: Role.NONE,
  email: '',
  password: '',
  loginError: true,
  newUser: {
    _id: '',
    name: '',
    password: '',
    email: '',
    role: Role.OBSERVER,
    registered: false,
    isVerifiedUser: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    loginSuccess: (state, action) => {
      state.isLogged = true;
      state.loginError = false;
      state.role = action.payload.role;
    },
    loginFail: (state, _action: PayloadAction<string>) => {
      state.loginError = true;
    },
    registerSuccess: (state) => {
      state.newUser.registered = true;
    },
    logoutSuccess: (state) => {
      state.isLogged = false;
      state.email = '';
      state.password = '';
      state.role = Role.NONE;
    },
    signup: (_state, _action) => {
      //middleware
    },
    addNewUser: (_state, _action) => {
      //middleware
    },
    login: (state, _action) => {
      state.isLogged = true;
      state.role = Role.ADMIN;
      state.loginError = false;
      //middleware
    },
    authenticate: (_state) => {
      //middleware
    },
    register: (_state, _action) => {
      //middleware
    },
    logout: (state) => {
      state.isLogged = false;
      state.role = Role.NONE;
      state.loginError = true;

      //middleware
    },
    updateUser: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    updateNewUser: (state, action) => {
      state.newUser.name = action.payload.name;
      state.newUser.email = action.payload.email;
      state.newUser.password = action.payload.password;
    },
  },
});

export { Role };
export default userSlice.reducer;
export const {
  login,
  logoutSuccess,
  logout,
  loginFail,
  addNewUser,
  loginSuccess,
  authenticate,
  signup,
  register,
  registerSuccess,
  updateUser,
  updateNewUser,
} = userSlice.actions;
