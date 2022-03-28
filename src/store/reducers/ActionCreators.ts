import axios from "axios";
import { AppDispatch } from "../store";


export const fetchUsers = () => (dispatch: AppDispatch) => {
  try {
    axios.get('http://jsonplaceholder.typicode.com/users').then(res => console.log(res.data))
  } catch (err) {

  }
}