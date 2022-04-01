import { createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../models/IUser';


interface UserState {
  users: IUser[],
  isLoading: boolean,
  error: string
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersFetching (state) {
      state.isLoading = true;
    },
    usersFetchingSuccess (state, action: PayloadAction<IUser[]>) {
      state.users = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    usersFetchingError (state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export default userSlice.reducer;