import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

const { usersFetching, usersFetchingSuccess, usersFetchingError } = userSlice.actions;

export const fetchUsers = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(usersFetching);
    const response = await axios.get<IUser[]>('http://jsonplaceholder.typicode.com/users');
    dispatch(usersFetchingSuccess(response.data));
  } catch (e: any) {
    dispatch(usersFetchingError(e.message))
  }
}