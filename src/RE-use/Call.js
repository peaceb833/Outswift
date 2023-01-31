import React from 'react'
import { Link } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';
import "../Css/call.css"
const Call = () => {
  return (
    <div className='text-end   fixed-bottom mx-1 '>
    <Link to='Time' className='text-center'>
        <ChatIcon className='fw-bold   text-white  bg-primary  rounded fonty '></ChatIcon>
    </Link>

    </div>
  )
}

export default Call