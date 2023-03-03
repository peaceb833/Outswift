import React, { useEffect, useState } from 'react';
import Frontpage from './component/Frontpage';
import {BrowserRouter as  Router , Route,Routes } from 'react-router-dom'
import Loginpage from './component/Loginpage';
import Pricelist from './component/Pricelist';
import Signuppage from './component/Signuppage';
import Learnmore from './component/Learnmore';
import Plans from './component/Plans';
import Silverplan from './component/Silverplan';
import Goldplan from './component/Goldplan';
import Platinum from './component/Platinum';
import ScrollToTop from './component/ScrollToTop';
import Cart from './component/Cart';
import Productlist from './component/Productlist';
import Checkout from './component/Checkout';
import Spinner from './component/Spinner';


const App=()=>{
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load initial data or resources here...
    setTimeout(()=>{
    setLoading(false);
  },4000);
},[])
    return(

      <div className="App">
           <div>
      {loading ? (
        <Spinner />
      ) : (
              <Router>

      

    

<ScrollToTop>

<Routes>



<Route exact path='/Loginpage' element={<Loginpage />}  ></Route>

<Route  path='/' element={<Frontpage />} ></Route>

<Route  path='/Pricelist' element={<Pricelist />} ></Route>

<Route  path='/Signuppage' element={<Signuppage/>} ></Route>

<Route  path='/Learnmore' element={<Learnmore/>} ></Route>

<Route  path='/Plans' element={<Plans/>} ></Route>

<Route  path='/Silverplan' element={<Silverplan/>} ></Route>

<Route  path='/Goldplan' element={<Goldplan/>} ></Route>

<Route  path='/Platinum' element={<Platinum/>} ></Route>

<Route  path='/Cart' element={<Cart/>} ></Route>

<Route  path='/checkout' element={<Checkout/>} ></Route>
<Route  path='Productlist' element={<Productlist/>} ></Route>
</Routes>

</ScrollToTop>

</Router>

       
      )}
    </div>

     </div>
    )
  }

export default App;
