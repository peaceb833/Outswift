import React from 'react'
import { Link } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';
import "../Css/call.css"
const Call = () => {
  return (
    <div className='text-end mt-5 fw-bold h1 fixed-top   '>
    <Link to='Time' className='text-center '>
        <ChatIcon className='  text-white  bg-primary fonty p-1'fontSize='Large'></ChatIcon>
    </Link>

    </div>
  )
}

export default Call




