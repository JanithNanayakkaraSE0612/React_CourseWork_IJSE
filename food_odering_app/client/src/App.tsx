import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./view/pages/Home/Home";
import {Login} from "./view/pages/Login/Login";
import {MainContent} from "./view/common/MainContent/MainContent";


function App() {
    const apikey = 'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O';
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/*'} element={<Home apikey={apikey}/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
