//npm install로 npm router은 안받아졌다
//npm i react-router-dom 이걸로 다운받자
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Diary from './component/Diary';
import DiaryList from './component/DiaryList';
import Setting from './component/Setting';
import Sidebar from './Sidebar';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <main>
          <Sidebar/>
          <section className='features'>
            <Routes>
              <Route path='/'element={<Diary />} />
              <Route path='/diarylist'element={<DiaryList />} />
              <Route path='/setting'element={<Setting />} />
            </Routes>
            </section>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
