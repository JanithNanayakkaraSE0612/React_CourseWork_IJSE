import React from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/book/Books';
import About from './components/About';


function App() {
  return (
    <React.Fragment>
      <header>
          <Header/>
      </header>
      <main>
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route path='/add' element={<AddBook/>}/>
            <Route path='/books' element={<Books/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
