import React, { useEffect } from 'react'
import Nav from '../RE-use/Nav'
import '../Css/login.css'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Loginpage = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  }, [])
  return (
    <>
    <Nav />
    
      <div className='bg-primary p-3 login' data-aos="fade-up">
        <form className=' bg-light  mt-5    mx-auto p-5  validate'>
          <h4 className='text-center fw-bold text-primary'>Welcome</h4>
  <div class="form-group mt-5  py-3">
    <label for="exampleInputEmail1 "className='text-primary fw-bold'>Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted text-secondary small">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group py-3 ">
    <label for="exampleInputPassword1" className=' text-primary fw-bold'> Password</label>
    <input type="password" class="form-control " autoComplete="true" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <small id="emailHelp" class="form-text text-muted text-secondary small"> <Link to="">Forgot Password?</Link></small>

  
    <div className='text-center '> 
 <Link to="/Booknow"><button type="submit" class="btn bg-primary text-light fw-bold w-75 text-center mt-4 px-4">Login</button></Link>
  <p className='mt-5 small text-secondary'>Dont have account yet?<Link to='/Signuppage' className='text-decoration-none'><span className='text-primary fw-bold'> Signup </span></Link></p>
  </div>
  
</form>
    </div>
    </>
  )
}

export default Loginpage