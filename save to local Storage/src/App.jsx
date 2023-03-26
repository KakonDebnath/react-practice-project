import React from 'react';
import AllTodo from './components/AllTodo/AllTodo';

const App = () => {
  return (
    <div style={{textAlign:'center', maxWidth: "1140px", margin: "0px auto"}}>
      <h1>Welcome To Our New Project</h1>
      <AllTodo></AllTodo>
    </div>
  );
};

export default App;