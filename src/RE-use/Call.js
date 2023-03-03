import React from 'react'
import { Link } from 'react-router-dom'
// import ChatIcon from '@material-ui/icons/Chat';
import "../Css/call.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';

const Call = () => {
  return (
    <div className='text-end mb-5 pb-5 fw-bold h1 fixed-bottom   '>
      <h1 className='d-block'>
        <div className=' '>
      <Link to='' className='text-center  '>
     <FacebookIcon className=' p-1 mt-4 text-white  bg-primary fonty shadow' />
     </Link>
     </div>
     <div>
     <Link to='' className='text-center '>
      <TwitterIcon className='p-1 mt-4 text-white  bg-primary fonty shadow'/>
      </Link>
      </div>
      <div>
      <Link to='' className='text-center '>
      <WhatsappIcon className='p-1 mt-4 text-white  bg-primary fonty shadow'/>
      </Link>
      </div>
      <div>
      <Link to='' className='text-center '>
      <InstagramIcon className=' p-1 mt-4 text-white  bg-primary fonty shadow'/>
      </Link>
      </div>
      </h1>              
      {/* <h1> */}
    {/* <Link to='https://wa.me/c/2349136804044' className=''> */}
{/*        */}
        {/* <ChatIcon className=' p-1 text-white  bg-primary fonty shadow 'fontSize='large'/> */}
{/*          */}
    {/* </Link> */}
{/* </h1> */}
    </div>
  )
}

export default Call





