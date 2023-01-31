import React, { useEffect } from 'react'
import '../Css/login.css'
import { Link } from 'react-router-dom'
import Nav from '../RE-use/Nav'
import '../Css/login.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Signuppage = () => {
    useEffect(()=>{
    AOS.init({duration:2000});
  }, [])

  return (
    <>
      <Nav/>
     <div className=' bg-white   d-flex justify-content-between' >
    <div className='bg-primary p-3  login' data-aos="flip">
        <form className=' bg-light  mt-5    mx-auto p-5  validate'>
        <h4 className='text-center mt-2 fw-bold text-primary'>Welcome</h4>
  <div class="form-group py-3 mt-5">
    
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
    <Link to='/Loginpage'><button type="submit" class="btn bg-primary text-light fw-bold text-center w-75 mt-4 px-4">Signup</button></Link>
  <p className='mt-5 small text-secondary'> have an account Already?<Link to='/Loginpage' className='text-decoration-none'> <span className='text-primary fw-bold' type='button'> Signin </span></Link></p>
  </div>
</form>
    </div>
    </div>
    </>
  )
}

export default Signuppage