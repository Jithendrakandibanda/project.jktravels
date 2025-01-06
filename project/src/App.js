import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Account from './components/account';
import Home from './components/home';
import Newyork from'./components/newyork';
import Paris from './components/paris';
import Tokyo from '../src/components/tokyo';
import Contact from './components/contact';
import Tours from './components/tours';
import About from './components/about';
import Signup from './components/sigup';


function App() {
return (
< Router>
< main>
< Routes>
<Route path='/' element={<Home />} />
<Route path="/tours" element={<Tours/>} />
<Route path="/account" element={<Account />} />
<Route path="/newyork" element={<Newyork />} />
<Route path="/paris" element={<Paris/>} />
<Route path="/tokyo" element={<Tokyo />} />
<Route path="/contact" element={<Contact />}/>
<Route path="/about" element={<About/>}/>
<Route path="/sigup" element={<Signup/>}/>
</Routes>
</main>
</Router>);
}


export default App;
