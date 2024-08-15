import { create } from "zustand";

import { devtools } from "zustand/middleware";

import { UserSlice } from "./interfaces/login-user.interface";
import { userSlice } from "./slices/userSlice";

// types
type ShareState = UserSlice;

// store
export const useAuthStore = create<ShareState>()(
  devtools((...a) => ({
    ...userSlice(...a),
  }))
);
