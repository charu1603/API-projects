
import './App.css'
import Create from './Create'
import Home from './Home'

import { BrowserRouter as Router,Routes, Route, BrowserRouter} from "react-router-dom";
import Update from './Update'

function App() {

 return (
   
    <>

     <Router>
       <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/create' element={<Create />}></Route>
         <Route path='/edit/:id' element={<Update />}></Route>
       </Routes>
     </Router>
  </>
   
  )
 
}

export default App
