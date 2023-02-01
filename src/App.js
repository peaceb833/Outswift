import React from 'react';
import Frontpage from './component/Frontpage';
import {BrowserRouter as  Router , Route,Routes } from 'react-router-dom'
import Loginpage from './component/Loginpage';
import Pricelist from './component/Pricelist';
import Signuppage from './component/Signuppage';
import Learnmore from './component/Learnmore';
import Booknow from './component/Booknow';
import ScrollToTop from './component/ScrollToTop';
import Cart from './component/Cart';



const App=()=>{
    return(
      <div className="App">
         
     <Router>
      
    
      <ScrollToTop>
   <Routes>
  
     <Route exact path='/Loginpage' element={<Loginpage />}  ></Route>
      <Route  path='/' element={<Frontpage />} ></Route>
      <Route  path='/Pricelist' element={<Pricelist />} ></Route>
      <Route  path='/Signuppage' element={<Signuppage/>} ></Route>
      <Route  path='/Learnmore' element={<Learnmore/>} ></Route>
      <Route  path='/Booknow' element={<Booknow/>} ></Route>
      <Route  path='/Cart' element={<Cart/>} ></Route>

     </Routes>
  </ScrollToTop>
     </Router>

     </div>
    )
  }

export default App;
