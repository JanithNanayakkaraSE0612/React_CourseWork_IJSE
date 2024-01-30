import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./view/pages/Home/Home";
import {Login} from "./view/pages/Login/Login";
import {MainContent} from "./view/common/MainContent/MainContent";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" Component={MainContent} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
