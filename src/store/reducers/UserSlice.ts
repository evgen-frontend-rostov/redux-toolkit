import { createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './../../models/IUser';
import { fetchUsers } from './ActionCreators';


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
    // usersFetching (state) {
    //   state.isLoading = true;
    // },
    // usersFetchingSuccess (state, action: PayloadAction<IUser[]>) {
    //   state.users = action.payload;
    //   state.isLoading = false;
    //   state.error = '';
    // },
    // usersFetchingError (state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // }
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

export default userSlice.reducer;