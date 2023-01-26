import React from 'react'
import "../Css/next.css"
import vector from '../images/240_F_517843386_FxYIxJ7Nb9rGObTIsxG7OgkIl6CkhCkw-removebg-preview.png'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <div className=' About-container  p-4  'id='about'>
        <p className='h4 mt-4 mb-5 text-center fw-bolder  text-secondary'> About Outswift</p>
          <div className='container row'>
            <div className=' text-center col-md-6  col-sm-12 '>
              <img src={vector} className="text-center"/></div>
              <div className='col-md-6 col-sm-12'>
                <h2 className='h4 mt-3  text-secondary  text-lg-start text-center  '>We Are Passionate About Laundry</h2>
                <p className='text-lg-start text-center '>Looking for professional dry cleaners in London? ProLaundry is your best option if you want a customised service which is easy to use, reliable and provides a quality option for all your laundry and dry cleaning needs.

                Whether you have specific garments that need dry cleaning only, you run a hectic lifestyle and need to automate some of your household chores or you’re simply looking for a professional service to make your day-to-day life easier, we can help keep your clothes looking their best for longer.
                
                </p>
                <div className=' mt-3 text-lg-start text-center  '>
                <Link to="/Learnmore"><button className=' btn  rounded text-white fw-bold   bg-primary py-2 px-3'>Learn More</button></Link>
                </div>
                </div>
                </div>
                </div>
          </div>
          
        

  
  )
}

export default About