import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserComponent } from './components/UserComponent';
import { NotFound } from './components/NotFound';
import { AddUser } from './components/AddUser';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<UserComponent />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<AddUser/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
      
  );
}

export default App;