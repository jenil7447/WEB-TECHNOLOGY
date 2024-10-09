import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import User from './pages/User';
import AddUser from './pages/AddUser';
import Update from './pages/Update';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<User/>}></Route>
    <Route path='/add' element={<AddUser/>}></Route>
    <Route path='/update/:id' element={<Update/>}></Route>

    
    </Routes>
 </BrowserRouter>
);


