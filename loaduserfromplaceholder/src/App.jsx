// import reactLogo from './assets/react.svg'  (Form assets folder)
// import viteLogo from '/vite.svg' (from public folder)
import React from 'react';
import AllUsers from './components/Alluser/AllUsers';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header></Header>
      <AllUsers></AllUsers>
    </div>
  );
};

export default App;