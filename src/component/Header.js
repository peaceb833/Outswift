import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes, faHome } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <div className='bg-primary d-flex navv justify-content-between px-2  '>



<div className='px-3 '>



<Link to= '/'><FontAwesomeIcon icon={faHome} className=" p-2 bg-primary h3 text-white fw-bold"/>



</Link></div>



<div>



<Link to= '/Plans'><FontAwesomeIcon icon={faTimes} className=" p-1 rounded bg-white  h5 mt-2 text-primary fw-bold"/>



</Link>



</div>







</div>

    </div>
  )
}

export default Header