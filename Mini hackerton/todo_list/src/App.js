//npm install로 npm router은 안받아졌다
//npm i react-router-dom 이걸로 다운받자
import React from "react";
import { BrowserRouter } from "react-router-dom";
import TodoList from './component/TodoList';
import Sidebar from './Sidebar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Sidebar/>
          <main>
            <TodoList></TodoList>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
