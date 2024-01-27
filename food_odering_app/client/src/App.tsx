import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./view/pages/Home/Home";
import {Login} from "./view/pages/Login/Login";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" Component={Login} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
