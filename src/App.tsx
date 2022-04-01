import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/UserSlice";

function App() {
  const dispatch = useAppDispatch();

  return <div className="App"></div>;
}

export default App;
