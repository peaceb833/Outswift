import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../Css/nav.css'
import Image from '../RE-use/Image'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

function BasicExample() {
  useEffect(()=>{
    AOS.init({duration:2000});
  }, [])

  return (
    <Navbar   className=' h6 nav px-2  center ' role="button"  expand="lg"  data-aos="zoom-down">

      <Container className='px-0  '  >
        <Navbar.Brand  data-aos="zoom-down" className=' brand' ><Link to="/"><Image/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav "/>
        <Navbar.Collapse id="basic-navbar-nav">
   
          <Nav className="  text-center  fs-bold  me-md-5   mx-auto " data-aos="zoom-in" >
             <FontAwesomeIcon icon={faShoppingBasket} className="    bg-primary   font "/>
            </Nav>
          
            <Nav><Link to="/Loginpage"   className='mt-md-2 text-center mx-md-auto  mt-4 fw-bold text-primary text-decoration-none '><p className=''>Login</p></Link></Nav>
            <Nav><Link to="/PriceList"  data-aos="fade-left" className='text-center mx-3 ' > <button className=' bb btn mx-3 fw-bold  py-2 me-3 mx-auto  text-white   bg-primary'>BOOK NOW</button></Link></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

