
import './styles/App.css'
import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router,Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Api from "./components/Userapi";
import Users from "./components/Users";
import '../src/styles/App.css';


function App() {

  return (
<Router>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/Userapi" element={<Api />} />
<Route path="/Users/:id" element={<Users />} />

</Routes>

</Router>
 

    
    
  )
}

export default App ;
