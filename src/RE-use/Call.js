import React from 'react'
import { Link } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';
import "../Css/call.css"
const Call = () => {
  return (
    <div className='text-end  mb-5 pb-5 fw-bold h1 fixed-bottom   '>
    <Link to='Time' className='text-center '>
        <ChatIcon className='  text-white  bg-primary fonty 'fontSize='Large'></ChatIcon>
    </Link>

    </div>
  )
}

export default Call





