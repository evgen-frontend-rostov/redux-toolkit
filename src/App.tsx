import React from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from './hooks/redux';

function App() {
  const { users } = useAppSelector(state => state.userReducer);
  console.log(users);

  return (
    <div className="App">

    </div>
  );
}

export default App;
