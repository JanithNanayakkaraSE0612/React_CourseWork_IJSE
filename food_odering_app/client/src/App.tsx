import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./view/pages/Home/Home";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/*" Component={Home} ></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
