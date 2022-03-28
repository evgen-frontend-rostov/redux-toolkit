import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';

function App() {
  const { count } = useAppSelector(state => state.userReducer);
  const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className="App">
      Count: {count}
      <button onClick={() => {dispatch(increment(10))}}>Increment</button>
    </div>
  );
}

export default App;
