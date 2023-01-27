import React from 'react'
import '../Css/login.css'
import { Link } from 'react-router-dom'
import Image from '../RE-use/Image'
const Signuppage = () => {
  return (
    <>
     <div className=' bg-white p-3  d-flex justify-content-between '>
  <div>
   <Link to='/'  className='text-primary fw-bold'>Back</Link>
  </div>
  <div>
  <Link to='/Pricelist'  className='text-primary fw-bold'>
   <button className= ' bg-primary text-white btn h5 fw-bold'>Price List</button>
   </Link>
   </div>
 </div>
    <div className='bg-primary p-3'>
        <form className=' bg-light  mt-5    mx-auto p-5  validate'>
  <div class="form-group py-3">
  <Image/>
    <label for="exampleInputEmail1 "className='text-primary fw-bold'>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group py-3 ">
    <label for="exampleInputPassword1" className=' text-primary fw-bold'> New-Password</label>
    <input type="password" class="form-control " autoComplete="true" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group py-3 ">
  <label for="exampleInputPassword1" className=' text-primary fw-bold'>Confirm-Password</label>
  <input type="password" class="form-control  " autoComplete="true" id="exampleInputPassword1" placeholder="Enter-Password" />
</div>
  
    <div className='text-center '> 
    <Link to='/Loginpage'><button type="submit" class="btn bg-primary text-light fw-bold text-center mt-4 px-4">Signup</button></Link>
  <p className='mt-5 small text-secondary'> have an account Already?<Link to='/Loginpage' className='text-decoration-none'> <span className='text-primary fw-bold' type='button'> Signin </span></Link></p>
  </div>
</form>
    </div>
    </>
  )
}

export default Signuppage