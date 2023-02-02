import React from 'react'
import { Link } from 'react-router-dom'
import ChatIcon from '@material-ui/icons/Chat';
import "../Css/call.css"
const Call = () => {
  return (
    <div className='text-end mb-5 pb-5 fw-bold h1 fixed-bottom   '>
      <h1>
    <Link to='Time' className='text-center '>
      
        <ChatIcon className=' p-1 text-white  bg-primary fonty shadow 'fontSize='large'/>
        
    </Link>
</h1>
    </div>
  )
}

export default Call





