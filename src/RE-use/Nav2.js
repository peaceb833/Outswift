import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../Css/nav.css'
import  {Link} from "react-scroll"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

function BasicExample() {
  useEffect(()=>{
    AOS.init({duration:2000});
  }, [])

  return (
    <Navbar   className=' h6 nav  bg-primary  center fixed-bottom  ' role="button"  expand="lg"  >

      <Container className='px-3  '  >
   
          <Nav className=" fw-bold    " role="button" >
         <Link to="silver"><p className='text-light silver fw-bold' >Silver plan</p></Link>
         </Nav>
         <div className='empty'></div> 
         <Nav className='fw-bold' role="button"> <Link to="gold"> <p className='text-light gold fw-bold'>Gold plan</p></Link></Nav>
         <div className='empty'></div> 
         <Nav className='fw-bold' role="button"> <Link to="platinum"><p className='text-light platinum fw-bold'>Platinum plan</p></Link></Nav>

           
      </Container>
    </Navbar>
  );
}

export default BasicExample;

