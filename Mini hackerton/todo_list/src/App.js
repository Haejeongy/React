//npm install로 npm router은 안받아졌다
//npm i react-router-dom 이걸로 다운받자
import React from "react";
import { BrowserRouter } from "react-router-dom";
import TodoList from './component/TodoList';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <main>
            <TodoList></TodoList>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
